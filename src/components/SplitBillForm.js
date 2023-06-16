import { Button } from "./Button";
import { useState } from "react";

export function SplitBillForm({ selectedFriend, onUpdate }) {
  const { name, balance } = selectedFriend;

  const [bill, setBill] = useState("");
  const [selfExpense, setSelfExpense] = useState("");
  const friendExpense = bill ? bill - selfExpense : "";
  const [payer, setPayer] = useState("self");

  function handleSubmit(e) {
    e.preventDefault();
    if (!bill || !selfExpense) return;

    onUpdate(
      payer === "self" ? balance + friendExpense : balance - selfExpense
    );
  }

  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <h2>Split a bill with {name}</h2>
      <label>💰 Bill value:</label>
      <input
        type="number"
        value={bill}
        onChange={(e) => setBill(() => +e.target.value)}
      />

      <label>🧍‍♂️ Your expense:</label>
      <input
        type="number"
        value={selfExpense}
        onChange={(e) =>
          setSelfExpense(() =>
            +e.target.value > bill ? selfExpense : +e.target.value
          )
        }
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
