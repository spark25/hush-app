import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import UserContextComponent from "./context/UserContextComponent";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserContextComponent>
      <App />
    </UserContextComponent>
  </React.StrictMode>
);
