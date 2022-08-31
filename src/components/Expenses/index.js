import React from "react";
import { ExpenseItem } from "../";
import "./Expenses.css";
const Expenses = ({ expenses }) => {
  return (
    <>
      <div className="expenses">
        {expenses.map((item) => {
          return <ExpenseItem expenseTitle={item.title} expenseAmount={item.amount} expenseDate={item.date} key={item.id} />;
        })}
      </div>
    </>
  );
};

export default Expenses;
