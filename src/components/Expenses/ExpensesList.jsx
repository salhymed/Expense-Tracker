import React from 'react'
import ExpenseItem from './ExpenseItem'
import './ExpensesList.css'


function ExpensesList({filtredExpenses}) {


    if( filtredExpenses.length == 0) {
        return (
            <h2 className="expenses-list__fallback">No Expenses so far !</h2>
        )
    }   
  return (
    <ul className="expenses-list">
        {    
            filtredExpenses.length > 0 && 
                filtredExpenses.map((item) => (
                <ExpenseItem
                key={item.id}
                title={item.title}
                amount={item.amount}
                date={item.date}
            />
            ))
        }
    </ul>
   

      
   

  )
}

export default ExpensesList