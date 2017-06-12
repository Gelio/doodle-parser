import { fetchPollData } from './fetcher';
import { parsePollData } from './parser';
import { Poll } from './poll';

export async function getPoll(pollID: string): Promise<Poll> {
  const pollData = await fetchPollData(pollID);
  return parsePollData(pollData);
}
