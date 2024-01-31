export default function Button({
  title,
  theme = {},
  onClick,
  variant = "squared",
  children,
  style = {},
  component: Component = "button",
  ...rest
}) {
  const buttonStyle = {
    borderRadius: 3,
    backgroundColor: "green",
    color: "white",
    padding: "10px 20px",
    fontSize: 20,
    fontWeight: "bold",
    ...theme?.[theme.mode],
    ...style,
  };

  switch (variant) {
    case "rounded":
      buttonStyle.borderRadius = 10;
      break;
    case "squared":
      buttonStyle.borderRadius = 0;
      break;
    case "circle":
      buttonStyle.borderRadius = "50%";
      buttonStyle.width = 50;
      buttonStyle.height = 50;
      title = title[0];
      break;
    default:
      break;
  }

  return (
    <Component onClick={onClick} style={buttonStyle} {...rest}>
      {title || children}
    </Component>
  );
}
