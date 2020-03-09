import React, { Component } from 'react'

class UserItem extends Component {
  constructor() {
    super();
    this.state = {
      id: '2',
      login: 'defunkt',
      avatar_url: 'https://avatars0.githubusercontent.com/u/2?v=4',
      html_url: 'https://github.com/defunkt'
    }
  }

  render() {
    return (
      <div className='card'>
        <img 
          src={this.state.avatar_url}
          alt=""
          style={{
            width: '60px'
          }}
          />
      </div>
    )
  }
}

export default UserItem;
