import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import Dashboard from './Dashboard'
import LoadingBar from 'react-redux-loading'
import Login from './Login'
import { BrowserRouter as Router } from 'react-router-dom'


class App extends Component {
	componentDidMount() {
	  this.props.dispatch(handleInitialData()) // has access to the dispatch, because of the connect function
	}

  render() {
    return (
      <Router>
      	<div>
          <LoadingBar />
  	    	{this.props.loading === true //only render the QuestionsContainer once the data fetching is finished, and the authedUser is set
  	    	  ? <Login />
  	    	  : <Dashboard />}
      	</div>
      </Router>
    )
  }
}


function mapStateToProps ({ authedUser }) {
  return {
    loading: authedUser === null // true till the data is fetched, and the authedUser is set
  }
}

export default connect(mapStateToProps)(App)
// Using the connect() function upgrades a component to a container. Containers can read state from the store and dispatch actions. 
