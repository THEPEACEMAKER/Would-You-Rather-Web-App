import React, { Fragment } from 'react'
import { Route } from 'react-router-dom'
import QuestionsContainer from './QuestionsContainer'
import Leaderboard from './Leaderboard'
import AddQuestion from './AddQuestion'
import Nav from './Nav'

function Dashboard(props){
  return (
  	<Fragment>
      <Nav />
      <Route path='/' exact component={QuestionsContainer} />
      <Route path='/add' component={AddQuestion} />
      <Route path='/leaderboard' component={Leaderboard} />
	</Fragment>
  )
}

export default Dashboard
