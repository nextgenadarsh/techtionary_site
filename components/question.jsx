import React from "react";
import Markdown from "markdown-to-jsx";

import "./question.scss";

export const Question = ({ question, onQuestionSelect }) => {
  const handleOnQuestionSelect = questionId => {
    onQuestionSelect && onQuestionSelect(questionId);
  };

  return (
    <div className="tech-question">
      <div
        className="question-tags"
        onClick={() => handleOnQuestionSelect(question.id)}
      >
        <h6>
          {question.id}. {question.q}
        </h6>
        <div className="tags">
          {question.tags.map((tag, tagIndex) => (
            <sup className="tag" key={tagIndex}>
              #{tag}
            </sup>
          ))}
        </div>
      </div>
      <div className="answer">
        {question.answer && <Markdown>{question.answer}</Markdown>}
      </div>
    </div>
  );
};
