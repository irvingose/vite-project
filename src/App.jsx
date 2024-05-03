import { Welcome } from "./Welcome";
import { HelloWorld } from "./HelloWorld";
import { AlertClock } from "./AlertClock";
import { Counter } from "./Counter";

export function App() {
  return (
    <div>
      <h1>My Awesome Application</h1>
      <hr />
      <Welcome name="Franco" age={"17"} />
      <AlertClock />
      <Counter />
    </div>
  );
}
