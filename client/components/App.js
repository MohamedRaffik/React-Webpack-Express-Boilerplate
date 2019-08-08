import React, { useState, useEffect } from 'react';
import styles from '../stylesheets/App.css';

const App = () => {

  const [counter, setCounter] = useState(0);

  const increment = (prevState) => {
    setCounter(prevState + 1);
    window.localStorage.setItem('counter', prevState + 1)
  }

  const decrement = (prevState) => {
    setCounter(prevState - 1);
    window.localStorage.setItem('counter', prevState - 1)
  }

  useEffect(() => {
    let value = window.localStorage.getItem('counter');
    if (value !== null) setCounter(parseInt(value));
  }, []);

  return (
    <div>
      <h1 className={styles.title}>Counter</h1>
      <div className={styles.row}>
        <button className={styles.button} onClick={() => decrement(counter)}>-</button>
        <p className={styles.counter}>{counter}</p>
        <button className={styles.button} onClick={() => increment(counter)}>+</button>
      </div>
      <button className={styles.reset}>Reset</button>
    </div>
  );
}

export default App;