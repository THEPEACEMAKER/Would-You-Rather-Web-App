import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './components/App'
// yarn add react-redux redux
// yarn upgrade react react-dom  // to use createContext that is used by the Provider
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers' // the main export from the index.js inside the ./reducers which is the combineReducers

/*
Redux applications have a single store.
We have to pass the Root Reducer to our createStore() function in order for the store to know what pieces of state it should have.
The point of creating a store is to allow components to be able to access it without having to pass the data down through multiple components.*/
const store = createStore(reducer)

// The Provider component makes it possible for all components nested inside it to access the store via the connect() function.
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
document.getElementById('root')
)
