import React, { useState } from "react";
import { Button, Card, Modal } from "../../";
import styles from "./UserForm.module.css";

const UserForm = ({ onSave }) => {
  const [input, setInput] = useState({ name: "", age: "" });
  const [error, setError] = useState();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (input.name.length === 0 || input.age.length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values)",
      });
      return;
    }
    if (Number(input.age) < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (> 0)",
      });
      setInput((prevState) => {
        return { ...prevState, age: "" };
      });
      return;
    }
    onSave(input);
    setInput({ name: "", age: "" });
  };

  const onChangeHandler = (e) => {
    const targetName = e.target.name;
    const targetValue = e.target.value;
    setInput((prevState) => {
      return { ...prevState, [targetName]: targetValue };
    });
  };

  const closeModalHandler = () => {
    setError(null);
  };

  return (
    <>
      {error && <Modal title={error.title} message={error.message} onClick={closeModalHandler} />}
      <Card className={styles.form}>
        <form onSubmit={onSubmitHandler}>
          <div>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" placeholder="Name" onChange={onChangeHandler} value={input.name} />
          </div>
          <div>
            <label htmlFor="age">Age</label>
            <input type="number" name="age" placeholder="Age" onChange={onChangeHandler} value={input.age} />
          </div>
          <Button className={`btn btn-primary`} type={`sumbit`}>
            + Add
          </Button>
        </form>
      </Card>
    </>
  );
};

export default UserForm;
