import { useState } from "react";
import BalanceSummary from "./Components/BalanceSummary.jsx";
import TransactionForm from "./Components/TransactionForm.jsx";

function App() {
  const categories = [
    "Food",
    "Transport",
    "Shopping",
    "Bills",
    "Salary",
    "Other",
  ];

  const [transactions, setTransactions] = useState([]);

  function addTransaction(transaction) {
    setTransactions([...transactions, transaction]);
  }

  return (
    <div className="app">
      <h1>Money Tracker</h1>

      <BalanceSummary transactions={transactions} />

      <TransactionForm
        categories={categories}
        onAdd={addTransaction}
      />
    </div>
  );
}

export default App;