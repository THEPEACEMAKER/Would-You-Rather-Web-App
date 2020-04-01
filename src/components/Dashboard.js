import React, { Fragment } from 'react'
import { Route } from 'react-router-dom'
import QuestionsContainer from './QuestionsContainer'
import Leaderboard from './Leaderboard'
import AddQuestion from './AddQuestion'
import Nav from './Nav'
import QuestionPage from './QuestionPage'

function Dashboard(props){
  return (
  	<Fragment>
      <Nav />
      <Route path='/' exact component={QuestionsContainer} />
      <Route path='/add' component={AddQuestion} />
      <Route path='/leaderboard' component={Leaderboard} />
      <Route path='/questions/:id' component={QuestionPage} />
	</Fragment>
  )
}

export default Dashboard
