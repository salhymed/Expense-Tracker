import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css';
import ExpensesList from './ExpensesList';

const Expenses = (props) => {
  const [filteredYear, setFiltredYear] = useState('2023');
  const filterChangeHandler = (selectedYear) => {
    setFiltredYear(selectedYear);
  };
  const filtredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  })
  return (
    <Card className="expenses">
          { props.items.length > 1 &&
          <ExpensesFilter
            selected={filteredYear}
            onChangeFilter={filterChangeHandler}
          />
          }
          <ExpensesList filtredExpenses={filtredExpenses} />
    </Card>
  );
};
export default Expenses;
