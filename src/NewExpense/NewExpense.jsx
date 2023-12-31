import React, {useState} from 'react'
import ExpenseForm from './ExpenseForm'
import './NewExpense.css'

function NewExpense(props) {

const [isEditing, setIsEditing] = useState(false);
    const saveExpenseData = (data) => {
       const expenseData = {
        ...data,
        date: new Date(data.date)
       }
    //    console.log(expenseData);
    props.onAddExpense(expenseData)

}

const isEditingHandler = () => {
    setIsEditing(true)
}

const stopEditing = (e) =>{
    e.preventDefault();
    setIsEditing(false)
}
  return (
    <div className="new-expense">
        {
            !isEditing && 
                <button onClick={isEditingHandler} type="submit">Add Expense</button>
        }

        {
            isEditing &&
            <ExpenseForm 
            onSaveExpenseData={saveExpenseData}
            onCancel={stopEditing}
            /> 
        }


    </div>

  )
}

export default NewExpense