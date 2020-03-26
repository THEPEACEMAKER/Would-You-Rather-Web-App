/*
All middleware follows this currying pattern:

const logger = (store) => (next) => (action) => {
 // ...
}

The variable logger is assigned to a function that takes the store as its argument.
That function returns another function, which is passed next (which is the next middleware in line or the dispatch function).
That other function return another function which is passed an action.
Once inside that third function, we have access to store, next, and action.
*/

// this logger middleware will help us view the actions and state of the store as we interact with our application

const logger = (store) => (next) => (action) => {
  console.group(action.type)
    console.log('The action: ', action)
    // Assigning a defined function to a variable, invokes the function and stores the value it returns in the variable
    const returnValue = next(action)
    console.log('The new state: ', store.getState())
  console.groupEnd()
  return returnValue
}

export default logger 