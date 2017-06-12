/**
 * Participant data for the poll.
 *
 * @export
 * @interface ParticipantData
 */
export interface ParticipantData {
  /**
   * Each value corresponds to one option from the optionsText array
   * in PollData.
   *
   * @type {string}
   * @memberof ParticipantData
   */
  preferences: string;
  name: string;
  id: string;
  locked: boolean;
}
