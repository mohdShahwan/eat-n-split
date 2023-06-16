import { Button } from "./Button";
import { Span } from "./Span";

export function Friend({ friend, onSelect, curSelection }) {
  const { id, name, image, balance } = friend;
  const isSelected = curSelection?.id === id;

  return (
    <li>
      <img src={image} alt={`${name}`} />
      <h3>{name}</h3>
      <p>
        {balance === 0 && <Span>You and {name} are even</Span>}
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
      </p>
      <Button onClick={() => onSelect(friend)}>
        {isSelected ? "Close" : "Select"}
      </Button>
    </li>
  );
}
