import { StrictMode } from "react";
import { App } from "./App";
import { createRoot } from "react-dom/client";
import "./index.scss";
import { BrowserRouter } from "react-router-dom";
import { Root } from "./Root";

createRoot(document.getElementById(`root`)).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
