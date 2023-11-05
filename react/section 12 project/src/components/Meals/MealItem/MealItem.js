import { useState } from "react";
import classes from "./MealItem.module.css";

const MealItem = (props) => {
  const price = `$${props.price.toFixed(2)}`; // 소수점 이하 2자리까지만 렌더링
  return (
    <li>
      <div className={classes.meals}>
        <h3>{props.name}</h3>
        <div className={classes.descriptionS}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div></div>
    </li>
  );
};
export default MealItem;
