import React from "react";
import "./ExpenseFilter.css";

const ExpenseFilter = ({ onChangeFilter }) => {
  const onChangeHandler = (e) => {
    onChangeFilter(e.target.value);
  };
  return (
    <div className="expense-filter">
      <div className="expense-filter__control">
        <label>Filtered by year</label>
        <select onChange={onChangeHandler}>
          <option value="0">All</option>
          <option value="2020">2020</option>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
          <option value="2023">2023</option>
        </select>
      </div>
    </div>
  );
};

export default ExpenseFilter;
