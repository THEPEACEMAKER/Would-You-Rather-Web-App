import React from 'react'
import { connect } from 'react-redux'

function UserAvatar(props){
  const { userId, name, avatarURL, selected, onChange } = props
  return (
    <img
      src={`${process.env.PUBLIC_URL}/${avatarURL}.png`}
      alt={`Avatar of ${name}`}
      title={name}
      value={`${userId}`}
      onClick={onChange}
      id={selected === userId ? 'active' : null}
    />
  )
}

function mapStateToProps ({ users }, { id, selected, onChange }) {
  const user = users[id]

  return {
    userId: user.id,
    name: user.name,
    avatarURL: user.avatarURL,
    selected,
    onChange,
  }
}

export default connect(mapStateToProps)(UserAvatar)
