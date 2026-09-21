import TransactionItem from "./TransactionItem";

function TransactionList({ transactions, onDelete }) {
  // Conditional rendering: show a message when the list is empty
  if (transactions.length === 0) {
    return <p className="empty">No transactions yet. Add your first one!</p>;
  }

  return (
    <ul className="list">
      {transactions.map((t) => (
        <TransactionItem key={t.id} transaction={t} onDelete={onDelete} />
      ))}
    </ul>
  );
}

export default TransactionList;