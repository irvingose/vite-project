import { Welcome } from "./Welcome";
import { HelloWorld } from "./HelloWorld";
import { AlertClock } from "./AlertClock";
import { Counter } from "./Counter";
import { Clock } from "./Clock";
import { MouseClicker } from "./MouseClicker";
import { MyForm } from "./MyForm";
import { MyUncontrolledForm } from "./MyUncontrolledForm";
import { MyList } from "./MyList";
import { Color } from "./Color";

export function App() {
  return (
    <div>
      <h1>My Awesome Application</h1>
      <hr />
      <Welcome name="John" age={"24"} />
      <hr />
      <MouseClicker />
      <hr />
      <AlertClock />
      <hr />
      <Counter />
      <hr />
      <Clock />
      <hr />
      <MyForm />
      <hr />
      <MyUncontrolledForm />
      <hr />
      <MyList
        items={[
          { id: 1, name: "Jane", age: 33 },
          { id: 2, name: "Kate", age: 23 },
          { id: 3, name: "John", age: 34 },
          { id: 4, name: "Billy", age: 43 },
          { id: 5, name: "Jimmy", age: 73 },
        ]}
      />
      <hr />
      <Color
        items={[
          { id: 1, name: "Red" },
          { id: 2, name: "Green" },
          { id: 3, name: "JBlue" },
        ]}
      />
    </div>
  );
}
