import React, { useState } from "react";
import { Button, Card } from "../../";
import styles from "./UserForm.module.css";

const UserForm = ({ onSave }) => {
  const [input, setInput] = useState({ name: "", age: "" });
  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (input.name.length === 0 || input.age.length === 0) {
      return;
    }
    if (input.age < 1) {
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

  return (
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
  );
};

export default UserForm;
