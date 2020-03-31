import React, { Fragment } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import UnansweredQuestionsList from './UnansweredQuestionsList'
import AnsweredQuestionsList from './AnsweredQuestionsList'
import Leaderboard from './Leaderboard'
import AddQuestion from './AddQuestion'
import Nav from './Nav'

function QuestionsContainer(props){
  return (
  	<Router>
	  	<Fragment>
	      <Nav />
	      <Route path='/' exact component={UnansweredQuestionsList} />
	      <Route path='/answered' component={AnsweredQuestionsList} />
	      <Route path='/add' component={AddQuestion} />
	      <Route path='/leaderboard' component={Leaderboard} />
			</Fragment>
		</Router>
  )
}

export default QuestionsContainer
