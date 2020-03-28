export const RECEIVE_USERS = 'RECEIVE_USERS'
export const ADD_ANSWER_TO_USER = 'ADD_ANSWER_TO_USER'

// action creator
export function receiveUsers (users) {
  return {
    type: RECEIVE_USERS,
    users,
  }
}

export function AddAnswerToUser ({ qid, authedUser, answer }) {
  return {
    type: ADD_ANSWER_TO_USER,
    qid,
    authedUser,
    answer
  }
}
