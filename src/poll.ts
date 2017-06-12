import { Option } from './option';
import { Participant } from './participant';

export class Poll {
  options: Option[];
  participants: Participant[];

  constructor(options: Option[], participants: Participant[]) {
    this.options = options;
    this.participants = participants;
  }
}
