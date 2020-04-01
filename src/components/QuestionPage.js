import React, { Component } from 'react'
import AnsweredQuestion from './AnsweredQuestion'

class QuestionPage extends Component {
  render() {
    const { id } = this.props.match.params
    return (
      <div className="app">
        <AnsweredQuestion id={id}/>
      </div>
    )
  }
}

export default QuestionPage