import React, { useState } from "react";
import { getRandomColor } from "../utils";

import "./topics.scss";

export const Topics = ({ topics, selectedTopicId, onTopicChange }) => {
  const [filter, setFilter] = useState("");
  const handleTopicChange = topic => {
    onTopicChange && onTopicChange(topic);
  };

  const handleOnTopicFilterChange = event => {
    setFilter(event.target.value);
  };

  const filteredTopics = topics
    .filter(t => t.label.toLowerCase().indexOf(filter) > -1)
    .map(t => ({ ...t, backgroundColor: getRandomColor() }));

  return (
    <div className="tech-home-page">
      <div>
        <input
          type="text"
          placeholder="Filter topics..."
          value={filter}
          onChange={handleOnTopicFilterChange}
        />
      </div>
      <div className="topics-container">
        {filteredTopics.map(topic => (
          <div
            key={topic.id}
            className="topic-container"
            style={{ backgroundColor: topic.backgroundColor }}
          >
            <img className="topic-icon" alt={topic.label} src={topic.iconUrl} />
            <button
              disabled={selectedTopicId === topic.id}
              style={{ backgroundColor: topic.backgroundColor }}
              onClick={() => handleTopicChange(topic)}
            >
              {topic.label}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
