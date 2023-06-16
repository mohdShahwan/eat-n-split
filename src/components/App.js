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

  function handleAddFriend() {
    setFriendsList((currentList) => [...currentList]);
  }

  return (
    <div className="sidebar">
      <ul>
        {friendsList.map((friend) => (
          <Friend key={friend.id} details={friend} />
        ))}
      </ul>
      <AddFriendForm />
    </div>
  );
}

function AddFriendForm() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="form form-add-friend">
      <Button>Add friend</Button>
    </div>
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
