import { Friend } from "./Friend";
import { AddFriendForm } from "./AddFriendForm";

export function FriendsList({ onAdd, friendsList, onSelect, curSelection }) {
  return (
    <div className="sidebar">
      <ul>
        {friendsList.map((friend) => (
          <Friend
            key={friend.id}
            friend={friend}
            onSelect={onSelect}
            curSelection={curSelection}
          />
        ))}
      </ul>
      <AddFriendForm onAdd={onAdd} />
    </div>
  );
}
