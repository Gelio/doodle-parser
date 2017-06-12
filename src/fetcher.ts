import { PollData } from './interfaces/poll-data';
import * as fetch from 'node-fetch';

const pollDataRegex = /\$\.extend\(true, doodleJS\.data, (.*)\);/g;
const baseDoodleUrl = 'http://doodle.com/poll/';

export async function fetchPollData(pollID: string, headers?: { [key: string]: string }): Promise<PollData> {
  const options = {
    method: 'GET'
  };
  if (headers) {
    options['headers'] = headers;
  }


  const response = await fetch(baseDoodleUrl + pollID, options);
  const html: string = await response.text();
  const matches = pollDataRegex.exec(html);
  if (matches.length === 0) {
    throw new Error('Cannot match poll data');
  }

  try {
    const pollData = JSON.parse(matches[1]);
    return pollData.poll;
  } catch (error) {
    throw new Error('Cannot parse poll data');
  }
}
