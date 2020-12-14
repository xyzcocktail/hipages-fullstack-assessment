import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import grey from "@material-ui/core/colors/grey";

const useStyles = makeStyles((theme) => ({
  priceContainer : {
    display : 'flex'
  },
  price : {
    fontWeight : 600,
    color: grey[800],
    marginRight: '8px',
    marginLeft: '24px'
  },
  priceDescription : {
    color: grey[600]
  },
}));

export const LeadPriceText = (props) => {
  const classes = useStyles();
  const price = '$' + parseFloat(props.price).toFixed(2);

  return (
    <Grid className={classes.priceContainer}>
      <Typography className={classes.price}>{price}</Typography>
      <Typography className={classes.priceDescription}>Lead Invitation</Typography>
    </Grid>
  );
}
