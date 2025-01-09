import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);

//createRoot(document.getElementById("root")).render(
//  createElement(StrictMode, {}, createElement(App), createElement(App))
//);
//function createElement(domOrElement, props, ...children) {
//  if (typeof domOrElement === "function") {
//    return domOrElement({ ...props, children });
//  }
//}
