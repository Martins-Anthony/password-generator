import React, { useState } from 'react';
import './App.css';
import Password from './Components/Generate/Password';
import SecretKey from './Components/Generate/SecretKey';

function App() {

  return (
    <div>
      <Password />
      <SecretKey />
    </div>
  );
}

export default App;
