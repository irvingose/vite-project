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
import { ToDoList } from "./ToDoList";
import { Container } from "./Container";
import { LanguageContext } from "./LanguageContext";
import { useState } from "react";
import { GithubUser } from "./GithubUser";
import { GithubUsers } from "./GithubUsers";
import { UseCurrentLocation } from "./useCurrentLocation";

export function App() {
  const [language, setLanguage] = useState("en");
  const [username, setUsername] = useState(``);

  function handleSetLanguage(language) {
    setLanguage(language);
  }

  return (
    <div>
      <button onClick={() => handleSetLanguage("it")}>IT</button>
      <button onClick={() => handleSetLanguage("en")}>EN</button>
      <Container title={<h1>My Awesome Application</h1>}>
        <LanguageContext.Provider value={language}>
          <hr />
          <HelloWorld />
          <hr />
          <Welcome name="Franco" age={"14"} />
          <hr />
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <GithubUser username="irvingose" />
          <hr />
          <GithubUsers />
          <hr />
          <UseCurrentLocation />
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
          <hr />
          <ToDoList />
        </LanguageContext.Provider>
      </Container>
    </div>
  );
}
