import React, { Component } from 'react'

class UserItem extends Component {
  // state = {
  //   id: '2',
  //   login: 'defunkt',
  //   avatar_url: 'https://avatars0.githubusercontent.com/u/2?v=4',
  //   html_url: 'https://github.com/defunkt'
  // }

  render() {
    const {
      login, 
      avatar_url,
      html_url
    } = this.props.user;

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
}

export default UserItem;
