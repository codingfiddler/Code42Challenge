import React from 'react';
import PropTypes from 'prop-types';

const UserBanner = props => (
  <div>
    <img src={props.imageUrl} alt={`Github avatar for ${props.name}`} />
    <div>{props.name}</div>
  </div>
);

UserBanner.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default UserBanner;
