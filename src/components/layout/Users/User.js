import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'
import Spinner from '../Spinner/Spinner';

export class User extends Component {
  componentDidMount() {
    this.props.getUser(this.props.match.params.login);
  }

  static propTypes = {
    loading: PropTypes.bool.isRequired,
    user: PropTypes.object.isRequired,
    getUser: PropTypes.func.isRequired,
  }
  render() {
    const { name, avatar_url, location, company, bio, blog, login, html_url, followers, following, public_repos, public_gists, hireable } = this.props.user;

    const { loading } = this.props;

    const isHireable = () => {
      if ( hireable ) {
        return <i className='fas fa-check text-success' />
      }
      return  <i className='fas fa-times-circle text-danger'/>
    }

    if (loading) return <Spinner />
    return (
      <Fragment>
        <Link to='/' className='btn'>Back to Search</Link>
        Hireable: 
        {isHireable()}
        <div className="card grid-2">
          <div className="all-center">
            <img src={avatar_url} className='round-img' alt="" style={{ width: '150px'}}/>
          <h1>{name}</h1>
          <p>Location: {location}</p>
          </div>
          <div>
            {bio && (
            <Fragment>
              <h3>Bio</h3>
              <p>{bio}</p>
            </Fragment>)}
            <a href={html_url} className='btn'>Visit Github Profile</a>
            <ul>
            {login && (
                <li>
                    <strong>Username: </strong> {login}
                </li>
                )}
              {company && (
                <li>
                    <strong>Company: </strong> {company}
                </li>
                )}
              {blog && (
                <li>
                    <strong>Website: </strong> {blog}
                </li>
                )}
            </ul>
          </div>
        </div>

        <div className="card text-center">
          <div className="badge badge-primary">Followers: {followers}</div>
          <div className="badge badge-success">Following: {following}</div>
          <div className="badge badge-light">Public Repos: {public_repos}</div>
          <div className="badge badge-dark">Public Gists: {public_gists}</div>
        </div>
      </Fragment>
    )
  }
}

export default User;
