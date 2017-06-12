import { PollData } from './interfaces/poll-data';

const pollDataRegex = /\$\.extend\(true, doodleJS\.data, (.*)\);/g;
const baseDoodleUrl = 'http://doodle.com/poll/';

export async function fetchPollData(pollID: string): Promise<PollData> {
  const response = await fetch(baseDoodleUrl + pollID);
  const html = await response.text();
  const matches = html.match(pollDataRegex);
  if (matches.length === 0) {
    throw new Error('Cannot match poll data');
  }

  try {
    const pollData = JSON.parse(matches[0]);
    return pollData;
  } catch (error) {
    throw new Error('Cannot parse poll data');
  }
}
