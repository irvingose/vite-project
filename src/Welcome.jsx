import { Link } from "react-router-dom";
import { HelloWorld } from "./HelloWorld";

export function Welcome({ name, age }) {
  const WelcomeStyle = {
    backgroundColor: name ? "greenyellow" : "darkgray",
    color: name ? "#333" : "fff",
    border: "3px dotted black",
  };
  return (
    <div style={WelcomeStyle}>
      <strong>
        <h2>Welcome, {name}!</h2>
      </strong>
      {Boolean(age) && <p>You are {age} years old.</p>}
      {age >= 18 ? <p>You are an adult!</p> : <p>You are very young!</p>}
      {age !== undefined}
      {age > 65 ? <p>You're old.</p> : null}
      {age > 18 && age < 65 && name === "John" ? <p>Welcome, John!</p> : null}
      <Link to="/login">Login to the app:</Link>
    </div>
  );
}
