import { useState } from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './NewExpense/NewExpense';
  let DUMMY_EXPENSES =[
    {id: 'e1', title: 'Toilet Paper', amount: 94.12, date: new Date(2020, 7, 14),},
    {id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {id: 'e3', title: 'Car Insurance', amount: 294.67, date: new Date(2021, 2, 28),},
    {id: 'e4', title: 'New Desk (Wooden)', amount: 450, date: new Date(2021, 5, 12),},
  ];

  //DUMMY_EXPENSES = [];

  
function App() {

  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addNewExpense = (expense) =>{
    
    const newExpense = {
      id:expenses.length+1,
      ...expense
    }
    console.log(newExpense)
    setExpenses((prevState)=>{
      return [
        newExpense,
        ...prevState
      ]
    });
  }

  return (
    <div>
      <NewExpense onAddExpense={addNewExpense}/>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
