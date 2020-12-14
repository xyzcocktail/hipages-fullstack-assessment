// import { useContext, useState } from 'react';
// import { Snackbar } from '@material-ui/core';
// import { Alert } from '@material-ui/lab';
import InvitedItem from './InvitedItem';
import AcceptedItem from './AcceptedItem';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
}));

const LeadList = (props) => {
  console.info(`***** LeadList *****`);
  console.info(props);
  const classes = useStyles();

  const filtered = (props.type && props.type == 'accepted')
    ? props.items.filter(item => { return item.status == 'accepted'})
    : props.items.filter(item => { return item.status != 'accepted'});

  return (
    <div className={classes.root}>
      {filtered.map(lead => {
        return (
          lead.status == 'accepted'
            ? <AcceptedItem key={lead.id} data={lead} />
            : <InvitedItem key={lead.id} data={lead} />
        );
      })}
    </div>
  );
};

export default LeadList;
