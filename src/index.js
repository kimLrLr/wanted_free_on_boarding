import React from "react";
import ReactDOM from "react-dom/client";
import { Count01 } from "./day02/Count01";
import { Count02 } from "./day02/Count02";
import { Count03 } from "./day02/Count03";
import { Count04 } from "./day02/Count04";
import { Count05 } from "./day02/Count05";
import { Count06 } from "./day02/Count06";
import { Count07 } from "./day02/Count07";
// import { Count08 } from "./day02/Count08";
// import { ToDoMiniTest01 } from "./day01/ToDoMiniTest01";
// import { ToDoMiniTest02 } from "./day01/ToDoMiniTest02";
// import { ToDoMiniTest03 } from "./day01/ToDoMiniTest03";
// import ToDoMiniTest04 from "./day01/ToDoMiniTest04";
// import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}

    {/* <ToDoMiniTest01 />
    <hr />
    <ToDoMiniTest02 />
    <hr />
    <ToDoMiniTest03 />
    <hr />
    <ToDoMiniTest04 /> */}
    {/* 1일차 */}

    {/* React Hooks를 이용한 카운터 앱 만들기 */}
    <Count01 />
    <Count02 />
    <Count03 />
    <Count04 />
    <Count05 />
    <Count06 />
    <Count07 />
    {/* <Count08 /> */}
    {/* 2일차 */}
  </React.StrictMode>
);
