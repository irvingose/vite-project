import { Welcome } from "./Welcome";
import { HelloWorld } from "./HelloWorld";
import { AlertClock } from "./AlertClock";

export function App() {
  return (
    <div>
      <h1>My Awesome Application</h1>
      <hr />
      <Welcome name="Franco" age={"17"} />
      <AlertClock />
    </div>
  );
}
