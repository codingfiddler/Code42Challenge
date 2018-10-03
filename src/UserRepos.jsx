import React from 'react';
import PropTypes from 'prop-types';

const UserRepos = () => (
  <div>
        User Repos
  </div>
);

UserRepos.propTypes = {
  repos: PropTypes.instanceOf(Array).isRequired,
};

export default UserRepos;
