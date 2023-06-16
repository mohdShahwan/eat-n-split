import { Button } from "./Button";
import { useState } from "react";

export function SplitBillForm({ friend, onUpdate }) {
  let { id, name, balance } = friend;

  const [bill, setBill] = useState("");
  const [selfExpense, setSelfExpense] = useState("");
  const friendExpense = Number(bill) - Number(selfExpense);
  const [payer, setPayer] = useState("self");

  function handleSplitBill(e) {
    e.preventDefault();
    if (!bill || !selfExpense) return;

    payer === "self"
      ? (balance = balance + friendExpense)
      : (balance = balance - selfExpense);

    onUpdate(id, balance);
  }

  return (
    <form className="form-split-bill" onSubmit={handleSplitBill}>
      <h2>Split a bill with {name}</h2>
      <label>💰 Bill value:</label>
      <input
        type="number"
        value={bill}
        onChange={(e) => setBill(() => e.target.value)}
      />

      <label>🧍‍♂️ Your expense:</label>
      <input
        type="number"
        value={selfExpense}
        onChange={(e) => setSelfExpense(() => e.target.value)}
      />

      <label>👩🏻‍🤝‍👩🏻 {name}'s expense:</label>
      <input type="number" value={friendExpense} disabled />

      <label>🤑 Who is paying the bill?</label>
      <select value={payer} onChange={(e) => setPayer(() => e.target.value)}>
        <option value="self">You</option>
        <option value="friend">{name}</option>
      </select>
      <Button>Split bill</Button>
    </form>
  );
}
