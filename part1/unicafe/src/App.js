import { useState } from "react";

function Header({ content }) {
  return <h2>{content}</h2>;
}

function Button({ label, onClick }) {
  return <button onClick={onClick}>{label}</button>;
}

function StatisticLine({ text, value }) {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  );
}

function Statistics({ good, neutral, bad }) {
  const all = good + neutral + bad;

  if (all === 0) {
    return "No feedback given";
  }

  return (
    <div>
      <StatisticLine text="good" value={good} />
      <StatisticLine text="neutral" value={neutral} />
      <StatisticLine text="bad" value={bad} />
      <StatisticLine text="all" value={all} />
      <StatisticLine text="average" value={(good - bad) / all} />
      <StatisticLine text="postive" value={`${(good / all) * 100} %`} />
    </div>
  );
}

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const setFeedback = (setState) => () =>
    setState((prevState) => prevState + 1);

  return (
    <div>
      <Header content={"give feedback"} />
      <div>
        <Button label="good" onClick={setFeedback(setGood)} />
        <Button label="neutral" onClick={setFeedback(setNeutral)} />
        <Button label="bad" onClick={setFeedback(setBad)} />
      </div>
      <Header content={"statistics"} />
      <Statistics good={good} bad={bad} neutral={neutral} />
    </div>
  );
}

export default App;
