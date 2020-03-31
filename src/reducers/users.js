import { RECEIVE_USERS, ADD_ANSWER_TO_USER, ADD_QUESTION_TO_USER } from '../actions/users'

/*
Reducers
A Reducer describes how an application's state changes.
You’ll often see the Object Spread Operator (...) used inside of a reducer because a reducer must return a new object instead of mutating the old state.

Reducers have the following signature:
(previousState, action) => newState

--
Initializing State
You can include a default state parameter as the first argument inside a particular reducer function.
it will be used when this function is invoked with the state of undefined, which it will be the first time that it's invoked
For example:

function users (state = {}, action) {} 		// store = { users : {}}
*/
export default function users (state = {}, action) {
  switch(action.type) {
    case RECEIVE_USERS :
      return {
        ...state, // a clone of the old state
        ...action.users // merge the action.users onto this clone
      }
    case ADD_ANSWER_TO_USER :
    	let userAnswersIds = Object.keys(state[action.authedUser].answers)
    	let userAnswers = {...state[action.authedUser]['answers']} // a clone of the answers
    	
    	if (userAnswersIds.includes(action.qid)) { //if the id of the questions is already in the answers
    		delete userAnswers[action.qid] //remove it
    	}else {
    		userAnswers = {
    			...userAnswers,
    			[action.qid] : action.answer //add it
    		}
    	}

      return {
        ...state,
        [action.authedUser]: {
          ...state[action.authedUser],
          answers : userAnswers
        }
      }
    case ADD_QUESTION_TO_USER :
      return {
        ...state,
        [action.author]: {
          ...state[action.author],
          questions : state[action.author].questions.concat([action.qid])
        }
      }
    default :
      return state
  }
}
