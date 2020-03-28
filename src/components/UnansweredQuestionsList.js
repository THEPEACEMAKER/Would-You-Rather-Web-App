import React, { Component } from 'react'
import { connect } from 'react-redux'
import UnansweredQuestion from './UnansweredQuestion'
import Tabs from './Tabs'

class UnansweredQuestionsList extends Component {
  render() {
    return (
      <div>
        <Tabs page='unanswered' />
        {this.props.unansweredQuestionsIds.map((id) => (
          <UnansweredQuestion id={id} key={id}/>
        ))}
      </div>
    )
  }
}

function mapStateToProps ({ questions, authedUser }) {
  const questionsIds = Object.keys(questions)
  const unansweredQuestions = questionsIds
  .filter(questionId => !(questions[questionId].optionOne.votes.includes(authedUser) || questions[questionId].optionTwo.votes.includes(authedUser)))

  return {
    unansweredQuestionsIds: unansweredQuestions
      .sort((a,b) => questions[b].timestamp - questions[a].timestamp)
  }
}

export default connect(mapStateToProps)(UnansweredQuestionsList)
