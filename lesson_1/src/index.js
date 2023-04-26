import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

const root = document.getElementById("root");

// const main = document.createElement("div");
// main.id = "main_id";

// root.append(main);

// const p = (children) => React.createElement("p", { children });

// const main = React.createElement("div", {
//   id: "main_id",
//   class: "test_class",
//   children: [p(["Hello world", " ", "I'm React"])],
// });

ReactDOM.createRoot(root).render(<App />);

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<React.StrictMode></React.StrictMode>);
