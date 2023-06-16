import { useState } from "react";
import { initialFriends } from "./App";
import { Friend } from "./Friend";
import { AddFriendForm } from "./AddFriendForm";

export function FriendsList() {
  const [friendsList, setFriendsList] = useState(initialFriends);

  function handleAddFriend(newFriend) {
    setFriendsList((currentList) => [...currentList, newFriend]);
  }

  return (
    <div className="sidebar">
      <ul>
        {friendsList.map((friend) => (
          <Friend key={friend.id} friend={friend} />
        ))}
      </ul>
      <AddFriendForm onAdd={handleAddFriend} />
    </div>
  );
}
