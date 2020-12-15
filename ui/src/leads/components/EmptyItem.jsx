import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';

const useStyles = makeStyles((theme) => ({
  card: {
    width: '100%',
    height: '60px',
    backgroundColor: 'white',
    marginBottom: '16px',
    borderRadius: '2px',
    boxShadow: '0 1px 4px rgba(0,0,0,0.2)',
    padding: 20,
    color: '#9d9d9d',
  },
}));

const EmptyItem = (props) => {
  const classes = useStyles();
  const text = props.label || 'EMPTY';

  return (
    <List className={classes.card}>
      <Grid container direction="row" justify="center" alignItems="flex-start">
        {text}
      </Grid>
    </List>
  );
}

export default EmptyItem;
