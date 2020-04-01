import React, { Component } from 'react'
import UnansweredQuestionsList from './UnansweredQuestionsList'
import AnsweredQuestionsList from './AnsweredQuestionsList'

class QuestionsContainer extends Component {
  state = {
    selected: 'Unanswered',
  }
  handleChange = (e) => {
    const selected = e.target.textContent

    this.setState(() => ({
      selected
    }))
  }
  render() {
    const { selected } = this.state

    return (
    	<div>
    	{selected === 'Unanswered'
    	  ? <UnansweredQuestionsList onChange={this.handleChange} />
    	  : <AnsweredQuestionsList onChange={this.handleChange} />}
  	  </div>
    )
  }
}

export default QuestionsContainer
