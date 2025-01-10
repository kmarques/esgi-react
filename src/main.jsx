import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import ThemeProvider from "./contexts/ThemeContext.jsx";
import ToastProvider from "./contexts/ToastContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <ToastProvider>
        <App />
      </ToastProvider>
    </ThemeProvider>
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
