import { useState } from "react";
import BalanceSummary from "./Components/BalanceSummary.jsx";
import TransactionForm from "./Components/TransactionForm.jsx";
import TransactionItem from "./Components/TransactionItem.jsx";

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

  // Add transaction
  function addTransaction(transaction) {
    setTransactions([...transactions, transaction]);
  }

  // Delete transaction
  function deleteTransaction(id) {
    setTransactions(
      transactions.filter((transaction) => transaction.id !== id)
    );
  }

  return (
    <div className="app">
      <h1>Money Tracker</h1>

      <BalanceSummary transactions={transactions} />

      <TransactionForm
        categories={categories}
        onAdd={addTransaction}
      />

      <h2>Transactions</h2>

      <ul className="list">
        {transactions.map((transaction) => (
          <TransactionItem
            key={transaction.id}
            transaction={transaction}
            onDelete={deleteTransaction}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;