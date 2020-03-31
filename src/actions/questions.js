export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ADD_ANSWER_TO_QUESTION = 'ADD_ANSWER_TO_QUESTION'
export const ADD_QUESTION = 'ADD_QUESTION'

// action creator
export function receiveQuestions (questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  }
}

export function AddAnswerToQuestion ({ qid, authedUser, answer }) {
  return {
    type: ADD_ANSWER_TO_QUESTION,
    qid,
    authedUser,
    answer
  }
}

export function AddQuestion (question) {
  return {
    type: ADD_QUESTION,
    question
  }
}
