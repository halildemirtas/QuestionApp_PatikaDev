import React, { useContext } from "react";
import { appContext } from "../context/AppContext";
import "./Result.css";
import questions from "../questions.js";

function Result() {
  const { correctCounter, chosenAnswers } = useContext(appContext);

  return (
    <div className="result-container">
      <div className="score-container">
        <div className="score">
          <p className="total">Puan: {correctCounter}</p>
        </div>
      </div>
      <div>
        <h2 className="header">Answers</h2>
        <ul className="result-list">
          {chosenAnswers.map((answer) => {
            const question = questions.find((item) => item.id === answer.id);
            const isCorrect = answer.chosenAnswer === question.answer;

            return (
              <li key={answer.id}>
                {isCorrect
                  ? ` ${answer.id}. Soruyu : Doğru Cevapladınız`
                  : `${answer.id}. Soruya verdiğiniz cevap ${answer.chosenAnswer} / Doğru Cevap : ${question.answer}`}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Result;
