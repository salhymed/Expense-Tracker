import React, { useState } from 'react'
import './ExpenseForm.css'

function ExpenseForm(props) {
    
    const [userInput, setUserInput] = useState({
        title: '',
        amount:'',
        date: ''

    });
    const titleChangeHandler = (ev) => {
       setUserInput((prevState) => {
        return { 
            ...prevState,
            title: ev.target.value
        };
       })
    };
    const amountChangeHandler = (ev) => {
        setUserInput((prevState) => {
            return { 
                ...prevState,
                amount: ev.target.value
            };
           })
    };
    const dateChangeHandler = (ev) => {
        setUserInput((prevState) => {
            return { 
                ...prevState,
                date: ev.target.value
            };
           })
    };

    const addExpense = (ev) => {
        ev.preventDefault();
        props.onSaveExpenseData(userInput);
        setUserInput({
            title: '',
            amount:'',
            date: ''
        })
    };

  return (
    <div>
        <form onSubmit={addExpense} >
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label htmlFor="Title">Title</label>
                    <input value={userInput.title} onChange={titleChangeHandler} type="text" placeholder='Title' />
                </div>
                <div className="new-expense__control">
                    <label htmlFor="Amount">Amount</label>
                    <input value={userInput.amount} onChange={amountChangeHandler} type="text" placeholder='Amount' />
                </div>
                <div className="new-expense__control">
                    <label htmlFor="Date">Date</label>
                    <input value={userInput.date} 
                        onChange={dateChangeHandler} 
                        type="date" 
                        min='2018-01-01' 
                        max='2024-01-01' 
                    />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
                <button onClick={props.onCancel}>Cancel</button>

            </div>
     
        </form>

    </div>
  )
}

export default ExpenseForm