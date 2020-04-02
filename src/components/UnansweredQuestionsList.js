import React, { Component } from 'react'
import { connect } from 'react-redux'
import UnansweredQuestion from './UnansweredQuestion'
import Tabs from './Tabs'
import AnsweredQuestion from './AnsweredQuestion'

class UnansweredQuestionsList extends Component {
  componentWillUnmount() {
    this.props.resetAnswered()
  }
  render() {
    const { questionsToRender, onChange, answered, onAnswer } = this.props
    return (
      <div className="app">
        <Tabs page='unanswered' onChange={onChange} />
        {questionsToRender.map((id) => (
          answered.includes(id)
          ? <AnsweredQuestion id={id} key={id}/>
          : <UnansweredQuestion id={id} key={id} onAnswer={onAnswer} />
        ))}
      </div>
    )
  }
}

function mapStateToProps ({ questions, authedUser }, { onChange, answered, onAnswer, resetAnswered }) {
  const questionsIds = Object.keys(questions)
  const unansweredQuestions = questionsIds
  .filter(questionId => !(questions[questionId].optionOne.votes.includes(authedUser) || questions[questionId].optionTwo.votes.includes(authedUser)))
  const questionsToRender = [...unansweredQuestions ,...answered]

  return {
    questionsToRender: questionsToRender
      .sort((a,b) => questions[b].timestamp - questions[a].timestamp),
    onChange,
    answered,
    onAnswer,
    resetAnswered,
  }
}

export default connect(mapStateToProps)(UnansweredQuestionsList)
