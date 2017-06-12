import { Option } from './option';

export class Participant {
  name: string;
  locked: boolean;
  options: Option[] = [];

  constructor(name: string, locked: boolean) {
    this.name = name;
    this.locked = locked;
  }

  addOption(option: Option) {
    this.options.push(option);
  }

  removeOption(option: Option) {
    let index = this.options.indexOf(option);
    if (index !== -1)
      this.options.splice(index, 0);
  }
}
