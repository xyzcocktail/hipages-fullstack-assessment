import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing.unit,
    paddingLeft: theme.spacing.unit
  },
  input: {
    display: 'none',
  },
  circularProgress: {
    marginLeft: 0,
    marginRight: theme.spacing.unit,
  },
}));

export const CustomButtons = (props) => {
  const classes = useStyles();
  const { onClick, loading, label, color } = props;

  return (
    <Button
      variant="contained"
      className={classes.button}
      color={color ? color : 'default'}
      onClick={onClick}
      disabled={loading}
    >
      {loading && <CircularProgress className={classes.circularProgress} size={20}/>}
      {!Loading && (label ? lab : 'CLICK')}
    </Button>
  );
}
