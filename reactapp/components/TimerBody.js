import React, { useEffect } from "react";
import './TimerBodyCSS.css';
function TimerBody({setCountDownStarted, countDownStarted, timeInSeconds, setTimeInSeconds}) {
    

    useEffect(() => {
        let intervalId;
        if (countDownStarted) {
            intervalId = setInterval(() => setTimeInSeconds(timeInSeconds - 1), 1000);
            if (timeInSeconds == 0) {
                setCountDownStarted(false);
            }
            return () => clearInterval(intervalId);
        }
        else if (timeInSeconds != 0) {
            
        }
    }, [countDownStarted, timeInSeconds])

    // Hours calculation
  const hours = Math.floor(timeInSeconds / 3600);

  // Minutes calculation
  const minutes = Math.floor((timeInSeconds % 3600) / 60);

  // Seconds calculation
  const seconds = Math.floor((timeInSeconds % 60));

   // Milliseconds calculation
//    const milliseconds = timeInMilliSeconds % 100;
    
    return (
        <div className="timer-container">
          <p className="timer-content">
            {hours}:{minutes.toString().padStart(2, "0")}:
            {seconds.toString().padStart(2, "0")}
          </p>
        </div>
    )
}

export default TimerBody;