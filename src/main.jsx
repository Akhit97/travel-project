import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Apps from "./Apps.jsx";
import AppsContacts from "./AppContacts.jsx";

createRoot(document.getElementById("root")).render(
  <App />,
  // < AppsContacts />,
  // <Apps />,
);
