import React from 'react';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Route } from 'react-router-dom';

import Header from './Header';
import UserDetailsLayout from './UserDetailsLayout';
import './App.css';

import api from './api';

import Sidebar from './Sidebar';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { members: [] };
  }

  componentDidMount() {
    // Fetch list of users from code42
    api.getMembersWithProfile()
      .then(
        members => this.setState({ members }),
        error => alert(error),
      );
  }

  render() {
    const { members } = this.state;
    return (
      <div className="App">
        <Grid container>
          <Grid item xs={12}>
            <Header />
          </Grid>
        </Grid>
        {members.length > 0
          ? (
            <Grid container>
              <Grid item xs={3}>
                <Route path="/users/:login" render={() => <Sidebar members={members} />} />
              </Grid>
              <Grid item xs={9}>
                <UserDetailsLayout />
              </Grid>
            </Grid>
          )
          : (
            <div className="loader">
              <CircularProgress />
            </div>
          )
        }
      </div>
    );
  }
}

export default App;
