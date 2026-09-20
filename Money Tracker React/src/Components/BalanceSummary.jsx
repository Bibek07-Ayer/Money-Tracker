function BalanceSummary({ transactions }) {
  const income = transactions
    .filter((t) => t.type === "income")
    .reduce((sum, t) => sum + t.amount, 0);

  const expenses = transactions
    .filter((t) => t.type === "expense")
    .reduce((sum, t) => sum + t.amount, 0);

  const balance = income - expenses;

  return (
    <div className="summary">
      <div className="card">
        <h3>Balance</h3>
        <p>${balance}</p>
      </div>
      <div className="card income">
        <h3>Income</h3>
        <p>${income}</p>
      </div>
      <div className="card expense">
        <h3>Expenses</h3>
        <p>${expenses}</p>
      </div>
    </div>
  );
}

export default BalanceSummary;