import React, { useState, useContext } from 'react'
import PropTypes from 'prop-types';
import GithubContext from '../../../context/github/githubContext';


const Search = ({ setAlert }) => {
  const githubContext = useContext(GithubContext);
  const [text, setText] = useState('');

  const { users, searchUsers, clearUsers } = githubContext;

  const onSubmit = e => {
    e.preventDefault();
    if (text === '') {
      setAlert('Please enter something', 'warning');
    } else {
      searchUsers(text);
      setText('');
    }
  }

  const onChange = e => setText(e.target.value)

  return (
    <div>
      <form onSubmit={onSubmit} className='form'>
        <input 
          type="text" 
          name="text"
          placeholder="Search Users..."
          value={text}
          onChange={onChange} />
          <input 
            type="submit"
            value="Search"
            className='btn'
            />
      </form>
      {
        users.length > 0 && (
          <button 
          className='clear' 
          onClick={clearUsers}>Clear</button>)
      }
    </div>
  )
}

Search.propTypes = {
  setAlert: PropTypes.func.isRequired,
}


export default Search
