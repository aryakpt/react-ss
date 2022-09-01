import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = ({ onSaveExpenseData }) => {
  const [userInput, setUserInput] = useState({ title: "", amount: "", date: "" });
  const [isShow, setIsShow] = useState(false);

  const inputChangeHandler = (e) => {
    setUserInput((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const expenseData = {
      ...userInput,
      date: new Date(userInput.date),
    };
    onSaveExpenseData(expenseData);
    setUserInput({ title: "", amount: "", date: "" });
    setIsShow(false);
  };

  const onShowHandler = () => {
    setIsShow(true);
  };

  const onHideHandler = () => {
    setIsShow(false);
  };

  return (
    <div className="new-expense">
      <div className={isShow ? "hidden" : ""}>
        <button onClick={onShowHandler}>Add New Expense</button>
      </div>
      <form className={isShow ? "" : "hidden"} onSubmit={submitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input type="text" name="title" placeholder="What is your expense?" onChange={inputChangeHandler} value={userInput.title} required />
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input type="number" name="amount" placeholder="Amount" min={`0.01`} step={`0.01`} onChange={inputChangeHandler} value={userInput.amount} required />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input type="date" name="date" onChange={inputChangeHandler} value={userInput.date} required />
          </div>
        </div>
        <div className="new-expense__actions">
          <button onClick={onHideHandler}>Cancel</button>
          <button type="submit">Add Expense</button>
        </div>
      </form>
    </div>
  );
};

export default ExpenseForm;
