import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import MyButton from "./lib/components/Button";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <MyButton
          title="Button 1"
          style={{
            backgroundColor: "pink",
            color: "yellow",
            marginRight: 10,
          }}
        />
        <MyButton
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
