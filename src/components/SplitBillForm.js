export function SplitBillForm({ friend }) {
  const { name, image, balance } = friend;
  return (
    <form className="form-split-bill">
      <h2>Split a bill with {name}</h2>
      <label>💰 Bill value:</label>
      <input type="text" />

      <label>🧍‍♂️ Your expense:</label>
      <input type="text" />

      <label>👩🏻‍🤝‍👩🏻 {name}'s expense:</label>
      <input type="text" />

      <label>🤑 Who is paying the bill?</label>
      <select>
        <option value="">You</option>
        <option value="">{name}</option>
      </select>
    </form>
  );
}
