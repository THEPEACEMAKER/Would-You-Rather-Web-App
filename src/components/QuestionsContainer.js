import React from 'react'
import UnansweredQuestionsList from './UnansweredQuestionsList'
import AnsweredQuestionsList from './AnsweredQuestionsList'

function QuestionsContainer(props){
  return (
    <div className="app">
			<AnsweredQuestionsList />
    </div>
  )
}

export default QuestionsContainer
