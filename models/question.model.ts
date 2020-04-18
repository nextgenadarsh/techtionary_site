import { getAnswerKey } from "../utils";

export class Question {
  id: number;
  q: string;
  topic: string;
  level: string;
  tags: string[];
  answerKey: string;
  answer: string;

  constructor(question: any) {
    this.id = question.id;
    this.q = question.q;
    this.topic = question.topic;
    this.level = question.level;
    this.tags = question.tags || [];

    this.answerKey = getAnswerKey(this.q);
    this.answer = "";
  }
}
