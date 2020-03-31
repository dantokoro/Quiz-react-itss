import React from 'react';
import './App.css';
import data from "./components/data.json";

function App() {
  return (
    <div className="App">
      <p>
          {data.map( item => (
            <p>{item.question}</p>
          ))}
        </p>
    </div>
  );
}

export default App;
