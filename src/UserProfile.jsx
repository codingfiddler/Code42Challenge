import React from 'react';
import PropTypes from 'prop-types';

const UserProfile = () => (
  <div>
        User Profile
  </div>
);

UserProfile.propTypes = {
  location: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  joined: PropTypes.string.isRequired,
};

export default UserProfile;
