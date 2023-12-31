import React from 'react'
import ExpenseForm from './ExpenseForm'
import './NewExpense.css'

function NewExpense(props) {


    const saveExpenseData = (data) => {
       const expenseData = {
        ...data,
        date: new Date(data.date)
       }
    //    console.log(expenseData);
    props.onAddExpense(expenseData)

}
  return (
    <div className="new-expense">
          <ExpenseForm onSaveExpenseData={saveExpenseData}/> 
    </div>

  )
}

export default NewExpense