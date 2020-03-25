import { combineReducers } from 'redux'
import authedUser from './authedUser'
import users from './users'
import questions from './questions'

// Redux's combineReducers is responsible for invoking all the other reducers, passing them the portion of their state that they care about.
// We're making one root reducer, by composing a bunch of other reducers together.
// we need to do this because the createStore function only accepts a single reducer.
export default combineReducers({
  authedUser,
  users,
  questions
})

/*
The Model of Our Store:

The questions slice of the state in the store will be modified by actions that go through the questions reducer. 
The users slice of the state in the store will be modified by actions that go through the users reducer. 
the authedUser portion of the state in the store will be modified by actions that go through the authedUser reducer.*/
