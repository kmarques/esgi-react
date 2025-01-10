import { useContext, useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Button from "./components/Button";
import Table from "./components/Table";
import Dummy from "./components/Dummy";
import UserPage from "./views/UserPage";
import { ThemeContext } from "./contexts/ThemeContext";

const items = [
  { id: 1, name: "item 1" },
  { id: 2, name: "item 2" },
  { id: 3, name: "item 3" },
  { id: 4, name: "item 4" },
  { id: 5, name: "item 5" },
  { id: 6, name: "item 6" },
  { id: 7, name: "item 7" },
  { id: 8, name: "item 8" },
  { id: 9, name: "item 9" },
  { id: 10, name: "item 10" },
  { id: 11, name: "item 11" },
  { id: 12, name: "item 12" },
  { id: 13, name: "item 13" },
  { id: 14, name: "item 14" },
  { id: 15, name: "item 15" },
  { id: 16, name: "item 16" },
  { id: 17, name: "item 17" },
  { id: 18, name: "item 18" },
  { id: 19, name: "item 19" },
  { id: 20, name: "item 20" },
  { id: 21, name: "item 21" },
  { id: 22, name: "item 22" },
  { id: 23, name: "item 23" },
  { id: 24, name: "item 24" },
  { id: 25, name: "item 25" },
  { id: 26, name: "item 26" },
  { id: 27, name: "item 27" },
  { id: 28, name: "item 28" },
  { id: 29, name: "item 29" },
  { id: 30, name: "item 30" },
  { id: 31, name: "item 31" },
  { id: 32, name: "item 32" },
  { id: 33, name: "item 33" },
  { id: 34, name: "item 34" },
];

const items2 = [];

function App() {
  const [count, setCount] = useState(0);
  const {
    selectors: { getTheme },
    actions: { toggleTheme },
  } = useContext(ThemeContext);
  //const [currentState, dispatch] = useReducer(reducer, initialState);

  const theme = getTheme();
  const result = [];
  for (let i = 0; i < items.length; i++) {
    if (i % 2 === 0) continue;
    result.push(<li key={i}>{items[i].name}</li>);
  }

  useEffect(() => {
    setInterval(toggleTheme, 1000);
  }, []);

  const [data, setData] = useState(items);

  function handleAdd(item) {
    setData([...data, item]);
  }

  function handleEdit(id, newValues) {
    setData(data.map((item) => (item.id === id ? newValues : item)));
  }

  function handleDelete(id) {
    setData(data.filter((item) => item.id !== id));
  }

  function getData() {
    return data;
  }

  return (
    <>
      <h1>Structure conditionnelle</h1>
      {count % 2 === 0 && (
        <div>
          <a href="https://vite.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img
              src={reactLogo}
              className="logo react"
              alt="React logo"
              {...{ height: 50, width: 50 }}
            />
          </a>
        </div>
      )}
      {count % 3 === 0 && <p>module 3</p>}
      {count % 2 !== 0 && count % 3 !== 0 && <p>Logo hidden</p>}
      {items2.length !== 0 && items2.map((item) => <li key={item}>{item}</li>)}
      <h1 style={theme.h1}>Vite + React</h1>
      <h1>Props + Component</h1>
      <div className="card">
        <Button onClick={toggleTheme}>Toggle theme</Button>
        <Button title="Btn 1" onClick={() => alert("test")} />
        <Button
          backgroundColor="yellow"
          color="green"
          onClick={() => confirm("test")}
        >
          Btn 2
        </Button>
        <Button
          title="Btn 3"
          backgroundColor="magenta"
          onClick={() => prompt("test")}
          customStyle={{
            textDecoration: "line-through",
            border: "10px solid green",
          }}
        />
        <Button
          title="Btn 4"
          href="test"
          backgroundColor="cyan"
          color="red"
          onClick={() => console.log("test")}
        />
        <Button component="a" href="https://google.fr">
          Lien Google
        </Button>
        <Button
          component="img"
          src={viteLogo}
          className="logo"
          onClick={() => alert("test")}
        />
        <Button onClick={() => alert("test")}>
          <img
            src={reactLogo}
            className="logo react"
            alt="React logo"
            {...{ height: 50, width: 50 }}
          />
        </Button>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <h1>Structure itérative</h1>
        <ul>
          {items
            .filter((item, index) => index % 2 === 0)
            .map((item, index) => (
              <li key={index}>{item.name}</li>
            ))}
          {items.reduce((acc, item, index) => {
            if (index % 2 !== 0) return acc;
            acc.push(<li key={item.id}>{item.name}</li>);
            return acc;
          }, [])}
        </ul>
        <ul>{result}</ul>
        <h1>TP Table</h1>
        <Table
          getItems={getData}
          onAdd={handleAdd}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
        <Table getItems={getData} onAdd={handleAdd} onEdit={handleEdit} />
        <h1>Dummy component (Lifecycle)</h1>
        {count % 2 === 0 && <Dummy />}
        <h1>User page (useEffect + Fetch + State)</h1>
        <UserPage />
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
