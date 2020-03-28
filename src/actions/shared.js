import { getInitialData, saveQuestionAnswer } from '../utils/api'
import { receiveUsers } from './users'
import { receiveQuestions, AddAnswerToQuestion } from './questions'
import { setAuthedUser } from './authedUser'

const AUTHED_ID = 'tylermcginnis' // a fixed user for now

// Redux thunk action creator : cause we need to make an asynchronous request
export function handleInitialData () {
	return (dispatch) => {
		return getInitialData()
			.then(({ users, questions }) => {
				// dispatch: takes an action creator that takes a value, and then send the action to the reducer, which applies this action
				dispatch(receiveUsers(users))
				dispatch(receiveQuestions(questions))
				dispatch(setAuthedUser(AUTHED_ID))
			})
	}
}

export function handleAddAnswer (info) {
  return (dispatch) => {
    dispatch(AddAnswerToQuestion(info))

    return saveQuestionAnswer(info)
      .catch((e) => {
        console.warn('Error in handleAddAnswer: ', e)
        dispatch(AddAnswerToQuestion(info))
        alert('There was an error answering that question. Try again.')
      })
  }
}
