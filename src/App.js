import React, {useEffect, useState} from 'react';
import './App.css';
import BubbleSort from "./components/bubbleSort/bubbleSort";
import SelectionSort from "./components/selectionSort/selectionSort";
import InsertionSort from "./components/insertionSort/insertionSort";
import QuickSort from "./components/quickSort/quickSort";

function App() {

  //State
  const [message, setMessage] = useState("");

  //Effects
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
      <div className="container">
        <BubbleSort/>
        <SelectionSort/>
        <InsertionSort/>
        <QuickSort/>
      </div>
    </div>
  );
}

export default App;
