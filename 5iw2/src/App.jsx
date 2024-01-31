import { useCallback, useMemo, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Button from "./components/Button";
import TP1 from "./TP1-Correction";
import TaskProvider, { TaskContext } from "./contexts/TaskContext";

function App() {
  const [count, setCount] = useState(0);
  const [displayLogo, setDisplayLogo] = useState(false);
  const [theme, setTheme] = useState({
    h1: {
      backgroundColor: "green",
      color: "yellow",
      border: "2px dashed magenta",
    },
    button: {
      backgroundColor: "grey",
      color: "pink",
    },
  });

  const table = ["a", "b", "c"];

  function toggleH1() {
    const bgColor = theme.h1.backgroundColor;
    const color = theme.h1.color;

    setTheme({
      ...theme,
      h1: {
        ...theme.h1,
        backgroundColor: color,
        color: bgColor,
      },
    });
  }

  //const handleButton1 = useMemo(() => () => console.log("coucou"), []);
  const handleButton1 = useCallback(() => console.log("coucou"), []);

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
      {!displayLogo && <p>Logo not visible</p>}

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
        <p>Logo not visible</p>
      )}

      <h1 style={theme.h1}>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <Button variant="squared" title="Button 1" onClick={handleButton1} />
        <Button variant="rounded" title="Toggle H1" onClick={toggleH1} />
        <Button
          variant="circle"
          title="Button 3"
          onClick={() => prompt("coucou")}
        />
        <Button
          component="a"
          variant="circle"
          title="Button 4"
          onClick={() => prompt("coucou")}
        />
        <Button onClick={() => confirm("coucou")} />
        <Button onClick={() => setDisplayLogo(!displayLogo)}>
          Toggle logo
        </Button>
        <Button variant="circle" onClick={() => confirm("Toggle theme")}>
          <img src={reactLogo} />
          <img src={viteLogo} />
        </Button>
        <ul>
          {table.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <TaskProvider>
          <TP1 />
        </TaskProvider>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
        <TaskContext.Consumer>
          {(value) => <p>Data in context {value.length}</p>}
        </TaskContext.Consumer>
        <TaskContext.Provider value={[1, 2, 3, 4]}>
          <TaskContext.Consumer>
            {(value) => <p>Data in context (overriden) {value.length}</p>}
          </TaskContext.Consumer>
        </TaskContext.Provider>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
