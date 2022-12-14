import React from "react";
import ReactDOM from "react-dom/client";

import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import App from "./App";

const domNode = document.getElementById("root") as HTMLDivElement;
const root = ReactDOM.createRoot(domNode);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
