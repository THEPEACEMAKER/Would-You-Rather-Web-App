import React, { Component } from 'react'
import { connect } from 'react-redux'

class UnansweredQuestionsList extends Component {
  render() {
    return (
      <div>
          {this.props.unansweredQuestionsIds.map((id) => (
            <div id="question" key={id}>
              <div>Question ID: {id}</div>
            </div>
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
