import React from 'react';
import Button from '@material-ui/core/Button';

function TestMatereal(props) {
  return (
    <div>
      <h1>Im an test material application</h1>
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
