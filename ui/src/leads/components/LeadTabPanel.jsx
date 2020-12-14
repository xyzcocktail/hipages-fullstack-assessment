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
  tabHeader: {
    width: '100%',
    backgroundColor : '#fff',
    boxShadow : '0 1px 2px rgba(0,0,0,0.1)',
    border : '1px solid #ddd',
    marginBottom : "16px"
  },
  tabContent : {
    padding: 0
  }
}));

const LeadTabPanel = () => {
  const classes = useStyles();
  const { loading, newLeads, acceptedLeads } = useLeadContextProvider();
  const [currTabIdx, setCurrTabIdx] = useState('1');

  const changeHandler = (event, newValue) => {
    setCurrTabIdx(newValue);
  };

  return (
    <Grid container direction="row" justify="center" alignItems="flex-start">
      <Grid item xs={8}>
        <TabContext value={currTabIdx}>
          <AppBar position="static" className={classes.tabHeader}>
            <TabList
              onChange={changeHandler}
              aria-label="Lead management tab"
              variant="fullWidth"
              indicatorColor="primary"
            >
              <Tab label="Invited" value="1"/>
              <Tab label="Accepted" value="2"/>
            </TabList>
          </AppBar>
          <TabPanel value="1" className={classes.tabContent}>
            <LeadList items={newLeads} loading={loading} />
          </TabPanel>
          <TabPanel value="2" className={classes.tabContent}>
            <LeadList items={acceptedLeads} loading={loading} />
          </TabPanel>
        </TabContext>
      </Grid>
    </Grid>
  );
}

export default LeadTabPanel;
