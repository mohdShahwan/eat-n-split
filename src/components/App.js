import "../index.css";
import { useState } from "react";
import { FriendsList } from "./FriendsList";
import { SplitBillForm } from "./SplitBillForm";
import { AddFriendForm } from "./AddFriendForm";
import { Button } from "./Button";

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
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [friendsList, setFriendsList] = useState(initialFriends);
  const [selectedFriend, setSelectedFriend] = useState(null);

  function handleShowAddFriend() {
    setShowAddFriend((cur) => !cur);
  }

  function handleAddFriend(newFriend) {
    setFriendsList((currentList) => [...currentList, newFriend]);
    setShowAddFriend(false);
  }

  function handleSplitBill(newBalance) {
    setFriendsList((currentList) =>
      currentList.map((friend) =>
        friend.id === selectedFriend.id
          ? { ...friend, balance: newBalance }
          : friend
      )
    );

    setSelectedFriend(null);
  }

  function handleSelection(friend) {
    setSelectedFriend(() => (selectedFriend?.id === friend.id ? null : friend));
    setShowAddFriend(false);
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList
          onAdd={handleAddFriend}
          friendsList={friendsList}
          onSelect={handleSelection}
          selectedFriend={selectedFriend}
        />
        {showAddFriend && <AddFriendForm onAdd={handleAddFriend} />}
        <Button onClick={handleShowAddFriend}>
          {showAddFriend ? "Close" : "Add friend"}
        </Button>
      </div>
      {selectedFriend && (
        <SplitBillForm
          selectedFriend={selectedFriend}
          onUpdate={handleSplitBill}
        />
      )}
    </div>
  );
}
