import { Welcome } from "./Welcome";
import { HelloWorld } from "./HelloWorld";

export function App() {
  return (
    <div>
      <h1>My Awesome Application</h1>
      <hr />
      <Welcome name="John" age={"64"} />
    </div>
  );
}
