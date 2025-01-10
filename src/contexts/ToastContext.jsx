import { createContext, useContext, useState } from "react";
import { ThemeContext } from "./ThemeContext";

export const ToastContext = createContext();

export default function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);
  const {
    selectors: { getTheme },
  } = useContext(ThemeContext);
  const toastTheme = getTheme().toast;

  function addToast(level, message, timeout = 3000) {
    const newToast = { level, message, timestamp: Date.now() };
    setToasts([newToast, ...toasts]);

    setTimeout(() => {
      setToasts(toasts.filter((toast) => toast !== newToast));
    }, timeout);
  }

  return (
    <ToastContext.Provider value={{ addToast }}>
      {children}
      {toasts.length > 0 && (
        <div
          style={{
            position: "fixed",
            bottom: 10,
            right: 10,
            display: "flex",
            flexDirection: "column",
            gap: 10,
          }}
        >
          {toasts.map((toast) => (
            <div key={toast.timestamp} style={toastTheme[toast.level]}>
              {toast.message}
            </div>
          ))}
        </div>
      )}
    </ToastContext.Provider>
  );
}
