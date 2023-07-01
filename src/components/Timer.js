import { useEffect } from "react";

function Timer({ secondsRemaining, dispatch }) {
  useEffect(() => {
    const interval = setInterval(() => {
      dispatch({ type: "tick" });
    }, 1000);

    return () => clearInterval(interval);
  }, [dispatch]);

  const time = `${String(Math.floor(secondsRemaining / 60)).padStart(
    2,
    "0"
  )}:${String(secondsRemaining % 60).padStart(2, "0")}`;

  return <div className="timer">{time}</div>;
}

export default Timer;
