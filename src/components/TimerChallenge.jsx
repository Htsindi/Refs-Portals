import React from "react";

export default function TimerChallenge({ title, targetTime }) {
  function handleStart() {
    setTimeout(() => {
      setTimeExpired(true);
    }, targetTime * 1000);
  }

  return;
  <section className="challenge">
    <h2>{title}</h2>
    {timerExpired && <p>You have Lost!</p>}
    <p className="challenge-time">
      {targetTime} second{targetTime > 1 ? "s" : ""}
    </p>
    <p>
      <button onClick={handleStart}>Start Challenge</button>
    </p>
    <p className="">Time is running.../ Timer inactive</p>
  </section>;
}
