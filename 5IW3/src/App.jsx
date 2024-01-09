import { useCallback, useContext, useEffect, useMemo, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Button from "./components/Button";
import MountUnmount from "./MountUnmount";
import ThemeProvider, { ThemeContext } from "./contexts/ThemeContext";
import OptimizedButton from "./components/OptimizedButton";

//function useCallback(cb, deps) {
//  return useMemo(() => cb, deps);
//}

function App() {
  const [count, setCount] = useState(0);
  const [displayLogo, setDisplayLogo] = useState(false);
  const { theme, toggleH1 } = useContext(ThemeContext);

  const [data, setData] = useState(["coucou", "hello", "salut"]);

  const addElement = useCallback(
    function addElement() {
      setData([
        ...data.slice(0, data.length / 2),
        Date.now(),
        ...data.slice(data.length / 2),
      ]);
    },
    [data]
  );

  //React.createElement(
  //  Fragment,
  //  null,
  //  displayLogo && React.createElement("div"),
  //  !displayLogo && React.createElement("p", null, data.map((item) => React.createElement("div", null, item)))),
  //  displayLogo ? React.createElement("div") : React.createElement("p")
  //);
  return (
    <>
      {displayLogo && (
        <div>
          <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
      )}
      {!displayLogo && <MountUnmount />}
      {!displayLogo && <p>Pas de logos à afficher</p>}
      {displayLogo ? (
        <div>
          <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
      ) : (
        <p>Pas de logos à afficher</p>
      )}
      <h1 style={theme.h1}>Vite + React</h1>
      <ul>
        {data.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <Button
          variant="square"
          title="Button 1"
          onClick={() => setDisplayLogo(!displayLogo)}
        />
        <Button variant="round" title="Button 2" style={{}} />
        <OptimizedButton
          variant="circle"
          title="+"
          onClick={addElement}
          coucou="coucou"
        />
        <Button variant="round" onClick={toggleH1}>
          Toggle H1
        </Button>
        <Button variant="round" onClick={() => console.error("test error")}>
          <img src={viteLogo} />
          <img src={reactLogo} />
        </Button>
        <ThemeProvider>
          <Button
            component="p"
            variant="round"
            onClick={() => console.error("test error")}
          >
            <img src={viteLogo} />
            <img src={reactLogo} />
          </Button>
          <Button
            component={(props) => (
              <div>
                Coucou <a onClick={props.onClick}>{props.children}</a>
              </div>
            )}
            variant="round"
            onClick={() => console.error("test error")}
          >
            <img src={viteLogo} />
            <img src={reactLogo} />
          </Button>
        </ThemeProvider>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
