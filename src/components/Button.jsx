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
  const style = {
    padding: "0.6em 1.2em",
    borderRadius: 8,
    border: "1px solid transparent",
    fontSize: "1em",
    fontWeight: 500,
    fontFamily: "inherit",
    cursor: "pointer",
    transition: "border-color 0.25s",
    paddingRight: 10,
    paddingLeft: 10,
    marginRight: 5,
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
