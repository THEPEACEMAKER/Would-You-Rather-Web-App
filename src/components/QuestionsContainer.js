import React, { Component } from 'react'
import UnansweredQuestionsList from './UnansweredQuestionsList'
import AnsweredQuestionsList from './AnsweredQuestionsList'

class QuestionsContainer extends Component {
  state = {
    selected: 'Unanswered',
    answered: [],
  }
  handleChange = (e) => {
    const selected = e.target.textContent

    this.setState(() => ({
      selected
    }))
  }
  handleAnswerInState = (id) => {
    this.setState((prevState) => (
      {
        answered: prevState.answered.includes(id)
          ? prevState.answered.filter((qid) => qid !== id)
          : prevState.answered.concat([id])
      }
    ))
  }
  resetAnswered = () => {
    this.setState(() => ({
      answered: []
    }))
  }
  render() {
    const { selected, answered } = this.state

    return (
    	<div>
    	{selected === 'Unanswered'
        ? <UnansweredQuestionsList
          onChange={this.handleChange}
          answered={answered}
          onAnswer={this.handleAnswerInState}
          resetAnswered={this.resetAnswered} />
    	  : <AnsweredQuestionsList onChange={this.handleChange} />}
  	  </div>
    )
  }
}

export default QuestionsContainer
