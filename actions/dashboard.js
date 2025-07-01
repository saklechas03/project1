"use server";
import { auth } from "@clerk/nextjs/server";
import { db } from "@/lib/prisma";
import { revalidatePath } from "next/cache";


const serializeTransaction = (obj)=>{


 const serialized = {...obj};
 if(obj.balance){
  serialized.balance = obj.balance.toNumber();
 }

 if(obj.amount){
  serialized.amount = obj.amount.toNumber();
 }
     return serialized;
};


export async function createAccount(data){  //data is the name, type ,id etc fromthe accounts table  in prisma.
  try{


    const {userId} =await auth();
    if(!userId) throw new Error("Unauthorized");  // if user tries to get in without valid userId
    const user = await db.user.findUnique({
      where: {clerkUserId: userId} ,  //to check if user is present in our database or not
    });

    if(!user){
      throw new Error("User not found");
    }



  //Convert balance into float before saving

const balanceFloat = parseFloat(data.balance);
if(isNaN(balanceFloat)){
  throw new Error("Invalid balance amount")
}


///Check if this is the user's first account

const existingAccounts= await db.account.findMany({
  where: {userId : user.id},
});

const shouldBeDefault = existingAccounts.length===0 ? true: data.isDefault;

if(shouldBeDefault){
  await db.account.updateMany({
    where: {userId: user.id , isDefault:true},
    data: {isDefault: false},
  });
}
const account = await db.account.create({
  data:{
    ...data,
    balance: balanceFloat,
    userId: user.id,
    isDefault:shouldBeDefault,
  },
});


const  serializeAccount = serializeTransaction(account);

revalidatePath("/dashboard");
return {success:true , data:serializeAccount};

  }catch(error){
    throw new Error(error.message);

  }

}


export async function getUserAccounts(){
  const {userId} = await auth();
  if(!userId) throw new Error ("Unauthorized");
  const user = await db.user.findUnique({
    where:{
      clerkUserId: userId},
  });

  if(!user){
    throw new Error("User not found");
  }

  const accounts = await db.account.findMany({
    where:{userId: user.id},
    orderBy:{createdAt:"desc"}, //order the accounts with respect to when they were created 
    include:{
      _count:{ //count of all the transcations 
        select:{
          transactions: true,
        },
      },
    },
  });

  
const  serializeAccount = accounts.map(serializeTransaction);
return serializeAccount;
}



export async function getDashboardData(){


const {userId} = await auth();
  if(!userId) throw new Error ("Unauthorized");
  const user = await db.user.findUnique({
    where:{
      clerkUserId: userId},
  });

  if(!user){
    throw new Error("User not found");
  }

  //get all user transactions

  const transactions = await db.transaction.findMany({
    where:{userId: user.id},
    orderBy:{date:"desc"},
  });


return transactions.map(serializeTransaction);



}