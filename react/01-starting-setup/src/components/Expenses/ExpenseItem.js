import "./ExpenseItem.css";
import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
function ExpenseItem(props) {
  let expenseTitle = props.title;
  const expenseAmount = props.amount;

  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    setTitle("updated title");
  };
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{title}</h2>
          <div className="expense-item__price">${expenseAmount}</div>
        </div>
        <button onClick={clickHandler}>Change Title</button>
      </Card>
    </li>
  );
}

export default ExpenseItem;
