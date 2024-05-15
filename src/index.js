import ReactDOM from "react-dom";
import { App } from "./App";
import "./index";

const root = document.querySelector("root");

fetch("https://api.github.com/users/irvingose")
  .then((response) => {
    console.log("Response status: ${response.status}");

    return response.json();
  })
  .then((json) => {
    console.log(json);
  });
