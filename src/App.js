import React from 'react';
import Greeting from './Greeting';
import './App.css';

function App() {
  return (
    <div className="App">
     <Greeting 
     morning="this is good morning today i will come late due to delay in train "
     afternoon="this is warm afternoon"
     evening="this evening is dark and doomy" />

    </div>
  )
}

export default App;
