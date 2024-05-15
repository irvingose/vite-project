import { useState } from "react";
import classes from "./Counter.module.scss";
import { useCounter } from "./useCounter";

export function Counter({ initialValue = 0 }) {
  const { counter, onIncrement, onDecrement, onReset } =
    useCounter(initialValue);

  return (
    <div>
      <p className={counter % 2 === 0 ? classes.evenBg : classes.oddBg}>
        I have counted to {counter}
      </p>
      <button className={classes.button} onClick={onIncrement}>
        Increment
      </button>
      <button className={classes.button} onClick={onDecrement}>
        Decrement
      </button>
      <button className={classes.button} onClick={onReset}>
        Reset
      </button>
    </div>
  );
}
