export const RECEIVE_USERS = 'RECEIVE_USERS'
export const ADD_ANSWER_TO_USER = 'ADD_ANSWER_TO_USER'
export const ADD_QUESTION_TO_USER = 'ADD_QUESTION_TO_USER'

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

export function AddQuestionToUser (question) {
  return {
    type: ADD_QUESTION_TO_USER,
    qid: question.id,
    author: question.author,
  }
}
