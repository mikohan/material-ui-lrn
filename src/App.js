import React from 'react';
import { Route } from 'react-router-dom';
import HomePage from './components/HomePage.jsx';

import { Grid } from '@material-ui/core';

import './App.css';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Grid container direction="column">
        <Grid item>
          <Navbar />
        </Grid>

        <Grid item container>
          <Grid item xs={0} sm={2} />
          <Grid item xs={12} sm={8}>
            <Route exact path="/" component={HomePage} />
          </Grid>

          <Grid item xs={0} sm={2} />
        </Grid>
      </Grid>
    </>
  );
}

export default App;
