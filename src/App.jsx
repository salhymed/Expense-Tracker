import { useState } from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './NewExpense/NewExpense';
function App() {
  const myexpenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  const [expenses, setExpenses] = useState(myexpenses);

  const addNewExpense = (expense) =>{
    console.log([expense])

    myexpenses.push({
      id: 'e5',
      title: expense.title,
      amount: expense.amount,
      date: new Date(expense.date)
    });
  // setExpenses({data});
    
    console.log(myexpenses)
    setExpenses([{}])
  }

  return (
    <div>
      <NewExpense onAddExpense={addNewExpense}/>
      <Expenses items={myexpenses} />
    </div>
  );
}

export default App;
