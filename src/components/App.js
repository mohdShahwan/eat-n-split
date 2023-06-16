import "../index.css";
import { useState } from "react";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

export default function App() {
  return (
    <div className="app">
      <FriendsList />
    </div>
  );
}

function FriendsList() {
  const [friendsList, setFriendsList] = useState(initialFriends);

  function handleAddFriend(newFriend) {
    setFriendsList((currentList) => [...currentList, newFriend]);
  }

  return (
    <div className="sidebar">
      <ul>
        {friendsList.map((friend) => (
          <Friend key={friend.id} details={friend} />
        ))}
      </ul>
      <AddFriendForm onAdd={handleAddFriend} />
    </div>
  );
}

function AddFriendForm({ onAdd }) {
  const [isOpen, setIsOpen] = useState(false);
  const id = Math.floor(Math.random() * 999999 + 1);
  const [name, setName] = useState("");
  const [image, setImage] = useState(`https://i.pravatar.cc/48?u=${id}`);

  if (!isOpen)
    return <Button onClick={() => setIsOpen(() => true)}>Add friend</Button>;

  function handleAddFriend() {
    setIsOpen(() => false);
    onAdd({ id: id, name: name, image: image, balance: 0 });
    setName("");
    setImage(`https://i.pravatar.cc/48?u=${id}`);
  }

  return (
    <>
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

function Friend({ details }) {
  return (
    <li>
      <img src={details.image} alt={`${details.name}`} />
      <h3>{details.name}</h3>
      <p>Who owes the other</p>
      <Button>Select</Button>
    </li>
  );
}

function Button({ onClick, children }) {
  return (
    <button onClick={onClick} className="button">
      {children}
    </button>
  );
}
