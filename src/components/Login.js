import React, { Component } from 'react'
import { connect } from 'react-redux'
import UserAvatar from './UserAvatar'
import { setAuthedUser } from '../actions/authedUser'
import { withRouter } from 'react-router-dom'

class Login extends Component {
  state = {
    selected: '',
  }
  handleChange = (e) => {
    const selected = e.target.getAttribute('value')

    this.setState(() => ({
      selected
    }))
  }
  handleSubmit = (e) => {
    e.preventDefault()

    const { selected } = this.state
    const { dispatch } = this.props

    this.props.history.push('/')

    dispatch(setAuthedUser(selected))

    this.setState(() => ({
      selected: '',
    }))
  }
  render() {
    const { selected } = this.state

    return (
      <div className="app">
        <form id="users-form" onSubmit={this.handleSubmit}>
          <div id="question">
            <div className="question-head">
              <div className="question-title">
                <p>Choose The Account</p>
              </div>
            </div>
            <div className="question-body">
              <div id="imgs-div">
                {this.props.users.map((id) => (
                  <UserAvatar key={id} id={id} selected={selected} onChange={this.handleChange} />
                ))}
              </div>
            </div>
            <div id="submit-div">
                <button type="submit" id="submit" disabled={selected === ''} >submit</button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

function mapStateToProps ({ users }) {
  const usersIds = Object.keys(users)

  return {
    users: usersIds
  }
}

export default withRouter(connect(mapStateToProps)(Login))
