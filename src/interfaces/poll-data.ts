import { ParticipantData } from './participant-data';

/**
 * Data extracted from the poll. Not exhaustive. There are more options.
 * Only the necessary ones are included in the interface.
 *
 * @export
 * @interface PollData
 */

export interface PollData {
  /**
   * List of all possible poll options.
   *
   * @type {string[]}
   * @memberof PollData
   */
  optionsText: string[];
  title: string;
  id: string;

  /**
   * List of participants.
   *
   * @type {ParticipantData[]}
   * @memberof PollData
   */
  participants: ParticipantData[];
}
