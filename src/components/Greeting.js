import React, { useState } from 'react';
import Output from './Output';

export default function Greeting() {
  const [changeText, setChangeText] = useState(false);
  const textChangeHandler = () => {
    setChangeText(!changeText);
  };
  return (
    <div>
      <h2>Hello World!</h2>
      {!changeText && <Output>It's Good To See You</Output>}
      {changeText && <Output>Change!</Output>}
      <button onClick={textChangeHandler}></button>
    </div>
  );
}
