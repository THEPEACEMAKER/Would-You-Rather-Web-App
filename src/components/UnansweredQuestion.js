import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatQuestion } from '../utils/helpers'

class UnnsweredQuestion extends Component {
  handleAnswer = (e, answer) => {
    e.preventDefault()
    console.log(answer)
    // todo: Handle answering a question
  }

  render() {
    const { question } = this.props

    if (question === null) {
      return <p>This question doesn't exist</p>
    }

    const {
      authorName, authorAvatar, optionOneText, optionTwoText, answer
    } = question

    return (
      <div id="question" className="unanswered">
         <div className="question-head">
             <div className="question-author">
                 <img
                    src={`${process.env.PUBLIC_URL}/${authorAvatar}.png`}
                    alt={`Avatar of ${authorName}`}
                  />
                 <p>{authorName} : </p>
             </div>
             <div className="question-title">
                 <p>Would You Rather !!?</p>
             </div>
         </div>
         <div className="question-body">
             <div className="option"
             onClick={(e) => this.handleAnswer(e, 'optionOne')}>
                 <p>{optionOneText}</p>
             </div>

         
             <div className="option"
             onClick={(e) => this.handleAnswer(e, 'optionTwo')}>
                 <p>{optionTwoText}</p>
             </div>
         </div>
      </div>
    )
  }
}

function mapStateToProps ({authedUser, users, questions}, { id }) {
  const question = questions[id]

  return {
    authedUser,
    question: question
      ? formatQuestion(question, users[question.author], authedUser)
      : null
  }
}

export default connect(mapStateToProps)(UnnsweredQuestion)
