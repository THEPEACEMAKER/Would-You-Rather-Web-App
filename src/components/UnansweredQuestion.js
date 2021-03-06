import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatQuestion } from '../utils/helpers'
import { handleAddAnswer } from '../actions/shared'
import { Link } from 'react-router-dom'

class UnnsweredQuestion extends Component {
  handleAnswer = (e, answer) => {
    e.preventDefault()
    console.log(answer)
    // todo: Handle answering a question
    const { dispatch, question, authedUser, id, onAnswer } = this.props

    onAnswer(id)

    dispatch(handleAddAnswer({
      qid: question.qid,
      authedUser,
      answer
    })).catch(() => {
        onAnswer(id)
      })
  }

  render() {
    const { question, id } = this.props

    if (question === null) {
      return <p>This question doesn't exist</p>
    }

    const {
      authorName, authorAvatar, optionOneText, optionTwoText
    } = question

    return (
      <div id="question" className="unanswered">
        <Link to={`/questions/${id}`}>
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
        </Link>
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

function mapStateToProps ({authedUser, users, questions}, { id, onAnswer }) {
  const question = questions[id]

  return {
    authedUser,
    onAnswer,
    id,
    question: question
      ? formatQuestion(question, users[question.author], authedUser)
      : null
  }
}

export default connect(mapStateToProps)(UnnsweredQuestion)
