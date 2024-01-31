import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import MyButton from "./lib/components/Button";
import Gremlins from "./components/Gremlins";
import { faker } from "@faker-js/faker";
import TaskListView from "./pages/TaskListPage";

const defaultTheme = {
  mode: "light",
  light: {
    h1: {
      backgroundColor: faker.color.human(),
      color: faker.color.human(),
      border: "5px solid green",
    },
    button: {
      backgroundColor: faker.color.human(),
      color: faker.color.human(),
    },
  },
  dark: {
    h1: {
      backgroundColor: faker.color.human(),
      color: faker.color.human(),
      border: "5px solid red",
    },
    button: {
      backgroundColor: faker.color.human(),
      color: faker.color.human(),
    },
  },
};

function App() {
  const [count, setCount] = useState(0);
  const [displayLogo, setDisplayLogo] = useState(true);
  const [theme, setTheme] = useState(defaultTheme);
  const table = faker.helpers.multiple(faker.person.fullName, {
    count: 5,
  });

  const toggleTheme = () => {
    const oldH1Color = theme[theme.mode].h1.color;
    const oldButtonColor = theme[theme.mode].button.color;
    const oldH1BackgroundColor = theme[theme.mode].h1.backgroundColor;
    const oldButtonBackgroundColor = theme[theme.mode].button.backgroundColor;

    const newTheme = {
      ...theme,
      [theme.mode]: {
        ...theme[theme.mode],
        h1: {
          ...theme[theme.mode].h1,
          color: oldH1BackgroundColor,
          backgroundColor: oldH1Color,
        },
        button: {
          ...theme[theme.mode].button,
          color: oldButtonBackgroundColor,
          backgroundColor: oldButtonColor,
        },
      },
    };

    setTheme(newTheme);
  };

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
      <h1 style={theme[theme.mode].h1}>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <MyButton
          title="Toggle logo"
          onClick={() => setDisplayLogo(!displayLogo)}
          style={{
            backgroundColor: "pink",
            color: "yellow",
            marginRight: 10,
          }}
        />
        <MyButton title="Toggle Theme" onClick={toggleTheme} theme={theme} />
        <MyButton
          title={`Toggle Theme Mode (${theme.mode})`}
          onClick={() =>
            setTheme({
              ...theme,
              mode: theme.mode === "light" ? "dark" : "light",
            })
          }
          theme={theme}
        />
        <MyButton
          theme={theme.button}
          component={(props) => (
            <table {...props}>
              <tbody>
                <tr>
                  <td>Button 2</td>
                </tr>
              </tbody>
            </table>
          )}
          onClick={() => console.log("Click Me")}
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
      <TaskListView />
    </>
  );
}

export default App;
