import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleAddQuestion } from '../actions/shared'
import { Redirect } from 'react-router-dom'

class AddQuestion extends Component {
  state = {
    optionOneText: '',
    optionTwoText: '',
    toHome: false,
  }
  handleOptionOneChange = (e) => {
    const optionOneText = e.target.value

    this.setState(() => ({
      optionOneText
    }))
  }
  handleOptionTwoChange = (e) => {
    const optionTwoText = e.target.value

    this.setState(() => ({
      optionTwoText
    }))
  }
  handleSubmit = (e) => {
    e.preventDefault()

    const { optionOneText, optionTwoText } = this.state
    const { dispatch, authedUser } = this.props

    dispatch(handleAddQuestion({
      optionOneText,
      optionTwoText,
      author: authedUser,
    }))

    this.setState(() => ({
      optionOneText: '',
      optionTwoText: '',
      toHome: true,
    }))
  }
  render() {
    const { optionOneText, optionTwoText, toHome } = this.state

    if (toHome === true) {
      return <Redirect to='/' />
    }

    const optionOneLeft = 180 - optionOneText.length
    const optionTwoLeft = 180 - optionTwoText.length

    return (
      <div className="app">
        <h2>Add A New Question</h2>
        <form onSubmit={this.handleSubmit}>
          <div id="question">
            <div className="question-head">
              <div className="question-title">
                <p>Would You Rather !!?</p>
              </div>
            </div>
            <div className="question-body" id="form-body">
              <div className="option-input">
                <div className="input-div">
                  <textarea
                    placeholder="Option 1 goes here"
                    value={optionOneText}
                    onChange={this.handleOptionOneChange}
                    maxLength={180}
                    cols="42"
                    rows="7"
                  />
                  {optionOneLeft <= 100 && (
                    <div className="letter-counter">
                      {optionOneLeft}
                    </div>
                  )}
                </div>
              </div>
              <div className="option-input">
                <div className="input-div">
                  <textarea
                    placeholder="Option 2 goes here"
                    value={optionTwoText}
                    onChange={this.handleOptionTwoChange}
                    maxLength={180}
                    cols="42"
                    rows="7"
                  />
                  {optionTwoLeft <= 100 && (
                    <div className="letter-counter">
                      {optionTwoLeft}
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div id="submit-div">
                <button id="submit"
                  type='submit'
                  disabled={optionOneText === '' || optionTwoText === ''}>
                    Submit
                </button>
            </div>
          </div>
        </form>        
      </div>
    )
  }
}

function mapStateToProps ({ authedUser }) {
  return {
    authedUser
  }
}

export default connect(mapStateToProps)(AddQuestion)
