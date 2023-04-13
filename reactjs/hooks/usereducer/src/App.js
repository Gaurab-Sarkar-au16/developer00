import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0)

  function increment(){
    setCount(prevCount => prevCount + 1)
  }

  function decrement(){
    setCount(prevCount => prevCount - 1)
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>useReducer</h1>
        <button onClick={decrement}>-</button>
        <span>{count}</span>
        <button onClick={increment}>+</button>
      </header>
    </div>
  );
}

export default App;
