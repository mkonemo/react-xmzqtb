import React from 'react';

import './ExpensesList.css';

const ExpensesList = (props) => {

  let expenseContent = <p>No expense found</p>;
  if (filteredExpenses.length > 0) {
    expenseContent = filteredExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  }

  return (

  );
}

export default ExpensesList