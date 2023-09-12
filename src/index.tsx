import * as React from "react";
import { render } from "react-dom";
import FirstComponent from "./components/FirstComponent";
import UserComponent from "./components/UserComponent";
import App from "./App";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);