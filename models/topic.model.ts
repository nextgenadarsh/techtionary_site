import { Question } from "./question.model";

export class Topic {
  id: string;
  label: string;
  iconUrl: string;
  questions: Question[];

  constructor(topic: any) {
    this.id = topic.id;
    this.label = topic.label;
    this.iconUrl = topic.iconUrl;
    this.questions = topic.questions || [];
  }
}
