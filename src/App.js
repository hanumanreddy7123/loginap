//import './App.css';
import React from 'react';
import Component from './com/c1';
import Array from './com/fu';
import Login from './com/login';
//import Ele from './com/ti';

function App() {
  return(
    <div>
    <h1>hello world</h1>
    <Component
    name="CVR College"
    />
   
    <Array />
    {/* <Component1/> */}
  <center><Login/></center>
    </div>
  )
}

export default App;
