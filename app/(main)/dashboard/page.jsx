import { getUserAccounts } from '@/actions/dashboard';
import CreateAccountDrawer from '@/components/create-account-drawer';
import { Card, CardContent } from '@/components/ui/card';
import { Plus } from 'lucide-react';
import React from 'react';
import AccountCard from './_components/account-card';
import { getCurrentBudget } from '@/actions/budget';
import BudgetProgress from './_components/budget-progress';

 async function DashboardPage() {


  const accounts = await getUserAccounts();


const defaultAccount = accounts ?.find((account)=>account.isDefault);
let budgetData = null;
if(defaultAccount){
  budgetData = await getCurrentBudget(defaultAccount.id)

  //to get the default account id .. to show the budget of the default account only.
}







return(
  <div className='space-y-8'>

{/* --------------BUDGET PROGRESS------------------*/}

<BudgetProgress
  initialBudget ={budgetData?.budget}
  currentExpenses ={budgetData?.currentExpenses ||0}/>








{/*--------------------OVERVIEEW------------*/}











{/*--------------------------ACCOUNTS GRID-----------------------------*/}


<div className='grid gap-4 md:grid-cols-2 lg:grid-cols-3' >
  <CreateAccountDrawer>
    <Card className="hover:shadow-md transition-shadow cursor-pointer border-dashed">
      <CardContent className="flex flex-col items-center justify-center text-muted-foreground h-full pt-5">
        <Plus className='h-10 w-10 mb-2'></Plus>
        <p className='text-sm font-medium '>Add New Account</p>
      </CardContent>
    </Card>
  </CreateAccountDrawer>

  {accounts.length>0 && accounts?.map((account)=>{
    return <AccountCard key={account.id} account={account}/> // .map(...) only if accounts is not null or undefined..map(...) is used to loop over the array and create a new array of elements.For every account in accounts, it returns a JSX component <AccountCard />.account represents the current item from the accounts array.


 })}
</div>





  </div>
);
};
export default DashboardPage;