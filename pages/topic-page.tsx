import React from "react";

import { Question } from "../components";

import "./topic-page.scss";
import { getAnswerAction } from "../reducer/actions";

const TopicPage = ({ history, state, dispatch }) => {
  const { selectedTopicId, topics = [] } = state;
  const topic = topics.find(t => t.id === state.selectedTopicId);

  const handleQuestionSelect = (questionId) => {
    const foundQuestion = topic.questions.find(q => q.id === questionId);
    if(!foundQuestion.answer) {
      getAnswerAction(dispatch, {
        topicId: selectedTopicId,
        questionId: foundQuestion.id,
        answerKey: foundQuestion.answerKey
      })
    }
  };
  
  const questions = topic ? topic.questions : [];

  return (
    <div className="tech-topic-page">
      <div className="header">
        <button className="btn-back" onClick={() => history.push("/")}>
          Back
        </button>
      </div>
      <h3 align="center">{topic.label}</h3>
      {questions
        .sort((a, b) => (a.id > b.id ? 1 : -1))
        .map(question => (
          <Question
          key={question.id}
          question={question}
          onQuestionSelect={handleQuestionSelect}
        />
      ))}
    </div>
  );
};

export default TopicPage;
