import { Welcome } from "./Welcome";
import { HelloWorld } from "./HelloWorld";
import { AlertClock } from "./AlertClock";
import { Counter } from "./Counter";
import { Clock } from "./Clock";

export function App() {
  return (
    <div>
      <h1>My Awesome Application</h1>
      <hr />
      <Welcome name="John" age={"24"} />
      <AlertClock />
      <Counter />
      <Clock />
    </div>
  );
}
