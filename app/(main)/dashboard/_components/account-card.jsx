
"use client";
import React, { useEffect } from 'react';
import {
  Card,

  CardContent,
 
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Switch } from '@/components/ui/switch';
import { ArrowDownRight, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import useFetch from '@/hooks/use-fetch';
import { updateDefaultAccount } from '@/actions/accounts';
import { toast } from 'sonner';

const AccountCard = ({account}) => {
  const {name,type,balance,id,isDefault} = account; //Destructuring teh account taken as a prop inside AccountCard function


const{
  loading: updateDefaultLoading,
  fn:updateDefaultFn,
  data: updatedAccount,
  error,
} = useFetch(updateDefaultAccount);

const handleDefaultChange =async(event)=>{

event.preventDefault();
if(isDefault){
  toast.warning("You need atleast 1 default account");
  return;   //dont allow togglig off the default account
}

 await updateDefaultFn(id);
};

useEffect(()=>{

  if(updatedAccount?.success){
    toast.success("Default account updated successfully");
  }
}, [updatedAccount,updateDefaultLoading]);

useEffect(()=>{

  if(error){
    toast.error(error.message || "Failed to update default account");
  }
}, [error]);








  return (
    
      <Card className="hover:shadow-md transition-shadow group relative">
        <Link href={`/account/${id}`}>
  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2" >
    <CardTitle className="text-sm font-medium capitalize">{name}</CardTitle>
    <Switch checked={isDefault} onClick={handleDefaultChange}
    disabled={updateDefaultLoading}/> {/* this automatically switches the account that is default i.e if we have 2 accounts .. then it automatically makes teh switch button i.e slider to the right i.e make it true for the default account .. now if we switch on the button manually fro another account , then it should make the it as default and remove the previous one and update the page..so it is done by the server action */}
   
  </CardHeader>
  <CardContent>
    <div className='text-2xl font-bold '>
      ${parseFloat(balance).toFixed(2)}
        </div>

        <p className='txt-xs text-muted-foreground '>
          {type.charAt(0)+type.slice(1).toLowerCase()} Account  
        </p>


        {/* {type.charAt(0) + type.slice(1).toLowerCase()}
This is a JavaScript expression that modifies the type string (e.g., "SAVINGS" or "CURRENT"):
type.charAt(0):
Extracts the first character of the string type.
Example: "SAVINGS" → "S"
type.slice(1):
Extracts the substring starting from index 1 (i.e., from the second character onwards).
Example: "SAVINGS" → "AVINGS"
.toLowerCase():
Converts the sliced string to all lowercase letters.
"AVINGS" → "avings"
type.charAt(0) + type.slice(1).toLowerCase():
Combines the capitalized first character with the lowercase remainder.
"S" + "avings" → "Savings"
So, it converts any type string to "Sentence case". */}


  </CardContent>
  <CardFooter className="flex justify-between text-sm text-muted-foreground">
   <div className='flex items-center'>
    <ArrowUpRight className='mr-1 h-4 w-4 text-green-500'/>
          Income
   </div>

<div className='flex items-center'>
    <ArrowDownRight className='mr-1 h-4 w-4 text-red-500'/>
          Expense
   </div>


  </CardFooter>
  </Link>
</Card>
  
  )
}

export default AccountCard;