import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [nayoks, setNayoks]= useState([])
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setNayoks(data))
  }, [])
  const frineds = [{name: 'rahim', idNo: 101}, {name: 'karim', idNo: 102}, {name: 'nayem', idNo: 103}, {name: 'monir', idNo: 104}]
  //const nayoks = [{name: 'sakib', age: 50}, {name: 'nayem', age: 20}, {name: 'mistkat', age: 30}, {name: 'mohim', age: 25}]
  return (
    <div className="App">
      <SongName></SongName>
      {
        frineds.map(friend => <FrinedsName name= {friend.name} key ={friend.name} idNo= {friend.idNo}></FrinedsName>)
      }
      <MovieCounter></MovieCounter>
      {
        nayoks.map(nayok => <Nayok name = {nayok.name} key= {nayok.id} age = {nayok.age}></Nayok>)
      }
        {/* <Nayok name= {nayoks[0]} age ="50"></Nayok>
        <Nayok name= {nayoks[1]}></Nayok>
        <Nayok name= {nayoks[2]}></Nayok> */}
     
    </div>
  );
}

function SongName () {
  const [count, setCount] = useState(0)
  const clickhandler = () => {
    setCount(count + 1)
  }
  return (
    <div>
      <h2>Song Number: {count}</h2>
      <button onClick = {clickhandler}>Next Song</button>
    </div>
  )
}
function FrinedsName (props) {
  return (
    <div>
      <h1>name: {props.name} {props.idNo}</h1>
    </div>
  )
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
      <MovieDisplay count ={counter}> </MovieDisplay>
      <MovieDisplay count ={counter + 10}> </MovieDisplay>
      <MovieDisplay count ={counter + 5}> </MovieDisplay>
    </div>
  )
}

function MovieDisplay (props) {
  return <h3>Movies i have acted : {props.count}</h3>
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
      <h3> ami nayok {props.name}</h3>
      <h3>age: {props.age}</h3>
    </div>
  )
}

export default App;
