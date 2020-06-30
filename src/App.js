import React, {useEffect, useState} from 'react';
import './App.css';
import BubbleSort from "./components/bubbleSort/bubbleSort";

function App() {

  const[message, setMessage] = useState("");

  useEffect(() => {
    fetch("/api/message/")
    .then((res) => {
      console.log(res);
      return res.json();
    })
    .then((parsedRes) => {
      console.log(parsedRes)
      setMessage(parsedRes.message);
    })
  }, [])

  return (
    <div className="App">
      <h1>{message}</h1>
      <BubbleSort></BubbleSort>
    </div>
  );
}

export default App;
