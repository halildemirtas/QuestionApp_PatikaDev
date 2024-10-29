import React, { useCallback, useEffect, useState } from "react";
import questions from "../questions.js";
import { appContext } from "../context/AppContext";
import { useContext } from "react";
import "./Question.css";
import Answer from "../answer/Answer";

export function QuestionCounter() {
    let { counter } = useContext(appContext);
  
    return <h1 className="counter-h1"></h1>;
}

export function Timer() {
    let { timer, setTimer } = useContext(appContext);
    return(
        <h2 className="timer">Sure: {timer}</h2>
    )
}

function Question() {
  const { timer, setTimer, counter, setCounter, correctCounter } = useContext(appContext);

  const currentQuestion = questions[counter - 1];

  if (counter <= questions.length) {
    useEffect(() => {
      const intervalId = setInterval(() => {
        const answer = document.querySelector(".answer-container");
        
        // İlk 4 saniyede görünmez, sonrasında görünür
        if (timer <= 26 && timer > 0) {
          setTimer(timer - 1);
          answer.style.visibility = "visible";
        } else if (timer > 26) {
          setTimer(timer - 1);
          answer.style.visibility = "hidden";
        } else {
          setTimer(30);
          setCounter(counter + 1);
          answer.style.visibility = "hidden";
        }
      }, 1000);

      return () => clearInterval(intervalId);
    }, [counter, setCounter, timer, setTimer]);
  }

  return (
    <div className="question-container">
      <img src={currentQuestion.media} alt="hey" />
      <div className="timer-header-container">
        <Timer />
      </div>
      <div className="question-border">
        <p>{currentQuestion.question}</p>
      </div>
      <Answer currentQuestion={currentQuestion} />
    </div>
  );
}

export default Question;
