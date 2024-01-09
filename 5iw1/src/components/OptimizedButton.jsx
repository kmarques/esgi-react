import { useMemo } from "react";
import Button from "./Button";

export default function OptimizedButton(props) {
  return useMemo(
    () => console.log("rerender", props.title) || <Button {...props} />,
    Object.values(props)
  );
}
