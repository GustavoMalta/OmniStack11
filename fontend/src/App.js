import React, { useState } from 'react';
import Routes from './routes';
import './global.css';

function App() {
  let [cont, setCont] = useState(0);
  function soma(){
    setCont(cont+=1);
    console.log(cont);
  }

  return (
    <div>
      <Routes/>
    </div>
  );
}

export default App;
