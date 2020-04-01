import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatQuestion } from '../utils/helpers'
import { Link } from 'react-router-dom'

class AnsweredQuestion extends Component {
  render() {
    const { question, id } = this.props

    if (question === null) {
      return <p>This question doesn't exist</p>
    }

    const {
      authorName, authorAvatar, optionOneText, optionTwoText, votes, answer
    } = question

    const {
      optionOneNum, optionTwoNum, total, optionOnePercent, optionTwoPercent
    } = votes

    return (
      <div id="question">
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
             id={answer === 'optionOne'? 'selected' : null}>
                 <p>{optionOneText}</p>
                 <div className="meter">
                   <span style={{width: optionOnePercent + '%'}}>{optionOnePercent}%</span>
                 </div>
                 <div className="numbers-details"><p>{optionOneNum} out of {total}</p></div>
             </div>

         
             <div className="option"
             id={answer === 'optionTwo'? 'selected' : null}>
                 <p>{optionTwoText}</p>
                 <div className="meter">
                   <span style={{width: optionTwoPercent + '%'}}>{optionTwoPercent}%</span>
                 </div>
                 <div className="numbers-details"><p>{optionTwoNum} out of {total}</p></div>
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
    id,
    question: question
      ? formatQuestion(question, users[question.author], authedUser)
      : null
  }
}

export default connect(mapStateToProps)(AnsweredQuestion)
