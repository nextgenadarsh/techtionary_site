import React, { useState, useReducer, useEffect } from "react";
import { Topics } from "../components";
import { changeTopicAction, initializeAction } from "../reducer/actions";
import { getQuestions } from "../services/data-service";

const HomePage = ({ history, state, dispatch }) => {
  const { topics = [] } = state;

  const handleTopicChange = topic => {
    if (state.selectedTopicId !== topic.id) {
      changeTopicAction(dispatch, topic.id);
      const selectedTopic = topics.find(t => t.id === topic.id);
      if (selectedTopic && selectedTopic.questions.length < 1) {
        getQuestions(dispatch, topic.id);
      }
      
      history.push("/topic");
    }
  };
  return (
    <div className="tech-home-page">
      <Topics
        topics={state.topics}
        selectedTopicId={state.selectedTopicId}
        onTopicChange={handleTopicChange}
      />
    </div>
  );
};

export default HomePage;
