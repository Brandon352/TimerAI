"use client";
import React, { useState, memo } from "react";

function Actions({stopTimer, startTimer, countDownStarted, handleChangeMinute, 
    handleChangeHour, hourInput, minuteInput, onToggle, toggleForm, onReset}) {
    
    return (
        
        <div className="ac-container">
            <div className="btn-container">
                {!countDownStarted ?
                    <button className = "button-41" onClick={startTimer}>Start</button> :
                    <button className = "button-41" onClick={stopTimer}>Pause</button>}
            </div>

            <div className="btn-container">
                <button className = "button-41" onClick={onToggle}>Set Time</button>
            </div>
            

{/* Input areas for minutes and hours */}
            {toggleForm ?
                <div className='input-form'>
                    <p>Hours:</p>
                    <div>
                        <input type="number" defaultValue={hourInput.toString()} placeholder="enter hour" name="time" onChange={handleChangeHour} />

                    </div>
                    <p>Minutes:</p>
                    <div>
                        <input type="number" defaultValue={minuteInput.toString()} placeholder="enter minutes" name="time" onChange={handleChangeMinute} />  
                    </div>
                </div>
                : null}

            <div className="used-container">
                {/* <div className="used-timers">
                    <h2>Most used timers</h2>
                    <ul>
                        {mostUsedObj.map((time) => (<li key={time}>
                            <button> {time[0]} mins</button> </li>))}

                    </ul>
                </div> */}

                <div className="reset">
                    <button onClick={onReset}>Clear</button>
                </div>
            </div>
        </div>
    )
};

export default Actions;