import { Friend } from "./Friend";

export function FriendsList({ friendsList, onSelect, selectedFriend }) {
  return (
    <ul>
      {friendsList.map((friend) => (
        <Friend
          key={friend.id}
          friend={friend}
          onSelect={onSelect}
          selectedFriend={selectedFriend}
        />
      ))}
    </ul>
  );
}
