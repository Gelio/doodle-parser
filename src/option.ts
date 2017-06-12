import { Participant } from './participant';

export class Option {
  text: string;
  participants: Participant[] = [];

  constructor(text: string) {
    this.text = text;
  }
}
