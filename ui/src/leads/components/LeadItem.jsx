import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { orange } from '@material-ui/core/colors';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { useLeadContextProvider } from "../LeadContext";
import { LeadPriceText } from './LeadPriceText';
import grey from "@material-ui/core/colors/grey";
import RoomOutlinedIcon from "@material-ui/icons/RoomOutlined";
import WorkOutlineIcon from "@material-ui/icons/WorkOutline";
import PhoneIcon from '@material-ui/icons/Phone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import moment from 'moment';

const useStyles = makeStyles((theme) => ({
  card: {
    width: '100%',
    backgroundColor: 'white',
    marginBottom: '16px',
    borderRadius: '2px',
    boxShadow: '0 1px 4px rgba(0,0,0,0.2)',
    padding: 0
  },
  cardItem: {
    borderColor: '#eee',
    padding: '8px 16px',
  },
  cardHeader: {
    padding : '0 16px;'
  },
  cardFooter: {
    padding : '16px 24px'
  },
  avatar: {
    backgroundColor: orange[500],
  },
  contactName: {
    lineHeight: '1.8em'
  },
  small: {
    color: '#9d9d9d',
    fontSize: '0.8em'
  },
  summaryItem  : {
    lineHeight: '1.4em',
    display: 'flex',
    '& svg' : {
      color : grey[700],
      fontSize : '1.4em',
      display: 'inline-block',
      marginRight : '8px'
    },
    '& p' : {
      color : grey[500],
      marginRight : '16px'
    }
  },
  contactItem  : {
    lineHeight: '1.4em',
    display: 'flex',
    '& svg' : {
      color : orange[700],
      fontSize : '1.4em',
      display: 'inline-block',
      marginRight : '8px'
    },
    '& p' : {
      color : orange[500],
      marginRight : '18px'
    }
  },
  description: {
    color: '#9d9d9d',
    padding : '8px 24px'
  },
  buttonPrimary: {
    backgroundColor: orange[600],
    boxShadow: '0 2px 0 ' + orange[900],
    borderRadius: '2px',
    color: 'white',
    padding: '8px 24px',
    marginRight: '8px',
    fontWeight: '500',
    '&:hover': {
      backgroundColor: orange[700],
      boxShadow: '0 2px 0 ' + orange[900],
    },
  },
  buttonDefault: {
    backgroundColor: grey[200],
    boxShadow: '0 2px 0 ' + grey[400],
    borderRadius: '2px',
    padding: '8px 24px',
    marginRight: '8px',
    fontWeight: '500',
    '&:hover': {
      backgroundColor: grey[300],
      boxShadow: '0 2px 0 ' + grey[600],
    },
  },
}));

const LeadItem = (props) => {
  const { acceptHandler, declineHandler, } = useLeadContextProvider();
  const classes = useStyles();
  const item = props.data;

  const dispDateTime = (dt) => {
    if (dt) {
      return moment(dt).format('MMMM Do YYYY @ h:mm a');
    }
  }

  return (
    <List className={classes.card}>
      <ListItem className={classes.cardItem} component='div'>
        <ListItem className={classes.cardHeader}>
          <ListItemAvatar>
            <Avatar aria-label={item.contactName} className={classes.avatar}>
              {item.contactName[0]}
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            disableTypography
            primary={<Typography type="body1" className={classes.contactName}>{item.contactName}</Typography>}
            secondary={<Typography type="body2" className={classes.small}>{dispDateTime(item.createdAt)}</Typography>}
          />
        </ListItem>
      </ListItem>
      <Divider component="li"/>

      <ListItem className={classes.description} component='div'>
        <Grid className={classes.summaryItem}>
          <RoomOutlinedIcon />
          <Typography>{item.suburb.name} {item.suburb.postcode}</Typography>
        </Grid>
        <Grid className={classes.summaryItem}>
          <WorkOutlineIcon />
          <Typography>
            {item.category.parentName ? item.category.parentName + ' > ' : ''} {item.category.name}
          </Typography>
          <Typography>
            Job ID: {item.id}
          </Typography>
          {item.status === 'accepted' ? (
            <Typography component='div'>
              <LeadPriceText price={item.price} />
            </Typography>
          ) : ('')}
        </Grid>
      </ListItem>
      <Divider component="li"/>

      {item.status === 'accepted' ? (
        <ListItem className={classes.description} component='div'>
          <Grid className={classes.contactItem}>
            <PhoneIcon />
            <Typography color='primary'>{item.contactPhone}</Typography>
          </Grid>
          <Grid className={classes.contactItem}>
            <MailOutlineIcon />
            <Typography color='primary'>{item.contactEmail}</Typography>
          </Grid>
        </ListItem>
      ) : ('')}

      <ListItem className={classes.description} component='div'>
        {item.description}
      </ListItem>
      <Divider component="li"/>

      {item.status === 'new' ? (
        <ListItem className={classes.cardFooter} component='div'>
          <Button
            variant="contained"
            className={classes.buttonPrimary}
            onClick={() => acceptHandler(item.id)}
          >
            Accept
          </Button>
          <Button
            variant="contained"
            className={classes.buttonDefault}
            onClick={() => declineHandler(item.id)}
          >
            Decline
          </Button>
          <LeadPriceText price={item.price} />
        </ListItem>
      ) : ('')}
    </List>
  );
}

export default LeadItem;
