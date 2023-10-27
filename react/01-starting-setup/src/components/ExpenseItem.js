import "./ExpenseItem.css";
function ExpenseItem(props) {
  //   const expenseDate = new Date(2023, 10, 27);
  //   const expenseTitle = "Car Insurance";
  //   const expenseAmount = 294.67;
  const expenseDate = props.date;
  const expenseTitle = props.title;
  const expenseAmount = props.amount;

  return (
    <div className="expense-item">
      <div>
        {expenseDate.getFullYear()}년 {expenseDate.getMonth()}월{" "}
        {expenseDate.getDate()}일
      </div>
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">${expenseAmount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
