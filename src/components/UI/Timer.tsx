import { useEffect, useState } from "react";

import { ITimer } from "../../types/share";

export const Timer = ({
  hours = 0,
  minutes = 0,
  seconds = 0,
  over,
  setOver,
}: ITimer) => {
  const [[h, m, s], setTime] = useState([hours, minutes, seconds]);

  const savedTime = localStorage.getItem("timer");

  useEffect(() => {
    if (savedTime) {
      const [savedH, savedM, savedS] = savedTime.split(":").map(Number);
      setTime([savedH, savedM, savedS]);
    }
  }, []);

  const tick = () => {
    if (over) return;

    if (h === 0 && m === 0 && s === 0) {
      setOver(true);
      localStorage.clear();
      return;
    } else if (m === 0 && s === 0) {
      setTime([h - 1, 59, 59]);
    } else if (s === 0) {
      setTime([h, m - 1, 59]);
    } else {
      setTime([h, m, s - 1]);
    }
    localStorage.setItem("timer", `${h}:${m}:${s}`);
  };

  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);
    return () => clearInterval(timerID);
  });

  return (
    <div className="timer">
      <p>{`${h.toString().padStart(2, "0")}:${m.toString().padStart(2, "0")}:${s
        .toString()
        .padStart(2, "0")}`}</p>
    </div>
  );
};
