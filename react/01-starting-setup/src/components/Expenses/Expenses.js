import React, { useState } from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import ExpenseList from "./ExpensesList";
import ExpenseChart from "./ExpenseChart";
function Expenses(props) {
  const expenses = props.expenses;
  const [filteredYear, setFilteredYear] = useState("2020");

  const filteredExpenses = expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });
  // let filterInfoText = "2019, 2021 & 2022";

  // if (filteredYear === "2019") {
  //   filterInfoText = "2020, 2021 & 2022";
  // } else if (filteredYear === "2021") {
  //   filterInfoText = "2019, 2020 & 2022";
  // } else if (filteredYear === "2022") {
  //   filterInfoText = "2019, 2020 & 2021";
  // }
  const filterChangeHandler = (selectedYear) => {
    console.log(selectedYear);
    setFilteredYear(selectedYear);
  };
  return (
    <>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpenseChart expenses={filteredExpenses} />
        <ExpenseList items={filteredExpenses} />
      </Card>
    </>
  );
}

export default Expenses;
