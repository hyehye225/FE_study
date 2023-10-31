import Form from "./components/Form";
import Header from "./components/Header";
import Table from "./components/Table";
import React, { useState } from "react";
function App() {
  const [data, setData] = useState([]);
  const [input, setInput] = useState(null);
  const calculateHandler = (userInput) => {
    // Should be triggered when form is submitted
    // You might not directly want to bind it to the submit event on the form though...

    const yearlyData = []; // per-year results

    console.log(userInput);
    let currentSavings = +userInput["current-savings"]; // feel free to change the shape of this input object!
    const yearlyContribution = +userInput["yearly-contribution"]; // as mentioned: feel free to change the shape...
    const expectedReturn = +userInput["expected-return"] / 100;
    const duration = +userInput["duration"];

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        // feel free to change the shape of the data pushed to the array!
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }
    console.log(yearlyData);
    setInput(userInput);
    setData(yearlyData);
    // do something with yearlyData ...
  };

  return (
    <div>
      <Header content="Investment Calculator" />
      <Form calculateHandler={calculateHandler} />
      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}
      {data.length > 0 ? (
        <Table datas={data} initialInvestment={input["current-savings"]} />
      ) : (
        <p>No Datas Found.</p>
      )}
    </div>
  );
}

export default App;
