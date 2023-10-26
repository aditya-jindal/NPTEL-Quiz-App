import { useEffect } from "react";

function Timer({ timeLeft, dispatch }) {
  useEffect(
    function () {
      const id = setInterval(function () {
        dispatch({ type: "tick" });
      }, 1000);
      return function () {
        clearInterval(id);
      };
    },
    [dispatch]
  );
  return (
    <div className="timer">{`${String(Math.floor(timeLeft / 60)).padStart(
      2,
      "0"
    )}:${String(timeLeft % 60).padStart(2, "0")}`}</div>
  );
}

export default Timer;
