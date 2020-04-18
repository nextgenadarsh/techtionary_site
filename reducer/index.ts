import {
  CHANGE_TOPIC,
  INITIALIZE,
  GET_QUESTIONS_SUCCESS,
  GET_TOPICS_SUCCESS,
  GET_ANSWER_SUCCESS
} from "./action-types";

export const initialState = {
  topics: [],
  selectedTopicId: ""
};

export const reducer = (state = initialState, action) => {
  let topic, topicId, question, questionId;

  switch (action.type) {
    case INITIALIZE:
      return state;
    case CHANGE_TOPIC:
      return { ...state, selectedTopicId: action.topicId };
    case GET_ANSWER_SUCCESS:
      topic = state.topics.find(t => t.id === action.topicId);
      question = topic?.questions?.find(q => q.id === action.questionId);
      return {
        ...state,
        topics: [
          ...state.topics.filter(t => t.id !== action.topicId),
          {
            ...topic, questions: [
              ...topic.questions.filter(q => q.id !== action.questionId),
              { ...question, answer: action.answer }
            ]
          }
        ]
      };
    case GET_QUESTIONS_SUCCESS:
      topic = state.topics.find(t => t.id === action.topicId);
      return {
        ...state,
        topics: [
          ...state.topics.filter(t => t.id !== action.topicId),
          { ...topic, questions: action.questions }
        ]
      };
    case GET_TOPICS_SUCCESS:
      return { ...state, topics: action.topics };
  }
};
