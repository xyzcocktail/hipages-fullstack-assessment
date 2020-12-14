import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useLeadContextProvider } from '../LeadContext';
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import Tab from '@material-ui/core/Tab';
import TabList from '@material-ui/lab/TabList';
import TabPanel from '@material-ui/lab/TabPanel';
import TabContext from '@material-ui/lab/TabContext';
import LeadList from './LeadList';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

const LeadTabPanel = () => {
  const classes = useStyles();
  const { loading, newLeads, acceptedLeads } = useLeadContextProvider();
  const [currTabIdx, setCurrTabIdx] = useState('1');

  const changeHandler = (event, newValue) => {
    setCurrTabIdx(newValue);
  };

  return (
    <div className={classes.root}>
      <Grid container direction="row" justify="center" alignItems="flex-start">
        <Grid item xs={8}>
          <TabContext value={currTabIdx}>
            <AppBar position="static">
              <TabList onChange={changeHandler} aria-label="Lead management tab">
                <Tab label="Invited" value="1"/>
                <Tab label="Accepted" value="2"/>
              </TabList>
            </AppBar>
            <TabPanel value="1">
              <LeadList items={newLeads} loading={loading} />
            </TabPanel>
            <TabPanel value="2">
              <LeadList items={acceptedLeads} loading={loading} />
            </TabPanel>
          </TabContext>
        </Grid>
      </Grid>
    </div>
  );
}

export default LeadTabPanel;
