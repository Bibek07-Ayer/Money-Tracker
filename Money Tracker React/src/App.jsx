import { useState } from "react";
import useLocalStorage from "./Hooks/useLocalStorage";
import BalanceSummary from "./Components/BalanceSummary";
import TransactionForm from "./Components/TransactionForm";
import FilterBar from "./Components/FilterBar";
import TransactionList from "./Components/TransactionList";
import "./App.css";

const categories = ["Food", "Transport", "Bills", "Shopping", "Salary", "Other"];

function App() {
  const [transactions, setTransactions] = useLocalStorage("transactions", []);
  const [category, setCategory] = useState("All");
  const [sortBy, setSortBy] = useState("newest");

  function addTransaction(transaction) {
    setTransactions([transaction, ...transactions]);
  }

  function deleteTransaction(id) {
    setTransactions(transactions.filter((t) => t.id !== id));
  }

  // Filter by category, then sort by date
  const visibleTransactions = transactions
    .filter((t) => category === "All" || t.category === category)
    .sort((a, b) =>
      sortBy === "newest"
        ? b.date.localeCompare(a.date)
        : a.date.localeCompare(b.date)
    );

  return (
    <div className="app">
      <h1>💰 Money Tracker</h1>

      <BalanceSummary transactions={transactions} />

      <div className="main-layout">
        <TransactionForm categories={categories} onAdd={addTransaction} />

        <div>
          <FilterBar
            categories={categories}
            category={category}
            sortBy={sortBy}
            onCategoryChange={setCategory}
            onSortChange={setSortBy}
          />
          <TransactionList
            transactions={visibleTransactions}
            onDelete={deleteTransaction}
          />
        </div>
      </div>
    </div>
  );
}

export default App;