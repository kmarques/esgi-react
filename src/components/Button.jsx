import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

function Button({
  title = "Click Me",
  component: Component = "button",
  onClick,
  children,
  backgroundColor = "black",
  color = "white",
  customStyle = {},
  ...others
}) {
  const {
    selectors: { getTheme },
  } = useContext(ThemeContext);
  const theme = getTheme();

  const style = {
    ...theme.button,
    color,
    backgroundColor,
    ...customStyle,
  };

  return (
    <Component style={style} onClick={onClick} {...others}>
      {children}
    </Component>
  );
}

export default Button;
