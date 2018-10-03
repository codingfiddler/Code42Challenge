import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';

class Sidebar extends React.Component {
  handleClick(login) {
    const { history: { push } } = this.props;
    push(`/users/${login}`);
  }

  render() {
    const { members, match: { params } } = this.props;
    return (
      <List component="nav">
        {members.length > 0
         && members.map(member => (
           <ListItem
             button
             key={member.id}
             divider
             onClick={() => this.handleClick(member.login)}
             selected={member.login === params.login}
           >
             <ListItemIcon>
               <Avatar alt={member.name} src={member.avatar_url} />
             </ListItemIcon>
             <ListItemText inset primary={member.name} />
           </ListItem>))}
      </List>);
  }
}

Sidebar.propTypes = {
  members: PropTypes.instanceOf(Array).isRequired,
  history: PropTypes.instanceOf(Object).isRequired,
};

export default withRouter(Sidebar);
