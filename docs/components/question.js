import React from "react";
import { useState } from "react";

export default function Question({ question, answers, handleClick }) {
  const showAnswers = answers.map((answer, index) => {
    const id = `${question}-${index}`;
    return (
      <div key={index}>
        <input
          type="radio"
          id={id}
          name="option"
          value={answer.text}
          onClick={() => {
            handleClick(index);
          }}
        />
        <label htmlFor={id}>{answer.text}</label>
      </div>
    );
  });

  return (
    <div>
      <p style={{ marginBottom: "10px" }}>{question}</p>
      {showAnswers}
    </div>
  );
}
