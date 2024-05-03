import { HelloWorld } from "./HelloWorld";

export function Welcome({ name, age }) {
  return (
    <div>
      <strong>
        <h2>Welcome, {name}!</h2>
      </strong>
      {Boolean(age) && <p>You are {age} years old.</p>}
      {age >= 18 ? <p>You are an adult!</p> : <p>You are very young!</p>}
      {age !== undefined}
      {age > 65 ? <p>You're old.</p> : null}
      {age > 18 && age < 65 && name === "John" ? <p>Welcome, John!</p> : null}
    </div>
  );
}
