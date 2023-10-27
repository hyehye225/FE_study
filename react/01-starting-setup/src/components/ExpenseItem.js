import "./ExpenseItem.css";
function ExpenseItem(props) {
  //   const expenseDate = new Date(2023, 10, 27);
  //   const expenseTitle = "Car Insurance";
  //   const expenseAmount = 294.67;
  const month = props.date.toLocaleString("ko", { month: "long" });
  const year = props.date.getFullYear();
  const day = props.date.toLocaleString("ko", { day: "2-digit" });

  const expenseTitle = props.title;
  const expenseAmount = props.amount;

  return (
    <div className="expense-item">
      <div>
        <div>{month}</div>
        <div>{day}</div>
        <div>{year}</div>
      </div>
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">${expenseAmount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
