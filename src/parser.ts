import { PollData } from './interfaces/poll-data';
import { Option } from './option';
import { Participant } from './participant';
import { Poll } from './poll';

export function parsePollData(pollData: PollData): Poll {
  const options: Option[] = [];
  const participants: Participant[] = [];

  if (!pollData || !pollData.participants || !pollData.optionsText) {
    throw new Error('Invalid PollData');
  }

  for (let optionText of pollData.optionsText) {
    options.push(new Option(optionText));
  }

  for (let participantData of pollData.participants) {
    const participant = new Participant(participantData.name, participantData.locked);
    participant.options = participantData.preferences
      .split('')
      .map((yesNo, index) => ({ selected: yesNo === 'y', index }))
      .filter(option => option.selected)
      .map(option => option.index)
      .map(index => options[index]);

    participant.options.forEach(option => {
      option.participants.push(participant);
    });

    participants.push(participant);
  }

  return new Poll(options, participants);
}
