import { useState, useRef } from 'react';

export const useTimer = (maxTime: number) => {
  const [time, setTime] = useState(maxTime);
  const interval = useRef<NodeJS.Timeout>();

  const startTimer = () => {
    // start countdown
    setTime(maxTime); 

    interval.current = setInterval(() => {
      setTime((t) => t - 1)
    }, 1000);
    console.log("Start timer: ", interval.current)
  }

  const clearTimer = () => {
    clearInterval(interval.current);
    console.log("Clear timer: ", interval.current)
  }

  return {
    time,
    startTimer,
    clearTimer
  };
}