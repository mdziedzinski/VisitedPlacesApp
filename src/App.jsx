import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import axios from "axios";

const client = "https://63f67f8a59c944921f752b54.mockapi.io/api/users";

function App() {
  const [users, setUsers] = useState("");
  const [userName, setUserName] = useState("");
  const [title, setTitle] = useState("");

  const fetchData = () => {
    fetch(client)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setUsers(data);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(client, {
      method: "POST",
      body: JSON.stringify({
        name: userName,
        userId: Math.random().toString(36).slice(2),
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => res.json())
      .then((title) => {
        setUsers((user) => [title, ...users]);
        setTitle("");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleChange = (e) => {
    setUserName(e.target.value);
  };

  console.log(users);
  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>People</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Name</p>
          <input
            type="text"
            name="title"
            value={userName}
            onChange={handleChange}
          ></input>
        </label>
        <button type="submit">Create</button>
      </form>
    </div>
  );
}

export default App;
