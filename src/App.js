import React from 'react';

import { Grid } from '@material-ui/core';

import './App.css';
import Navbar from './components/Navbar';
import TestMatereal from './components/TestMatereal';

function App() {
  return (
    <Grid container direction="column">
      <Grid item>
        <Navbar />
      </Grid>

      <Grid item container>
        <Grid item xs={0} sm={2} />
        <Grid item xs={12} sm={8}>
          <TestMatereal />
        </Grid>

        <Grid item xs={0} sm={2} />
      </Grid>
    </Grid>
  );
}

export default App;
