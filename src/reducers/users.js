import { RECEIVE_USERS } from '../actions/users'

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
    default :
      return state
  }
}
