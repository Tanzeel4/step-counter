import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const[step,setStep]=useState(0)
  const[count,setCount]=useState(0)

  function stepAddhandler() {
    setStep(step + 1)   
  }
  function stepMinushandler() {
    setStep(step - 1)
    
  }
  function countAddHandler (){
    setCount(count + step)
  }
  function countMinusHandler (){
    setCount(count - step)
  }
  const days =[
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ]

  // const date = new Date ()
  // console.log(day[date.getDay()]);
  
  // const futureDate = new Date()

  const today = new Date();
  // const currentDay = days[today.getDay()];

  
  const futureDate = new Date();
  futureDate.setDate(today.getDate() + count);

  const futureDay = days[futureDate.getDay()];
  const futureMonth = futureDate.toLocaleString('default', { month: 'long' });
  const futureYear = futureDate.getFullYear();
  const futureDateString = futureDate.getDate();

  return (
    <div className='main'>
      <div className='container'>
        <button onClick={stepMinushandler} className='decreBtn'>-</button>
        <h1>Step: {step}</h1>
        <button  onClick={stepAddhandler} className='increBtn'>+</button>
      </div>
      <div className='container'>
        <button onClick={countMinusHandler} className='decreBtn'>-</button>
        <h1>Count: {count}</h1>
        <button onClick={countAddHandler} className='increBtn'>+</button>
      </div>
      <h1>{count} Days from Today is {futureDay}, {futureMonth} {futureDateString}, {futureYear}</h1>
    </div>

  );
}

export default App;