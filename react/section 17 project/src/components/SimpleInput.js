import { useRef, useState, useEffect } from "react";
const SimpleInput = (props) => {
  const nameInputRef = useRef();
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  const enteredNameIsValid = enteredName.trim() !== "";
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };
  const nameInputBlurHandler = (event) => {
    setEnteredNameTouched(true);
  };
  const formSubmissionHandler = (event) => {
    event.preventDefault();

    setEnteredNameTouched(true);
    if (!enteredNameIsValid) {
      return;
    }

    setEnteredName("");
    setEnteredNameTouched(false);
    const enteredValue = nameInputRef.current.value;
    console.log(enteredValue);
  };

  const nameInputClasses = nameInputIsInvalid
    ? "form-control invalid"
    : "form-control";
  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          value={enteredName}
          ref={nameInputRef}
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandler}
        />
        {nameInputIsInvalid && (
          <p className="error-text">Name must not be empty.</p>
        )}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
