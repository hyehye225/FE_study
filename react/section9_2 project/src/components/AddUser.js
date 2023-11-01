import classes from "./AddUser.module.css";
import React, { useState } from "react";
import Button from "./Button";
import ErrorModal from "./ErrorModal";
import Card from "./UI/Card";
const AddUser = (props) => {
  const [error, setError] = useState(undefined);
  const initialState = { name: "", age: "", id: "" };
  const setUserList = props.setUserList;
  const [user, setUser] = useState(initialState);
  const submitEventHandler = (event) => {
    event.preventDefault();
    console.log(user);
    if (user.name.trim().length === 0 || user.age.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values).",
      });
      return;
    }
    if (+user.age < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (> 0).",
      });
      return;
    }
    setUserList((prev) => {
      return [...prev, { name: user.name, age: user.age, id: Math.random() }];
    });
    setUser(initialState);

    console.log(user);
  };
  const changeEventHandler = (type, value) => {
    setUser((prev) => {
      return { ...prev, [type]: value };
    });
    console.log(user);
  };
  const errorHandler = () => {
    setError(null);
  };
  return (
    <div>
      <Card className={classes.input}>
        <form className={classes.input} onSubmit={submitEventHandler}>
          <label htmlFor="username" className={classes["input label"]}>
            Username
          </label>
          <input
            type="text"
            id="username"
            value={user.name}
            className={classes["input input"]}
            onChange={(event) => changeEventHandler("name", event.target.value)}
          ></input>
          <label htmlFor="age" className={classes["input label"]}>
            Age (Years)
          </label>
          <input
            type="number"
            id="age"
            value={user.age}
            className={classes["input input"]}
            onChange={(event) => changeEventHandler("age", event.target.value)}
          ></input>
          <Button type="submit">Add User</Button>
          {error && (
            <ErrorModal
              title={error.title}
              message={error.message}
              onConfirm={errorHandler}
            />
          )}
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
