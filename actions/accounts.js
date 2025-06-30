
"use server";
import { db } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
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

export async function updateDefaultAccount(accountId){
   
   try {

    const {userId} =await auth();
        if(!userId) throw new Error("Unauthorized");  // if user tries to get in without valid userId
        const user = await db.user.findUnique({
          where: {clerkUserId: userId} ,  //to check if user is present in our database or not
        });
    
        if(!user){
          throw new Error("User not found");
        }
    
     await db.account.updateMany({
    where: {userId: user.id , isDefault:true},
    data: {isDefault: false},
  });

   const account = await db.account.update({
    where:{
      id: accountId,
      userId: user.id,
    },
    data:{isDefault:true},
   });

   revalidatePath('/dashboard');
   return {success:true , data:serializeTransaction(account)}; //return: Sends back a result from the function. `{ success: true, ... }An object that tells the frontend that the action was successful. `data: The actual data being sent back — here it’s the account info. `serializeTransaction(account)`- A function that **formats or cleans up** the `account` data (maybe to remove unwanted fields or convert date formats) before sending it to the frontend.

    
   } catch (error) {

    return{success: false, error: error.message};
    
   }
}

export async function getAccountWithTransactions(accountId){

      const {userId} =await auth();
        if(!userId) throw new Error("Unauthorized");  
        const user = await db.user.findUnique({
          where: {clerkUserId: userId} ,  
        });
    
        if(!user){
          throw new Error("User not found");
        }

const account = await db.account.findUnique({
  where: {id:accountId , userId:user.id},
  include:{
    transactions:{
      orderBy:{date:"desc"},
    },
    _count:{
      select:{transactions:true},
    },
  },
});

//{id: "acc_123",name: "HDFC Bank",transactions: [ ... ],_count: {transactions: 7}}

  
if (!account) return null;

return {
  ...serializeTransaction(account), //Likely a function that converts BigInt, Decimal, or Date values into string/number format (since raw DB values may not be serializable to JSON)
  transactions:account.transactions.map(serializeTransaction), //Applies the same serialization logic to each transaction
};
}

export async function bulkDeleteTransaction(transactionIds){

  try {

    const {userId} =await auth();
        if(!userId) throw new Error("Unauthorized");  
        const user = await db.user.findUnique({
          where: {clerkUserId: userId} ,  
        });
    
        if(!user){
          throw new Error("User not found");
        }
   

        const transaction = await db.transaction.findMany({
          where:{
            id:{in:transactionIds},
            userId: user.id,
          },
        });

        const accountBalanceChanges = transaction.reduce((acc,transaction)=>{
          const change =
          transaction.type === "EXPENSE" ? transaction.amount : -transaction.amount;
          acc[transaction.accountId] =(acc[transaction.accountId]||0)+change;
          return acc;
        },{});

        //acc means anaccumulator, here we are taking an accumulator for each transaction , if it is an expense then the transaction amount will get reduced and the accumulator will change - acc: The accumulator object where you're storing totals per accountId.transaction.accountId: The ID of the account (used as the key).acc[transaction.accountId] || 0:If a value already exists for that accountId, use it.If not (i.e. it's undefined), default to 0.+ change: Add the new change (positive or negative) to the total. also it has a default value {} - which is blank.   

  //delete transactions and update balances in a transaction

  await db.$transaction(async(tx)=>{
    //delete transactions using prisma transaction ($)..this is not our transaction.This initiates a database-level transaction, ensuring that:Either all operations succeed,Or none of them are applied (rollback on failure).This ensures atomicity: the deletions and balance updates must succeed together.



    await tx.transaction.deleteMany({
      where:{
        id:{in:transactionIds},
          userId:user.id,
        },
      
    });

  for (const [accountId, balanceChange] of Object.entries(accountBalanceChanges)) {
  await tx.account.update({
    where: { id: accountId },
    data: {
      balance: {
        increment: balanceChange,
      },
    },
  });
}


//increment is a Prisma operator that increases a numeric field.So this updates the balance field of the account by:Adding balanceChange if positive.Subtracting balanceChange if negative.The method Object.entries(obj) returns an array of the object's own enumerable property [key, value] pairs.

});
revalidatePath("/dashboard");
revalidatePath("/account[id]");
return {success:true};

 } catch (error) {
    return {success:false , error :error.message};
  }

}
