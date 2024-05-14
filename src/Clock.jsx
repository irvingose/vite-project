import { useContext, useEffect, useState } from "react";
import classes from "./Clock.module.scss";
import { LanguageContext } from "./LanguageContext";

export function Clock() {
  const [date, setDate] = useState(new Date());
  const language = useContext(LanguageContext);

  <h2>{language === "en" ? "Hello, World!" : "Ciao, Mondo!"}</h2>;

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
    <div className={classes.clock}>
      {language === "en" ? (
        <p>Current time: {date.toLocaleTimeString()}</p>
      ) : (
        <p>Ora corrente: {date.toLocaleTimeString()}</p>
      )}
    </div>
  );
}
