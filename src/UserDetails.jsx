import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';

import api from './api';
import UserBanner from './UserBanner';
import UserProfile from './UserProfile';
import UserRepos from './UserRepos';

class UserDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = { user: {} };
  }

  componentDidMount() {
    this.getUserInfo();
  }

  componentDidUpdate() {
    const { match: { params: { login } } } = this.props;
    const { user } = this.state;
    if (user.login !== login) {
      // The URL and user data in state are different, refetch
      this.getUserInfo();
    }
  }

  getUserInfo() {
    const { match: { params: { login } } } = this.props;
    api.getProfileInfo(login)
      .then(user => this.setState({ user }));
  }

  render() {
    const { user } = this.state;
    return (
      <Grid container>
        <Grid item xs={12}>
          {user.login ? (
            <div>
              <UserBanner
                name={user.name}
                imageUrl={user.avatar_url}
              />
              <UserProfile
                email={user.email}
                location={user.location}
                joined={user.created_at}
              />
              <UserRepos />
            </div>
          )
            : <CircularProgress />}
        </Grid>
      </Grid>
    );
  }
}

UserDetails.propTypes = {
  match: PropTypes.instanceOf(Object).isRequired,
};

export default UserDetails;
