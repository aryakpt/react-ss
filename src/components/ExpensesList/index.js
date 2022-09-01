import React from "react";
import "./ExpensesList.css";
import { ExpenseItem } from "../";

const ExpensesList = ({ filteredExpenses }) => {
  if (filteredExpenses.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses.</h2>;
  }
  return (
    <ul className="expenses-list">
      {filteredExpenses.map((item) => {
        return (
          <li key={item.id}>
            <ExpenseItem expenseTitle={item.title} expenseAmount={item.amount} expenseDate={item.date} />;
          </li>
        );
      })}
    </ul>
  );
};

export default ExpensesList;
