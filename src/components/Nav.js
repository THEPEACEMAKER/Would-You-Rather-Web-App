import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { removeAuthedUser } from '../actions/authedUser'

class Nav extends Component {
  handleLogOut = (e) => {
    e.preventDefault()

    const { dispatch } = this.props

    dispatch(removeAuthedUser())
  }

  render() {
  	const { name, avatarURL } = this.props

    return (
    	<nav className="nav">
          <div>
              <div className="logo">
                  <NavLink to='/' exact>
                  	Would You Rather !!?
                  </NavLink>
              </div>
              <div className="main_nav">
                  <ul className="navlinks">
                      <li>
                      	<NavLink to='/' exact>
                      		Home
                      	</NavLink>
                      </li>
                      <li>
                      	<NavLink to='/add' exact>
                      		Add A Question
                      	</NavLink>
                      </li>
                      <li>
                      	<NavLink to='/leaderboard' exact>
                      		Leaderboard
                      	</NavLink>
                      </li>
                      <li>
                      	<NavLink to='/logout' onClick={this.handleLogOut}>
                      		<img 
                      			src={`${process.env.PUBLIC_URL}/${avatarURL}.png`}
                      			alt={`Avatar of ${name}`}
                            title={name}
                      		/>
                      		{`(${name}) logout`}
                      	</NavLink>
                      </li>
                  </ul>
              </div>
          </div>
      </nav>
    )
  }
}

function mapStateToProps ({authedUser, users}) {
  const user = users[authedUser]

  return {
    name: user.name,
    avatarURL: user.avatarURL,
  }
}

export default connect(mapStateToProps)(Nav)
