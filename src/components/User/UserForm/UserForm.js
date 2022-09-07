import React, { useState } from "react";
import { Button, Modal } from "../../";
import styles from "./UserForm.module.css";

const UserForm = ({ onSave }) => {
  const [input, setInput] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (input.name.length === 0 || input.password.length === 0 || input.email.length === 0) {
      const name = input.name.length === 0 ? "Name" : input.email.length === 0 ? "Email" : "Password";

      setError({
        title: "Invalid input",
        message: `Please enter a valid ${name} (non-empty values)`,
      });
      return;
    }
    if (!input.email.includes("@")) {
      setError({
        title: "Invalid Email",
        message: "Email must include @",
      });
      return;
    }
    onSave(input);
    setInput({ name: "", email: "", password: "" });
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
      <div className={styles.form}>
        <form onSubmit={onSubmitHandler}>
          <div>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" placeholder="Name" onChange={onChangeHandler} value={input.name} />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input type="text" name="email" placeholder="Email" onChange={onChangeHandler} value={input.email} />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" placeholder="Password" onChange={onChangeHandler} value={input.password} />
          </div>
          <Button className={`btn btn-primary`} type={`sumbit`}>
            + Add
          </Button>
        </form>
      </div>
    </>
  );
};

export default UserForm;
