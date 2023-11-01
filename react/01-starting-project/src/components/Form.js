import classes from "./Form.module.css";
import React, { useState } from "react";
const Form = (props) => {
  const [csaving, setcsaving] = useState("");
  const [ysaving, setysaving] = useState("");
  const [interest, setinterest] = useState("");
  const [duration, setduration] = useState("");
  const calculateHandler = props.calculateHandler;

  const csChangeHandler = (event) => {
    setcsaving(event.target.value);
  };
  const ysChangeHandler = (event) => {
    setysaving(event.target.value);
  };
  const inChangeHandler = (event) => {
    setinterest(event.target.value);
  };
  const duChangeHandler = (event) => {
    setduration(event.target.value);
  };
  const onSubmitHandler = (event) => {
    event.preventDefault();
    const newInput = {
      "current-savings": csaving,
      "yearly-contribution": ysaving,
      "expected-return": interest,
      duration: duration,
      id: Math.round(Math.random() * 10).toString(),
    };
    const result = calculateHandler(newInput);
    console.log(result);
    setcsaving("");
    setysaving("");
    setinterest("");
    setduration("");

    console.log(newInput);
  };
  const onResetHandler = (event) => {
    setcsaving("");
    setysaving("");
    setinterest("");
    setduration("");
  };
  return (
    <form className={classes.form} onSubmit={onSubmitHandler}>
      <div className={classes["input-group"]}>
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            value={csaving}
            type="number"
            id="current-savings"
            onChange={csChangeHandler}
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            value={ysaving}
            type="number"
            id="yearly-contribution"
            onChange={ysChangeHandler}
          />
        </p>
      </div>
      <div className={classes["input-group"]}>
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            value={interest}
            type="number"
            id="expected-return"
            onChange={inChangeHandler}
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            value={duration}
            type="number"
            id="duration"
            onChange={duChangeHandler}
          />
        </p>
      </div>
      <p className={classes.actions}>
        <button
          type="reset"
          className={classes.buttonAlt}
          onClick={onResetHandler}
        >
          Reset
        </button>
        <button type="submit" className={classes.button}>
          Calculate
        </button>
      </p>
    </form>
  );
};
export default Form;
