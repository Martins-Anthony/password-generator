import React, { useState } from 'react';
import { allChars } from '../AllChars';

function Password() {
  const [password, setPassword] = useState('');

  const generatePassword = () => {

    let generatedPassword = '';
    let i = 0;

    while (i < 8 || generatedPassword.length < 30) {
      const char = allChars[Math.floor(Math.random() * allChars.length)];
      if (i >= 8 && generatedPassword.length >= 30) break;
      if (i >= 8 && /[A-Z]/.test(char) && /[a-z]/.test(char) && /\d/.test(char)) break;
      generatedPassword += char;
      i++;
    }

    setPassword(generatedPassword);
  };

  return (
    <div className='style'>
      <h1>Password Generator</h1>
      <button onClick={generatePassword}>Generate Password</button>
      <p>{password}</p>
    </div>
  );
}

export default Password;