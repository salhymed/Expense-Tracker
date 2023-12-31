import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css';

const Expenses = (props) => {


  const [filteredYear, setFiltredYear] = useState('2023');
  const filterChangeHandler = (selectedYear) => {
    setFiltredYear(selectedYear);
  };

  const filtredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  })

 
  let expensesContent = <p className="no-expenses">No Expenses so far !</p>
 
  if(filtredExpenses.length > 0) {
    expensesContent =  filtredExpenses.map((item) => (
      <ExpenseItem
        key={item.id}
        title={item.title}
        amount={item.amount}
        date={item.date}
      />
    ))
  }

  return (
    <Card className="expenses">

          { props.items.length > 1 &&
          <ExpensesFilter
            selected={filteredYear}
            onChangeFilter={filterChangeHandler}
          />
          }
  
      {expensesContent}
    </Card>
  );
};
export default Expenses;
