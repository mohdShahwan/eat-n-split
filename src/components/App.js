import "../index.css";
import { useState } from "react";
import { FriendsList } from "./FriendsList";
import { SplitBillForm } from "./SplitBillForm";

export const initialFriends = [
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
  const [friendsList, setFriendsList] = useState(initialFriends);
  const [curSelection, setCurSelection] = useState(null);

  function handleAddFriend(newFriend) {
    setFriendsList((currentList) => [...currentList, newFriend]);
  }

  function handleUpdateFriend(id, newBalance) {
    setFriendsList((currentList) =>
      currentList.map((friend) =>
        friend.id === id ? { ...friend, balance: newBalance } : friend
      )
    );
  }

  function handleSelect(friend) {
    setCurSelection(() => (curSelection?.id === friend?.id ? null : friend));
  }

  return (
    <div className="app">
      <FriendsList
        onAdd={handleAddFriend}
        friendsList={friendsList}
        onSelect={handleSelect}
        curSelection={curSelection}
      />
      {curSelection && (
        <SplitBillForm
          curSelection={curSelection}
          onUpdate={handleUpdateFriend}
          onSubmit={handleSelect}
        />
      )}
    </div>
  );
}
