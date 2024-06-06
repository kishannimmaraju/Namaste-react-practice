import React from "react";
import ReactDOM from "react-dom/client";

// Nested elements creating in reactjs

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    React.createElement("h1", {}, "Hello India"),
    React.createElement("h1", {}, "Hello India"),
    React.createElement("h1", {}, "Hello digital india"),
    React.createElement("h1", {}, "Hello digital india"),
    React.createElement("h1", {}, "Hello digital india"),
    React.createElement("h1", {}, "Hello Reactjs")
  )
);

// const heading = React.createElement(
//   "h1",
//   { id: "heading", xyz: "abc" },
//   "Hello Reactjs"
// );
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
