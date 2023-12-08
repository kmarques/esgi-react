import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

export default function Button({
  title = "Title",
  children,
  component: Component = "button",
  variant = "square",
  onClick,
  style,
  ...others
}) {
  const theme = useContext(ThemeContext);
  title = children ?? title;

  const customStyle = {
    ...theme.button,
  };

  switch (variant) {
    case "square":
      customStyle.borderRadius = 0;
      break;
    case "round":
      customStyle.borderRadius = "10px";
      break;
    case "circle":
      customStyle.borderRadius = "50%";
      customStyle.height = customStyle.width = "50px";
      title = title.slice(0, 1);
      break;
  }

  Object.assign(customStyle, style);

  return (
    <Component style={customStyle} onClick={onClick} {...others}>
      {title}
    </Component>
  );
}
