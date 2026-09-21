function TransactionItem({ transaction, onDelete }) {
  const { id, description, amount, type, category, date } = transaction;

  return (
    <li className="item">
      <div>
        <strong>{description}</strong>
        <small>
          {category} • {date}
        </small>
      </div>

      <div className="item-right">
        <span className={type}>
          {type === "income" ? "+" : "-"}${amount}
        </span>
        <button onClick={() => onDelete(id)}>✕</button>
      </div>
    </li>
  );
}

export default TransactionItem;