import React from 'react';
import Button from '@material-ui/core/Button';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    background: 'red',
    color: 'blue',
  },
  headStyle: {
    color: 'darkblue',
  },
});

function TestMatereal(props) {
  const classes = useStyles();

  return (
    <div>
      <Typography className={classes.headStyle} color="primary" variant="h2">
        Material UI Application
      </Typography>
      <Button color="primary" variant="outlined">
        Im a button
      </Button>
      <Button color="secondary" variant="contained">
        Im a button
      </Button>
    </div>
  );
}

export default TestMatereal;
