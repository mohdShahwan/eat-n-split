import { Button } from "./Button";

export function Friend({ friend, onSelect, selectedFriend }) {
  const { id, name, image, balance } = friend;
  const isSelected = selectedFriend?.id === id;

  return (
    <li className={isSelected ? "selected" : ""}>
      <img src={image} alt={`${name}`} />
      <h3>{name}</h3>
      {balance === 0 && <p>You and {name} are even</p>}
      {balance > 0 && (
        <p className="green">
          {name} owes you {balance}€
        </p>
      )}
      {balance < 0 && (
        <p className="red">
          You owe {name} {-balance}€
        </p>
      )}
      <Button onClick={() => onSelect(friend)}>
        {isSelected ? "Close" : "Select"}
      </Button>
    </li>
  );
}
