import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ToDoMiniTest } from "./day01/ToDoMiniTest01";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}

    <ToDoMiniTest />
    {/* 1일차 */}
  </React.StrictMode>
);
