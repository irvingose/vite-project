// App.js
import { Welcome } from "./Welcome";
import { Counter } from "./Counter";
import { Clock } from "./Clock";
import { MyForm } from "./MyForm";
import { ToDoList } from "./ToDoList";
import { Container } from "./Container";
import { useState } from "react";
import { GithubUser } from "./GithubUser";
import { UseCurrentLocation } from "./useCurrentLocation";
import { Link, Route, Routes } from "react-router-dom";
import { Catalogue } from "./Catalogue";
import { Product } from "./Product";
import { GithubUsers } from "./GithubUsers";
import AddUserMessage from "./AddUserMessage";

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
      <Container
        title={
          <div>
            <div>
              <h1>My Awesome Application</h1>
              <Link to="/">Home</Link> | <Link to="products">Products</Link>
            </div>
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="products" element={<Catalogue />} />
          <Route index element={<p>Please select a product.</p>} />
          <Route path=":id" element={<Product />} />
          <Route
            path="*"
            element={
              <div>
                <p>Not found</p>
                <Link to="/">Go home</Link>
              </div>
            }
          />
          <Route path="login" element={<MyForm />} />
          <Route path="counter" element={<Counter />} />
          <Route path="/users" element={<GithubUser />}>
            <Route index element={<AddUserMessage />} />{" "}
            <Route path=":username" element={<GithubUsers />} />
          </Route>
          <Route path="clock" element={<Clock />} />
          <Route path="location" element={<UseCurrentLocation />} />
          <Route path="todolist" element={<ToDoList />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
