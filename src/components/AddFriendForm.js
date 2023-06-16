import { useState } from "react";
import { Button } from "./Button";

export function AddFriendForm({ onAdd }) {
  const [isOpen, setIsOpen] = useState(false);
  const id = Math.floor(Math.random() * 999999 + 1);
  const [name, setName] = useState("");
  const [image, setImage] = useState(`https://i.pravatar.cc/48?u=${id}`);

  if (!isOpen)
    return <Button onClick={() => setIsOpen(() => true)}>Add friend</Button>;

  function handleAddFriend(e) {
    e.preventDefault();
    if (!name) return;

    setIsOpen(() => false);
    onAdd({ id: id, name: name, image: image, balance: 0 });
    setName("");
    setImage(`https://i.pravatar.cc/48?u=${id}`);
  }

  return (
    <>
      {/* TODO - onSubmit event */}
      <form className="form-add-friend">
        <label>👩🏻‍🤝‍👩🏻Friend name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(() => e.target.value)}
        />
        <label>🌃Image URL</label>
        <input
          type="text"
          value={image}
          onChange={(e) => setImage(() => e.target.value)}
        />
        <Button onClick={handleAddFriend}>Add</Button>
      </form>
      <Button onClick={() => setIsOpen(false)}>Close</Button>
    </>
  );
}
