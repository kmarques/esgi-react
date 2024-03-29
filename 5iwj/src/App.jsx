import { useCallback, useEffect, useMemo, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import MyButton from "./lib/components/Button";
import Gremlins from "./components/Gremlins";
import { faker } from "@faker-js/faker";
import TaskListView from "./pages/TaskListPage";
import useTheme from "./hooks/useTheme";
import useThemeActions from "./hooks/useThemeActions";
import TaskListProvider from "./contexts/TaskListContext";

const styleToggleButton = {
  backgroundColor: "pink",
  color: "yellow",
  marginRight: 10,
};
const button2OnClick = () => console.log("Click Me");

function App() {
  const theme = useTheme();
  const { toggleTheme, toggleThemeMode } = useThemeActions();
  const [count, setCount] = useState(0);
  const [displayLogo, setDisplayLogo] = useState(true);
  const table = faker.helpers.multiple(faker.person.fullName, {
    count: 5,
  });

  //useEffect(() => {
  //  const interval = setInterval(toggleThemeMode, 500);
  //  return () => {
  //    clearInterval(interval);
  //  };
  //}, []);

  useEffect(() => {
    //const timeout = setTimeout(toggleThemeMode, 500);
    //return () => clearTimeout(timeout);
  }, [theme.mode]);

  const Button2Component = useCallback(
    (props) => (
      <table {...props}>
        <tbody>
          <tr>
            <td>Button 2</td>
          </tr>
        </tbody>
      </table>
    ),
    []
  );
  //const button2OnClick = useCallback(() => console.log("Click Me"), []);
  // <=> const button2OnClick = useMemo(() => () => console.log("Click Me"), []);

  const toggleDisplayLogo = useCallback(
    () => setDisplayLogo((displayLogo) => !displayLogo),
    [setDisplayLogo]
  );

  const styleToggleLogo2 = useMemo(
    () => ({
      backgroundColor: theme.mode === "light" ? "pink" : "yellow",
    }),
    [theme]
  );

  return (
    <>
      {table.length > 0 && (
        <table>
          <tbody>
            {table.map((item) => (
              <tr key={item}>
                <td>{item}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      {displayLogo ? (
        count === 1 ? (
          <div>
            <a href="https://vitejs.dev" target="_blank">
              <img src={viteLogo} className="logo" alt="Vite logo" />
            </a>
          </div>
        ) : count === 2 ? (
          <div>
            <a href="https://react.dev" target="_blank">
              <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
          </div>
        ) : count > 2 ? (
          <div>
            <a href="https://vitejs.dev" target="_blank">
              <img src={viteLogo} className="logo" alt="Vite logo" />
            </a>
            <a href="https://react.dev" target="_blank">
              <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
          </div>
        ) : (
          <></>
        )
      ) : (
        <p>Logo hidden</p>
      )}
      {displayLogo && count === 1 && (
        <div>
          <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
        </div>
      )}
      {displayLogo && count === 2 && (
        <div>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
      )}
      {displayLogo && count > 2 && (
        <div>
          <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
      )}
      {!displayLogo && <p>logo hidden</p>}
      <h1 style={theme[theme.mode].h1}>Vite + React {theme.mode}</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <MyButton
          title="Toggle logo"
          onClick={toggleDisplayLogo}
          style={styleToggleButton}
        />
        <MyButton
          title="Toggle logo 2"
          onClick={toggleDisplayLogo}
          style={styleToggleLogo2}
        />
        <MyButton title="Toggle Theme" onClick={toggleTheme} theme={theme} />
        <MyButton
          title={`Toggle Theme Mode (${theme.mode})`}
          onClick={toggleThemeMode}
          theme={theme}
        />
        <MyButton
          component={Button2Component}
          onClick={button2OnClick}
          title="Button 2"
          type="submit"
        />
        <MyButton onClick={() => alert("Click Me")}>
          <img src={reactLogo} />
          Button children
        </MyButton>
        <MyButton
          onClick={() => alert("Click Me")}
          title={
            <>
              <img src={viteLogo} />
              Button Title
            </>
          }
        />
        {/* comment */}
        <MyButton
          variant="circle"
          onClick={() => alert("Click Me")}
          title="Button 3"
          className="my-button"
        />
        <MyButton
          component="div"
          onClick={() => prompt("Click Me")}
          title="Button 4"
          id="button4"
        />
        <MyButton onClick={() => confirm("Click Me")} title="Button 5" />
        <MyButton
          component="a"
          href="https://google.fr"
          onClick={() => confirm("Click Me")}
          title="Google"
        />
        <MyButton
          component="a"
          href="https://google.fr"
          onClick={() => confirm("Click Me")}
          title="Google disabled"
          disabled={true}
        />
        <Gremlins
          genX={3}
          genProps={{ 3: { title: "Button 3", onClick: () => alert("test") } }}
        />
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <TaskListProvider>
        <TaskListView />
      </TaskListProvider>
    </>
  );
}

export default App;
