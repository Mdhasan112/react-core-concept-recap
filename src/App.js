import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const nayoks = ['sakib', "milon", "reakib", "mushi"]
  return (
    <div className="App">
      <MovieCounter></MovieCounter>
        <Nayok name= {nayoks[0]} age ="50"></Nayok>
        <Nayok name= {nayoks[1]}></Nayok>
        <Nayok name= {nayoks[2]}></Nayok>
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        
        <ul>
        {nayoks.map(nayok => <li>{nayok}</li>)}
        </ul>
        
      </header>
    </div>
  );
}

function MovieCounter() {
  const[counter, setCounter] = useState(0)
  const clickhandler = () => {
    setCounter(counter + 1)
  }
  return (
    <div>
      <button onClick ={clickhandler}>add movie</button>
      <h3>Number of counter: {counter}</h3>
      <MovieDisplay>{counter}</MovieDisplay>
    </div>
  )
}

function MovieDisplay () {
  return <h3>moive attech :</h3>
}

function Nayok (props) {
  
  const nayokStyle = {
    border: "2px solid purple",
    borderRedius: '10px',
    padding: "20px",
    margin: "20px"
  }

  return (
    <div style = {nayokStyle}>
      <h3>{props.name}</h3>
      <h3>age: {props.age}</h3>
    </div>
  )
}

export default App;
