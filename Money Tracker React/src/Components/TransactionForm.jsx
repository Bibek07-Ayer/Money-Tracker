import { useState } from "react";

function TransactionForm({ categories, onAdd }) {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("expense");
  const [category, setCategory] = useState(categories[0]);
  const [date, setDate] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (description === "" || amount === "" || date === "") {
      alert("Please fill in all fields");
      return;
    }

    onAdd({
      id: Date.now(),
      description,
      amount: Number(amount),
      type,
      category,
      date,
    });

    // Clear the form
    setDescription("");
    setAmount("");
    setDate("");
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2>Add Transaction</h2>

      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <input
        type="number"
        placeholder="Amount"
        min="0"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <select value={type} onChange={(e) => setType(e.target.value)}>
        <option value="expense">Expense</option>
        <option value="income">Income</option>
      </select>

      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        {categories.map((c) => (
          <option key={c} value={c}>
            {c}
          </option>
        ))}
      </select>

      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />

      <button type="submit">Add</button>
    </form>
  );
}

export default TransactionForm;