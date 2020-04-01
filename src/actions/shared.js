import { getInitialData, saveQuestionAnswer, saveQuestion } from '../utils/api'
import { receiveUsers, AddAnswerToUser, AddQuestionToUser } from './users'
import { receiveQuestions, AddAnswerToQuestion, AddQuestion } from './questions'
import { setAuthedUser } from './authedUser'
import { showLoading, hideLoading } from 'react-redux-loading'

const AUTHED_ID = null // a fixed user for now

// Redux thunk action creator : cause we need to make an asynchronous request
export function handleInitialData () {
	return (dispatch) => {
    dispatch(showLoading())
		return getInitialData()
			.then(({ users, questions }) => {
				// dispatch: takes an action creator that takes a value, and then send the action to the reducer, which applies this action
				dispatch(receiveUsers(users))
				dispatch(receiveQuestions(questions))
				dispatch(setAuthedUser(AUTHED_ID))
        dispatch(hideLoading())
			})
	}
}

export function handleAddAnswer (info) {
  return (dispatch) => {
    dispatch(AddAnswerToQuestion(info))
    dispatch(AddAnswerToUser(info))

    return saveQuestionAnswer(info)
      .catch((e) => {
        console.warn('Error in handleAddAnswer: ', e)
        dispatch(AddAnswerToQuestion(info))
        dispatch(AddAnswerToUser(info))
        alert('There was an error answering that question. Try again.')
      })
  }
}

export function handleAddQuestion (question) {
  return (dispatch) => {
    dispatch(showLoading())
    return saveQuestion(question)
      .then((question) => {
        dispatch(AddQuestion(question))
        dispatch(AddQuestionToUser(question))
        dispatch(hideLoading())
      })
  }
}
