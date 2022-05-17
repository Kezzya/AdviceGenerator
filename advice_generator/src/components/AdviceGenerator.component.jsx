import React, { useEffect, useState } from "react";
import styles from "./AdviceGenerator.module.css";
export const AdviceGenerator = () => {
  const [advice, setAdvice] = useState();
  const [numberAdvice, setNumberAdvice] = useState();
  // Примечание: пустой массив зависимостей [] означает, что
  // этот useEffect будет запущен один раз
  useEffect(() => {
    fetch("https://api.adviceslip.com/advice")
      .then((response) => response.json())
      .then((result) => {
        setAdvice(result.slip.advice);
        setNumberAdvice(result.slip.id);
      });
  }, []);
  return (
    <div className={styles.main}>
      <div>
        <div>Advice #{numberAdvice}</div>
        <div id={styles.colorFont}>{advice}</div>
      </div>
      <div className="imgs">
        <img
          src="/images/pattern-divider-desktop.svg"
          style={{ width: `100%` }}
        />
      </div>
      <img src="/images/icon-dice.svg" className={styles.dice} />
    </div>
  );
};
