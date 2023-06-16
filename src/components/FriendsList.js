import { Friend } from "./Friend";
import { AddFriendForm } from "./AddFriendForm";

export function FriendsList({ onAdd, friendsList }) {
  return (
    <div className="sidebar">
      <ul>
        {friendsList.map((friend) => (
          <Friend key={friend.id} friend={friend} />
        ))}
      </ul>
      <AddFriendForm onAdd={onAdd} />
    </div>
  );
}
