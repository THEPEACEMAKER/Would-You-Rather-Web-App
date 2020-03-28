export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ADD_ANSWER_TO_QUESTION = 'ADD_ANSWER_TO_QUESTION'

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
