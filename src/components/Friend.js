import { Button } from "./Button";
import { Span } from "./Span";

export function Friend({ friend }) {
  const { name, image, balance } = friend;

  return (
    <li>
      <img src={image} alt={`${name}`} />
      <h3>{name}</h3>
      <p>
        {balance === 0 && <Span>You and {name} are even</Span>}
        {balance > 0 && (
          <Span color="green">
            {name} owes you {balance}€
          </Span>
        )}
        {balance < 0 && (
          <Span color="red">
            You owe {name} {-balance}€
          </Span>
        )}
      </p>
      <Button>Select</Button>
    </li>
  );
}
