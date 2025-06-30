"use client";


import React, { useEffect, useMemo, useState } from 'react';
import {
  Table,
  TableBody,

  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Checkbox } from '@/components/ui/checkbox';
import {  ChevronDown, ChevronLeft, ChevronRight, ChevronUp, Clock,  MoreHorizontal,  RefreshCw, Search, Trash, X } from 'lucide-react';
import { format } from 'date-fns';
import { categoryColors } from '@/data/categories';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Badge } from '@/components/ui/badge';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { Input } from '@/components/ui/input';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import useFetch from '@/hooks/use-fetch';
import { bulkDeleteTransaction } from '@/actions/accounts';
import { toast } from 'sonner';
import { BarLoader } from 'react-spinners';



const ITEMS_PER_PAGE =10;

const getRecurringLabel = (interval) => {
  const map = {
    daily: "Daily",
    weekly: "Weekly",
    monthly: "Monthly",
    yearly: "Yearly",
  };

  return map[interval?.toLowerCase()] || "Recurring";
};


export  function TransactionTable({transactions}) {

  
  const [selectedIds, setSelectedIds] =useState([]);
  //this for selecting mutiple ids for the editing and the deleting 

  const [sortConfig, setSortConfig] =useState({
    field: "date",
    direction:"desc",
  });

  //this is for sorting the transactions wherein fields can be amount , category etc 




const [searchTerm , setSearchTerm] =useState(""); //this is for search filter , type filer and recurring filter.
const [typeFilter, setTypeFilter] =useState("");
const [recurringFilter,setRecurringFilter] =useState("");
const [currentPage , setCurrentPage] =  useState(1);
const router = useRouter();


const{
  loading:deleteLoading,
  fn: deleteFn,
  data: deleted,
}=useFetch(bulkDeleteTransaction);







const filteredAndSortedTransactions = useMemo(()=>{

  let result=[...transactions];


//apply search filter

if(searchTerm){
  const searchLower = searchTerm.toLowerCase();
  result=result.filter((transaction)=>
  transaction.description?.toLowerCase().includes(searchLower));
}
//we will convert into lowercase the searchterm and if it is in description after coverting desccription in lowercase then we wil filter it out by including in transaction. result.filter((transaction) - this shows for each transaction-check.

//apply recurring filter

if(recurringFilter){
  result=result.filter((transaction)=>{
    if(recurringFilter === "recurring" ) return transaction.isRecurring; //if true return true
    return !transaction.isRecurring; //else false
  });
}

//apply type filter
if(typeFilter){
  result=result.filter((transaction)=>transaction.type === typeFilter);

}




// apply sorting- in this two values are taken for sorting - a and b . A negative value indicates a should come before b and for positive vice versa. 0 or null indicates a and b are equal.

result.sort((a,b)=>{

let comparision = 0;

switch (sortConfig.field) {
  case "date":
    comparision = new Date(a.date) - new Date(b.date);
    break;

  case "amount":
    comparision = a.amount - b.amount;
    break;



  case "category":
    comparision = a.category.localeCompare(b.category);
    break;

    default:
      comparision=0;
      break;
}
return sortConfig.direction === "asc" ? comparision: -comparision;
}
);

return result;

},[
  transactions,
  searchTerm,
  typeFilter,
  recurringFilter,
  sortConfig,
]);

//useMemo is a hook that takes in an array and when all the items in array are changed only then .. it applies the changes mentioned before the array.i.e useMemo(()=>{recalculating all the array items },[array items]); and will return a final value not a function.


//PAGINATION CALCULATION

const totalPages = Math.ceil(
  filteredAndSortedTransactions.length/ITEMS_PER_PAGE);


  const paginatedTransactions = useMemo(()=>{
    const startIndex =(currentPage -1) * ITEMS_PER_PAGE;
    return filteredAndSortedTransactions.slice(
      startIndex,
      startIndex + ITEMS_PER_PAGE
    );
  },[filteredAndSortedTransactions,currentPage]);




  const handleSort =(field)=>{

  setSortConfig(current =>({
    field,
    direction:
    current.field == field && current.direction === "asc" ? "desc" :"asc",

  }));

};


const handleSelect =(id)=>{

setSelectedIds((current )=> current.includes(id)? current.filter((item)=>item!=id):[...current,id]
);
};
///it checks ki current id is included in selectedids array or not , if it is in selectedids , remove it or else add it .
//current = [1, 2, 3], id = 2 ,Result → [1, 3]
//current = [1, 3], id = 2 Result → [1, 3, 2]


const handleSelectAll =() =>{

  setSelectedIds((current) => current.length === paginatedTransactions.length ? [] :paginatedTransactions.map((t)=>t.id)
);
};

//field,This sets the field property of the new sort configuration to the one passed into handleSort.For example, if you clicked the "Date" column, field will be 'date'.

//direction:current.field == field && current.direction === "asc" ? "desc" : "asc".This line handles toggling the sort direction:

//Clicking the same column toggles between ascending (asc) and descending (desc).Clicking a different column resets sort direction to "asc".



const handleBulkDelete = async () => {
  if(
    !window.confirm(`Are you sure you want to delete ${selectedIds.length} transactions?`)){
      return ;
    }
  deleteFn(selectedIds);
};

useEffect(() =>{
  if(deleted && !deleteLoading){
    toast.error("Transactions deleted successfully");
    
  }
},[deleted , deleteLoading]);


const handleClearFilters=()=>{

setSearchTerm("");
setTypeFilter("");
setRecurringFilter("");
setCurrentPage(1);


};


const handlePageChange =(newPage) =>{
  setCurrentPage(newPage);
  setSelectedIds([]);
  // Clear selections on page change
};




return (
    <div className='space-y-4' >
  {deleteLoading && (<BarLoader className='mt-4' width={"100%"} color="#9333ea" />)}

  {/*     FILTERS    */}

<div className="flex flex-col sm:flex-row gap-4">
  <div className="relative flex-1">
    <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />

    <Input placeholder="Search transactions..." value={searchTerm}
     onChange={(e) => {setSearchTerm(e.target.value);
      setCurrentPage(1);}
    } className="pl-8"/>
  </div>

  {/*  onChange={(e) => setSearchTerm(e.target.value)}.This sets up an event handler that runs every time the user types something.It updates the state searchTerm with the latest input value.e is the event object; e.target.value gets the text currently typed.*/}

<div  className="flex gap-2">


<Select value={typeFilter} 
onValueChange={(value)=>{setTypeFilter(value);
  setCurrentPage(1);
}
}
>
  <SelectTrigger>
    <SelectValue placeholder="All Types" />
  </SelectTrigger>
  <SelectContent>

    <SelectItem value="INCOME">Income</SelectItem>
    <SelectItem value="EXPENSE">Expense</SelectItem>
  </SelectContent>
</Select>


<Select value={recurringFilter}
 onValueChange={(value)=> { setRecurringFilter(value);
  setCurrentPage(1);
 }}>
  <SelectTrigger className="w-[140px]">
    <SelectValue placeholder="All Transactions" />
  </SelectTrigger>
  <SelectContent>

    <SelectItem value="recurring">Recurring Only</SelectItem>
    <SelectItem value="non-recurring">Non-recurring Only</SelectItem>
  </SelectContent>
</Select>

{/* BULK ACTIONS */}

{selectedIds.length>0 && (
  <div>
    <Button variant ="destructive" size="sm" onClick={handleBulkDelete}>
      <Trash className='h-4 w-4 mr-2'/>
      Delete Selected ({selectedIds.length})
    
    </Button>
    </div>
)}


{(searchTerm || typeFilter || recurringFilter) && (
  <Button variant="outline" size="icon" onClick={handleClearFilters} title="Clear Filters">
    <X  className='h-4 w-5'/>
  </Button>
)
}
</div>


</div>

{/* TRANSACTION */}

  <div className='rounded-md border'>
<Table>
  
  <TableHeader>
    <TableRow>
      <TableHead className="w-[50px]">
        <Checkbox  onCheckedChange={handleSelectAll}
        
        checked ={
          selectedIds.length === paginatedTransactions.length && paginatedTransactions.length > 0
        }
        

        
        />
      </TableHead>
      <TableHead className="cursor-pointer" onClick={()=>handleSort("date")}>
       

       <div className='flex items-center '>Date{" "}{sortConfig.field === "date" && (sortConfig.direction === "asc" ?(<ChevronUp className='ml-4 h-4 w-4'/>
       ):(
             <ChevronDown className='ml-1 h-4 w-4'/>
       ))}
        </div>
      </TableHead>


      <TableHead >
        Description
      </TableHead>


      <TableHead className="cursor-pointer" onClick={()=>handleSort("category")}>
  
  <div className='flex items-center '>Category
    {sortConfig.field === "category" && (sortConfig.direction === "asc" ?(<ChevronUp className='ml-4 h-4 w-4'/>
       ):(
             <ChevronDown className='ml-1 h-4 w-4'/>
       ))}
  </div>
      </TableHead>


      <TableHead className="cursor-pointer" onClick={()=>handleSort("amount")}>
      
      <div className='flex items-center justify-end '>Amount
       {sortConfig.field === "amount" && (sortConfig.direction === "asc" ?(<ChevronUp className='ml-4 h-4 w-4'/>
       ):(
             <ChevronDown className='ml-1 h-4 w-4'/>
       ))}


      </div>
      </TableHead>
      <TableHead >
        Recurring
      </TableHead>
      <TableHead  className="w-[50px]"></TableHead>
      
    </TableRow>
  </TableHeader>
  <TableBody>
    {paginatedTransactions.length===0?(
      <TableRow>
        <TableCell colSpan={7} className="text-center text-muted-foreground">No Transactions Found</TableCell>
      </TableRow>
    ):(
      paginatedTransactions.map((transaction)=>(
    <TableRow key={transaction.id} >
      <TableCell >
        
        <Checkbox onCheckedChange={()=> handleSelect(transaction.id)}
          checked={selectedIds.includes(transaction.id)}/>
         </TableCell>
      <TableCell>{format(new Date(transaction.date),"PP")}</TableCell> 
      <TableCell>{transaction.description}</TableCell>
      
      {/* pp is the type of format to display the date */}

       <TableCell className="capitalize">
        <span style={{
          background:categoryColors[transaction.category],
        }} className='px-2 py-1 rounded text-white text-sm'>{transaction.category}</span>

       </TableCell>


      <TableCell className="text-right font font-medium"
      style ={{
        color: transaction.type ==="EXPENSE" ? "red":"green",
      }}>
        {transaction.type ==="EXPENSE" ? "-":"+" }
        ${transaction.amount.toFixed(2)}
        </TableCell>
        <TableCell>
          {transaction.isRecurring ? (


   <TooltipProvider>

        <Tooltip>
  <TooltipTrigger> <Badge variant="outline" className="gap-1 bg-purple-100 text-purple-700 hover:bg-purple-200">
              <RefreshCw className='h-3 w-3'/>
             {getRecurringLabel(transaction.recurringInterval)}</Badge></TooltipTrigger>
  <TooltipContent>
  <div className='text-sm'>
    <div className='font-medium'>Next Date:</div>
    <div>{format(new Date (transaction.nextRecurringDate),"PP")}</div>
  </div>
  </TooltipContent>
</Tooltip>
</TooltipProvider>
          ):(
             <Badge variant="outline" className="gap-1">
              <Clock className='h-3 w-3'/>
              One-Time</Badge>
          )}

</TableCell>

<TableCell>

<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button variant="ghost" className="h-8 w-8 p-0"><MoreHorizontal className='h-4 w-4'/></Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent align="end">
    <DropdownMenuItem
    
     onClick={() =>
      router.push(
      `/transaction/create?edit=${transaction.id}`
    )
   }
    
    >Edit</DropdownMenuItem>

  {/*  When a user clicks on the element (e.g., a button),

It calls Router.push() to navigate to /transaction/create?edit=42 (assuming transaction.id = 42),

The edit=42 parameter can then be used on the /transaction/create page to pre-fill or edit that specific transaction.*/}

  <DropdownMenuSeparator />
    <DropdownMenuItem className="text-destructive" 
    
    onClick={() => deleteFn([transaction.id] ) }
      >Delete</DropdownMenuItem>

  </DropdownMenuContent>
</DropdownMenu>

</TableCell>
 </TableRow>
    //here we are coverting the transaction to 2 decimal places and also checking that it tansaction is of expense type then add a - sign and red color or (:) + sign and green color 
    ))

    )}
  </TableBody>
</Table>

</div>


{/* PAGINATION */}

  {totalPages > 1 && (
        <div className="flex items-center justify-center gap-2">
          <Button
            variant="outline"
            size="icon"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <span className="text-sm">
            Page {currentPage} of {totalPages}
          </span>
          <Button
            variant="outline"
            size="icon"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      )}


    </div>
  );
}

export default TransactionTable;