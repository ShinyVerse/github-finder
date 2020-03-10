import React from 'react'
import PropTypes from 'prop-types'

const UserItem = ({user : { login, avatar_url, html_url}}) => {

  return (
    <div className='card'>
      <img 
        src={avatar_url}
        alt=""
        style={{
          width: '60px'
        }}
        />
        <h3>{login}</h3>
        <div>
          <a href={html_url} className='btn'>More</a>
        </div>
    </div>
  )

}

UserItem.propTypes = {
  user: PropTypes.object.isRequired,
}

export default UserItem;
