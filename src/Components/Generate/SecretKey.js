import React, { useState } from 'react';
import { allChars } from '../AllChars';

function SecretKey() {
  const [secretKey, setSecretKey] = useState('');

  const generateSecretKey = () => {

    let generatedSecretKey = '';

    for (let i = 0; i < 64; i++) {
      const randomIndex = Math.floor(Math.random() * allChars.length);
      generatedSecretKey += allChars[randomIndex];
    }
    
    setSecretKey(generatedSecretKey);
  };

  return (
    <div className='style'>
      <h1>Secret Key Generator</h1>
      <button onClick={generateSecretKey}>Generate Secrete Key</button>
      <p>{secretKey}</p>
    </div>
  );
}

export default SecretKey;