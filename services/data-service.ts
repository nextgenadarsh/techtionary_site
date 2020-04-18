import { Dispatch } from "react";

import Config from "../config";
import { CONTENT_TYPES, Topic, Question } from "../models";
import Client from "./client";
import {
  getQuestionsSuccessAction,
  getTopicsSuccessAction,
  getAnswerSuccessAction
} from "../reducer/actions";

// Note: it's important to handle errors here instead of a catch() block so that we don't swallow exceptions from actual bugs in components.

/**
 *
 * @param dispatch
 * @param param1
 */
const getAnswer = (
  dispatch: Dispatch<any>,
  { topicId, questionId, answerKey }
) => {
  const url = `${Config.dataBaseUrl}/answers/${topicId}/${answerKey}.md`;
  Client.get<string>({ url, contentType: CONTENT_TYPES.TEXT }).then(
    response => {
      if (response.success) {
        response.data.then(answer => {
          getAnswerSuccessAction(dispatch, {
            topicId,
            questionId,
            answer: answer
          });
        });
      }
    },
    () => {
      // Suppress error for now
    }
  );
};

const getQuestions = (dispatch: Dispatch<any>, topicId: string) => {
  const url = `${Config.dataBaseUrl}/questions/q_${topicId}.json`;
  Client.get<Question[]>({ url, contentType: CONTENT_TYPES.JSON }).then(
    response => {
      if (response.success) {
        response.data.then(data => {
          getQuestionsSuccessAction(dispatch, {
            topicId,
            questions: data.map(r => new Question(r))
          });
        });
      }
    },
    () => {
      // Suppress error for now
    }
  );
};

const getTopics = (dispatch: Dispatch<any>) => {
  const url = `${Config.dataBaseUrl}/topics.json`;
  Client.get<Topic[]>({ url, contentType: CONTENT_TYPES.JSON }).then(
    response => {
      if (response.success) {
        response.data.then(data => {
          getTopicsSuccessAction(dispatch, data.map(r => new Topic(r)));
        });
      }
    },
    () => {
      // Suppress error for now
    }
  );
};

export { getAnswer, getQuestions, getTopics };
