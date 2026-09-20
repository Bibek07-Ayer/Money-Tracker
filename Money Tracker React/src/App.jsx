import BalanceSummary from "./Components/BalanceSummary.jsx";

function App() {
  return (
    <div className="app">
      <h1>Money Tracker</h1>
      <BalanceSummary transactions={[]} />
    </div>
  );
}

export default App;