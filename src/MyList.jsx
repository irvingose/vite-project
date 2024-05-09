import { useState } from "react";

function MyListItem({ item }) {
  const [counter, setCounter] = useState(0);

  function handleIncrementCounter() {
    setCounter((c) => c + 1);
  }

  return (
    <li>
      <h4>{item.name}</h4>
      <p>{item.age} years old</p>
      <button onClick={handleIncrementCounter}>{counter}</button>
    </li>
  );
}

export function MyList({ items }) {
  return (
    <ul>
      {items.map((item) => (
        <MyListItem key={item.id} item={item} />
      ))}
    </ul>
  );
}
