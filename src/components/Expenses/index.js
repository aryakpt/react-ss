import React, { useState } from "react";
import { ExpensesChart, ExpenseFilter, ExpensesList } from "../";
import "./Expenses.css";
const Expenses = ({ expenses }) => {
  const [filteredYear, setFilteredYear] = useState("0");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses =
    filteredYear === "0"
      ? [...expenses]
      : expenses.filter((expense) => {
          return expense.date.getFullYear().toString() === filteredYear;
        });

  return (
    <>
      <div className="expenses">
        <ExpenseFilter onChangeFilter={filterChangeHandler} />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList filteredExpenses={filteredExpenses} />
      </div>
    </>
  );
};

export default Expenses;
