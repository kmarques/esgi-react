import { Fragment } from "react";
import Button from "../lib/components/Button";

function GremlinsNoob({ genX, genProps = {} }) {
  const factorial = (function facto(n) {
    return n <= 1 ? 1 : n * facto(n - 1);
  })(genX);

  const result = [];
  for (let i = 1; i <= factorial; i++) {
    result.push(<Button {...(genProps[i] ?? { title: "Default" })} />);
  }

  return result;
}

export default function Gremlins({ genX, genProps = {} }) {
  const factorial = (function facto(n) {
    return n <= 1 ? 1 : n * facto(n - 1);
  })(genX);

  return Array.from({ length: factorial }, (_, i) => {
    const { style = {}, title = "Default", ...props } = genProps[i + 1] ?? {};
    if (i > 0) style.marginLeft = style.marginLeft ?? 10;
    return (
      <Fragment key={i}>
        <Button title={title} style={style} {...props} />
        <Button
          title={title === "Default" ? "Doppleganger " + title : title}
          style={style}
          {...props}
        />
      </Fragment>
    );
  });
}
