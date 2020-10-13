import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Route, Switch } from 'react-router-dom';
import AboutPage from './AboutPage';
import ContactPage from './ContactPage';
import ImageComponent from './ImageComponent';

const useStyles = makeStyles((theme) => ({
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

function Content(props) {
  const classes = useStyles();
  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Switch>
        <Route
          exact
          path="/about"
          component={() => (
            <AboutPage title={`This is a prop fro about page`} />
          )}
        />
        <Route
          exact
          path="/contact"
          component={() => <ImageComponent image={`some stuff`} />}
        />
        <Route
          exact
          path="/blog/:id"
          component={(routeProps) => (
            <Typography variant="h2">
              Route props - {routeProps.match.params.id}
            </Typography>
          )}
        />
      </Switch>
    </main>
  );
}

export default Content;
