import React, { Component } from 'react'
import { connect } from 'react-redux'
import LeaderboardEntry from './LeaderboardEntry'

class Leaderboard extends Component {
  render() {
    return (
      <div className="app">
        <h2>LEADERBOARD</h2>
        {this.props.users.map((id, index) => (
          <LeaderboardEntry id={id} rank={++index} key={id}/>
        ))}
      </div>
    )
  }
}

function mapStateToProps ({ users }) {
  const usersIds = Object.keys(users)

  return {
    users: usersIds
      .sort((b,a) => 
        (users[a].questions.length + Object.keys(users[a].answers).length) -
        (users[b].questions.length + Object.keys(users[b].answers).length)
      )
  }
}

export default connect(mapStateToProps)(Leaderboard)
