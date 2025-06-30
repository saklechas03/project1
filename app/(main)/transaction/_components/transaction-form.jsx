"use client";
import { createTransaction } from '@/actions/transaction';
import { transactionSchema } from '@/app/lib/schema';
import useFetch from '@/hooks/use-fetch';
import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react'
import { useForm } from 'react-hook-form';


import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import CreateAccountDrawer from '@/components/create-account-drawer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from 'date-fns';
import { CalendarIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Calendar } from '@/components/ui/calendar';
import { Switch } from '@/components/ui/switch';












const AddTransactionform = ({accounts,categories}) => {
const {register,setValue,handleSubmit,formState:{errors},watch,getValues,reset}=
 useForm({
  resolver:zodResolver(transactionSchema),
  defaultValues:{

    type: "EXPENSE" , 
    amount: "",
    description: "",
    accountId: accounts.find((ac)=>ac.isDefault)?.id,
    date: new Date(),
    isRecurring:false,
  },
 });

 const {
  loading: transactionLoading,
  fn: transctionFn,
  data: transactionResult,
 } = useFetch(createTransaction);

const type = watch("type");
const isRecurring = watch("isRecurring");
const date = watch("date");


const filteredCategories = categories.filter((category)=> category.type === type); // i.e categories will be shown according to the type i.e for expense and income categories would be different


 return (

  <form className="space-y-6">


     {/* AI RECIPT SCANNER */}



   {/*  AMOUNT & ACCOUNT */}

    <div className="space-y-2">

   <label className="text-sm font-medium">Type</label>
   <Select onValueChange={(value)=> setValue("type",value)}
    defaultValue={type}>
  <SelectTrigger>
    <SelectValue placeholder="Select Type" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="EXPENSE">Expense</SelectItem>
    <SelectItem value="INCOME">Income</SelectItem>
   
  </SelectContent>
</Select>


{errors.type && (
  <p className='text-sm text-red-500'>{errors.type.message}</p>
)}

 </div>

 <div className='grid gap-6 md:grid-cols-2'>

<div className="space-y-2">

   <label className="text-sm font-medium">Amount</label>
   <Input
   type="number"
   step ="0.01"
   placeholder="0.00"
   {...register("amount")}/>
   

{errors.amount && (
  <p className='text-sm text-red-500'>{errors.amount.message}</p>
)}
    </div>

<div className="space-y-2">

   <label className="text-sm font-medium">Account</label>
   <Select onValueChange={(value)=> setValue("accountId",value)}
    defaultValue={getValues("accountId")}>
  <SelectTrigger>
    <SelectValue placeholder="Select account" />
  </SelectTrigger>
  <SelectContent>
    {accounts.map((account)=>(
    <SelectItem key={account.id} value ={account.id}>{account.name}(${parseFloat(account.balance).toFixed(2)})</SelectItem>
   ))}
   <CreateAccountDrawer>
    <Button variant="ghost"  className="relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none hover:bg-accent hover:text-accent-foreground">Create Account </Button>
   </CreateAccountDrawer>
  </SelectContent>
</Select>


{errors.accountId && (
  <p className='text-sm text-red-500'>{errors.accountId.message}</p>
)}

 </div>
</div>




{/* CATEGORY */}


<div className="space-y-2">

   <label className="text-sm font-medium">Category</label>
   <Select onValueChange={(value)=> setValue("category",value)}
    defaultValue={getValues("category")}>
  <SelectTrigger>
    <SelectValue placeholder="Select category" />
  </SelectTrigger>
  <SelectContent>
    {filteredCategories.map((category)=>(
    <SelectItem key={category.id} value ={category.id}>{category.name}</SelectItem>
   ))}
   
  </SelectContent>
</Select>


{errors.category && (
  <p className='text-sm text-red-500'>{errors.category.message}</p>
)}

 </div>



 {/* DATE */}


 <div className="space-y-2">

   <label className="text-sm font-medium">Date</label>

<Popover>
  <PopoverTrigger asChild>
    <Button variant="outline"  className={cn(
                "w-full pl-3 text-left font-normal",
                !date && "text-muted-foreground"
              )}>
      {date ? format(date , "PPP") : <span>Pick a date</span>}
      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
    </Button>
  </PopoverTrigger>
  <PopoverContent className="w-auto p-0" align="start">

    <Calendar mode="single" 
    selected = {date}
    onSelect = {(date) => setValue("date",date)}
    disabled={(date) => date > new Date() || date < new Date("1900-01-01")}
    initialFocus/> 
    {/*i.e date will be disabled if we select date greater than present date.*/}




  </PopoverContent>
</Popover>

{errors.date && (
  <p className='text-sm text-red-500'>{errors.date.message}</p>
)}

 </div>



 {/* DESCRIPTION */}


   <div className="space-y-2">
        <label className="text-sm font-medium">Description</label>
        <Input placeholder="Enter description" {...register("description")} />
        {errors.description && (
          <p className="text-sm text-red-500">{errors.description.message}</p>
        )}
      </div>



    {/* IS RECURRING */}

<div className='flex items-center justify-between rounded-lg border p-3'>
  <div className='space-y-0.5'>

    <label htmlFor='balance' className='text-sm font-medium cursor-pointer'>Recurring Transaction</label>
  <p className='text-sm text-muted-foreground'>This account will be selected by default for transactions </p>

  </div>
  
  <Switch 
  checked ={isRecurring}
  onCheckedChange ={(checked)=> setValue("isRecurring" , checked)}
    />
     </div>







    </form>
  )
}

export default AddTransactionform;