import { useRef } from "react";
import { useEffect, useState } from "react";

export function Counter({ initialValue = 0 }) {
  const [counter, setCounter] = useState(initialValue);

  useEffect(() => {
    if (counter >= initialValue) {
      useRef.current = "up";
    } else if (counter < initialValue) {
      useRef.current = "down";
    }
    if (useRef.current !== null) {
      console.log(`Counter direction: ${useRef.current}`);
    }

    return () => {
      console.log(`The value of the counter was ${counter}`);
    };
  }, [counter, initialValue]);

  function handleCounterIncrement() {
    setCounter((c) => c + 1);
  }

  function handleCounterDecrement() {
    setCounter((c) => c - 1);
  }

  function handleCounterReset() {
    setCounter(initialValue);
  }

  return (
    <div>
      <p>I have counted to {counter}</p>
      <button onClick={handleCounterIncrement}>Increment</button>
      <button onClick={handleCounterDecrement}>Decrement</button>
      <button onClick={handleCounterReset}>Reset</button>
    </div>
  );
}
