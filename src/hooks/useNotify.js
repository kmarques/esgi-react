import { useContext } from "react";
import { ToastContext } from "../contexts/ToastContext";

export default function useNotify() {
  const { addToast } = useContext(ToastContext);

  return addToast;
}
