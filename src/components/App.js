import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import QuestionsContainer from './QuestionsContainer'

class App extends Component {
	componentDidMount() {
	  this.props.dispatch(handleInitialData()) // has access to the dispatch, because of the connect function
	}

  render() {
    return (
      <QuestionsContainer />
    )
  }
}

export default connect()(App)
// Using the connect() function upgrades a component to a container. Containers can read state from the store and dispatch actions. 
