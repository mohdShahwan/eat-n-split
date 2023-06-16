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
  const id = Math.floor(Math.random() * 999999 + 1);
  const [isOpen, setIsOpen] = useState(false);
  const [newFriend, setNewFriend] = useState({
    name: "",
    image: `https://i.pravatar.cc/48?u=${id}`,
    balance: 0,
  });

  function handleAddFriend() {
    setIsOpen(() => false);
    onAdd({ id: id, ...newFriend });
    setNewFriend(() => {
      return {
        name: "",
        image: `https://i.pravatar.cc/48?u=${id}`,
        balance: 0,
      };
    });
  }

  if (!isOpen)
    return <Button onClick={() => setIsOpen(() => true)}>Add friend</Button>;

  return (
    <form className="form-add-friend">
      <label>👩🏻‍🤝‍👩🏻Friend name</label>
      <input
        type="text"
        value={newFriend.name}
        onChange={(e) =>
          setNewFriend((currentNewFriend) => {
            return { ...currentNewFriend, name: e.target.value };
          })
        }
      />
      <label>🌃Image URL</label>
      <input
        type="text"
        value={newFriend.image}
        onChange={(e) =>
          setNewFriend((currentNewFriend) => {
            return { ...currentNewFriend, image: e.target.value };
          })
        }
      />
      <Button onClick={handleAddFriend}>Add</Button>
    </form>
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
