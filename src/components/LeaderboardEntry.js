import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatUserRank } from '../utils/helpers'

class LeaderboardEntry extends Component {
  render() {
    const { user } = this.props

    if (user === null) {
      return <p>This user doesn't exist</p>
    }

    const {
      name, avatarURL, questionsNumber, answersNumber, score, rank
    } = user

    return (
      <div id="question" className="leaderboard">
        <div className="question-head">
          <div className="left title">
            Rank
          </div>
          <div className="middle-title title">
            <img
               src={`${process.env.PUBLIC_URL}/${avatarURL}.png`}
               alt={`Avatar of ${name}`}
             />
            <p>{name}</p>
          </div>
          <div className="right-title right title">
            Score
          </div>
        </div>
        <div className="question-body">
          <div className="numbers-score left">
            <p>{rank}</p>
          </div>
          <div className="numbers-questions">
            <p>Questions Asked</p>
            <div className="numbers-leaderboard"><p>{questionsNumber}</p></div>
          </div>
          <div className="numbers-questions">
            <p>Questions Answered</p>
            <div className="numbers-leaderboard"><p>{answersNumber}</p></div>
          </div>
          <div className="numbers-score right">
            <p>{score}</p>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps ({users}, { id, rank }) {
  const user = users[id]

  return {
    user: user
      ? formatUserRank(user, rank)
      : null
  }
}

export default connect(mapStateToProps)(LeaderboardEntry)
