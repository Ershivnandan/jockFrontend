import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    axios
      .get("/api/jokes")
      .then((res) => {
        setJokes(res.data);
      })
      .catch((err) => {
        console.error(err.message);
      });
  });

  return (
    <>
      <h1>Hello</h1>

      <p>JOKE: {jokes.length}</p>

      {jokes.map((jock, ind) => (
        <div key={ind} id={jock.id}>
          <h2>{jock.title}</h2>
          <p>{jock.content}</p>
        </div>
      ))}
    </>
  );
}

export default App;
