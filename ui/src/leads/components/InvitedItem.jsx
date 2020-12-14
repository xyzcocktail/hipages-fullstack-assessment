import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import FolderIcon from '@material-ui/icons/Folder';
import { red, orange } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    // backgroundColor: theme.palette.background.paper,
    marginBottom: '10px',
  },
  list: {

  },
  avatar: {
    backgroundColor: orange[900],
  },
  inline: {
    display: 'inline',
  },
}));

const InvitedItem = (props) => {
  const classes = useStyles();
  const item = props.data;

  return (
    <List className={classes.root}>
      <ListItem>
        <ListItemAvatar>
          <Avatar aria-label={item.contactName} className={classes.avatar}>
            {item.contactName[0]}
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={item.contactName} secondary={item.createdAt} />
      </ListItem>
      <Divider component="li" />

      <ListItem>
        <Grid container spacing={3}>
          <Grid item xs={4}>
            <ListItemIcon>
              <FolderIcon />
            </ListItemIcon>
            {item.suburb.name} {item.suburb.postcode}
          </Grid>
          <Grid item xs={4}>
            <ListItemIcon>
              <FolderIcon />
            </ListItemIcon>
            {item.category.parentName ? item.category.parentName + ' > ' : ''} {item.category.name}
          </Grid>
          <Grid item xs={4}>
            Job ID: {item.id}
          </Grid>
        </Grid>
      </ListItem>
      <Divider component="li" />

      <ListItem>
        {item.description}
      </ListItem>
      <Divider component="li" />

      <ListItem>
        <Button variant="contained" color="secondary">
          Accept
        </Button>
        <Button variant="contained">
          Decline
        </Button>
        {item.price} Lead Invitation
      </ListItem>
      <Divider component="li" />
    </List>
  );
}

export default InvitedItem;
