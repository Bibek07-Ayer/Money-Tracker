import useLocalStorage from "./hooks/useLocalStorage";
import BalanceSummary from "./Components/BalanceSummary.jsx";
import TransactionForm from "./Components/TransactionForm.jsx";
import TransactionList from "./Components/TransactionList.jsx";

function App() {
  const categories = [
    "Food",
    "Transport",
    "Shopping",
    "Bills",
    "Salary",
    "Other",
  ];

  const [transactions, setTransactions] = useLocalStorage("transactions", []);

  function addTransaction(transaction) {
    setTransactions([...transactions, transaction]);
  }

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

      <TransactionList
        transactions={transactions}
        onDelete={deleteTransaction}
      />
    </div>
  );
}

export default App;