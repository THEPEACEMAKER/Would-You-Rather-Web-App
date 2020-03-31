import React, { Component } from 'react'

class AddQuestion extends Component {
  state = {
    optionOneText: '',
    optionTwoText: ''
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

    // todo: Add question to Store

    console.log('optionOneText: ', optionOneText)
    console.log('optionTwoText: ', optionTwoText)

    this.setState(() => ({
      optionOneText: '',
      optionTwoText: '',
    }))
  }
  render() {
    const { optionOneText, optionTwoText } = this.state

    {/* todo: Redirect to / if submitted */}

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

export default AddQuestion
