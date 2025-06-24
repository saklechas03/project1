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
