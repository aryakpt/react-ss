import React, { useState } from "react";
import { ExpenseDate } from "../";
import "./ExpenseItem.css";

const ExpenseItem = ({ expenseDate, expenseTitle, expenseAmount }) => {
  const [title, setTitle] = useState(expenseTitle);

  const clickHandler = () => {
    setTitle("Ganti Judul");
  };

  return (
    <div className="expense-item">
      <ExpenseDate expenseDate={expenseDate} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${expenseAmount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </div>
  );
};

export default ExpenseItem;
