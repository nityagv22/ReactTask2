import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [result, setResult] = useState("");
  const handleClick = (e) => {
    setResult(result.concat(e.target.name));
  }
  const backspace = () => {
    setResult(result.slice(0, -1));
  }
  const calculate = () => {
    try{
      setResult(eval(result).toString());
    } catch(err){
      setResult("Error")
    }
  }
  return (
    <div className = "container">
      <form>
        <input type = "text" value={result}/>
      </form>
      <div className = "keypad">
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button>C</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>/</button>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>-</button>
        <button>0</button>
        <button>.</button>
        <button>=</button>
        <button>+</button>
       

      </div>
      
    </div>
  );
}

export default App;
