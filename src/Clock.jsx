import { useEffect, useState } from "react";

export function Clock() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    console.log(`Setting clock interval`);

    const intervalId = setInterval(() => {
      console.log(`Updating date...`);
      setDate(new Date());
    }, 1000);

    return () => {
      console.log(`Clearing interval`);
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div>
      <p>Current time: {date.toLocaleTimeString()}</p>
    </div>
  );
}
