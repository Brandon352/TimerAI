'use client';
import React, { useState, memo } from 'react';
import Actions from './Actions';
import TimerBody from './TimerBody';

function Timer() {
    const [toggleForm, setToggleForm] = useState(true);
    const [minuteInput, setMinuteInput] = useState(0);
    const [hourInput, setHourInput] = useState(0);
    const [time, setTime] = useState(0);
    const [pause, setPause] = useState(false);
    const [countDownStarted, setCountDownStarted] = useState(false);
    const [timeInSeconds, setTimeInSeconds] = useState(0);


const onToggle = () => {
    setToggleForm(toggle => toggle = !toggleForm);
    setCountDownStarted(false);
    setTimeInSeconds(minuteInput * 60 + hourInput * 60 * 60);
}

//gets the hour value that is passed in by the user and sets it to hourinput
const handleChangeHour = (e) => {
    const inputData = parseInt(e.target.value);
    if (inputData > 0) {
        setHourInput(inputData);
    }
}

const handleChangeMinute = (e) => {
    const inputData = parseInt(e.target.value);
    if (inputData > 0) {
        setMinuteInput(inputData);
    }
}

const startTimer = () => {
    setCountDownStarted(true);

    if (toggleForm) {
        setToggleForm(false);
      }

      setTimeInSeconds(minuteInput * 60 + hourInput * 60 * 60);
    
      if (pause) {
        setTimeInSeconds(timeInSeconds)
      }
}

const stopTimer = () => {
    //reset values
    setCountDownStarted(false);
    setPause(true);
    
}

const onReset = () => {
    setCountDownStarted(false);
    setHourInput(0);
    setMinuteInput(0);
    setTimeInSeconds(0);
    setPause(false);
}

return (
    
    <div>
        <div>
            <TimerBody
            timeInSeconds={timeInSeconds}
            countDownStarted={countDownStarted}
            setTimeInSeconds={setTimeInSeconds}
            setCountDownStarted={setCountDownStarted}
            >
            </TimerBody>
        </div>
        <div>
            <Actions 
            onToggle={onToggle}
            handleChangeHour={handleChangeHour}
            handleChangeMinute={handleChangeMinute}
            toggleForm={toggleForm}
            minuteInput={minuteInput}
            hourInput={hourInput}
            startTimer={startTimer}
            stopTimer={stopTimer}
            countDownStarted={countDownStarted}
            onReset={onReset}
            ></Actions>
        </div>
    </div>
) 

}

export default Timer; 