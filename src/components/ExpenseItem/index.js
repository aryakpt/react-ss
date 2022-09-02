import React from "react";
import { ExpenseDate } from "../";
import "./ExpenseItem.css";

const ExpenseItem = ({ expenseDate, expenseTitle, expenseAmount }) => {
  return (
    <div className="expense-item">
      <ExpenseDate expenseDate={expenseDate} />
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">${expenseAmount}</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
