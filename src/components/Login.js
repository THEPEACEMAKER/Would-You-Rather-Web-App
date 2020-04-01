import React, { Component } from 'react'
import { connect } from 'react-redux'

class Login extends Component {
  state = {
    selected: '',
  }
  handleChange = (e) => {
    // handle change
  }
  handleSubmit = (e) => {
    e.preventDefault()
    // handle submit
  }
  render() {
    return (
      <div className="app">
        <form id="users-form">
          <div id="question">
            <div className="question-head">
              <div className="question-title">
                <p>Choose The Account</p>
              </div>
            </div>
            <div className="question-body">
              <div id="imgs-div">
                {this.props.users.map((id) => (
                  <p key={id}>{id}</p>
                ))}
              </div>
            </div>
            <div id="submit-div">
                <button type="submit" id="submit" disabled>submit</button>
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

export default connect(mapStateToProps)(Login)
