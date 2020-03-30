import React, { Component } from 'react'
import { connect } from 'react-redux'
import AnsweredQuestion from './AnsweredQuestion'
import Tabs from './Tabs'

class AnsweredQuestionsList extends Component {
  render() {
    return (
      <div className="app">
        <Tabs page='answered' />
        {this.props.answeredQuestionsIds.map((id) => (
          <AnsweredQuestion id={id} key={id}/>
        ))}
      </div>
    )
  }
}

function mapStateToProps ({ questions, authedUser }) {
  const questionsIds = Object.keys(questions)
  const answeredQuestions = questionsIds
  .filter(questionId => (questions[questionId].optionOne.votes.includes(authedUser) || questions[questionId].optionTwo.votes.includes(authedUser)))

  return {
    answeredQuestionsIds: answeredQuestions
      .sort((a,b) => questions[b].timestamp - questions[a].timestamp)
  }
}

export default connect(mapStateToProps)(AnsweredQuestionsList)
