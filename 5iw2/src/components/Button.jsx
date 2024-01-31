import { useMemo } from "react";

function Button({
  title = "Title",
  variant = "rounded",
  component: Component = "button",
  onClick = () => {
    throw new Error("Click handler not defined");
  },
  children,
  ...props
}) {
  const style = useMemo(() => {
    const _style = {
      backgroundColor: "red",
      color: "green",
    };

    switch (variant) {
      case "squared":
        _style.borderRadius = 0;
        break;
      case "rounded":
        _style.borderRadius = "10px";
        break;
      case "circle":
        _style.borderRadius = "50%";
        _style.height = "50px";
        _style.width = "50px";
        break;
    }

    return _style;
  }, [variant]);

  if (variant === "circle") {
    title = title.slice(0, 1);
  }

  return useMemo(() => {
    console.log("Button rerender", title);
    return (
      <Component onClick={onClick} style={style} {...props}>
        {children ?? title}
      </Component>
    );
  }, [onClick, style, ...Object.values(props), children, title]);
}

export default Button;
