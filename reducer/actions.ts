import { Dispatch } from "react";

import {
  GET_QUESTIONS,
  GET_QUESTIONS_SUCCESS,
  INITIALIZE,
  CHANGE_TOPIC,
  GET_TOPICS_SUCCESS,
  GET_ANSWER_SUCCESS
} from "./action-types";

import { getQuestions, getTopics, getAnswer } from "../services/data-service";
import { Topic } from "../models";

const changeTopicAction = (dispatch: Dispatch<any>, topicId: string) => {
  dispatch({ type: CHANGE_TOPIC, topicId });
};

const getAnswerAction = (dispatch: Dispatch<any>, payload) => {
  getAnswer(dispatch, payload);
};

const getAnswerSuccessAction = (dispatch: Dispatch<any>, payload) => {
  dispatch({
    type: GET_ANSWER_SUCCESS,
    ...payload
  });
};

const getQuestionsAction = (dispatch: Dispatch<any>, topicId: string) => {
  getQuestions(dispatch, topicId);
};

const getQuestionsSuccessAction = (dispatch: Dispatch<any>, payload) => {
  dispatch({
    ...payload,
    type: GET_QUESTIONS_SUCCESS
  });
};

const getTopicsAction = (dispatch: Dispatch<any>) => {
  getTopics(dispatch);
};

const getTopicsSuccessAction = (dispatch: Dispatch<any>, topics: Topic[]) => {
  dispatch({
    type: GET_TOPICS_SUCCESS,
    topics
  });
};

const initializeAction = (dispatch: Dispatch<any>) => {
  dispatch({
    type: INITIALIZE
  });
};

export {
  changeTopicAction,
  initializeAction,
  getAnswerAction,
  getAnswerSuccessAction,
  getQuestionsAction,
  getQuestionsSuccessAction,
  getTopicsAction,
  getTopicsSuccessAction
};
