import { useState } from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './NewExpense/NewExpense';
  const DUMMY_EXPENSES = [
];
function App() {

  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addNewExpense = (expense) =>{
    setExpenses((prevState)=>{
      return [
        expense,
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
