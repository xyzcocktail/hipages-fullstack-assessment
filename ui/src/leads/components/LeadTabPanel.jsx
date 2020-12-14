import React, { useState, useEffect } from 'react';
import API from '../../utils/Api';
import { makeStyles } from '@material-ui/core/styles';
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
  const [loading, setLoading] = useState(false);
  const [allLeads, setAllLeads] = useState([]);
  const [currTabIdx, setCurrTabIdx] = useState('1');

  useEffect(() => {
    console.info('***** useEffect *****');
    API().get('api/jobs')
      .then(resp => {
        console.info(resp.data);
        setAllLeads(resp.data.data);
        setLoading(true);
      });
  },[]);

  const handleChange = (event, newValue) => {
    setCurrTabIdx(newValue);
  };

  return (
    <div className={classes.root}>
      <Grid container direction="row" justify="center" alignItems="flex-start">
        <Grid item xs={8}>
          <TabContext value={currTabIdx}>
            <AppBar position="static">
              <TabList onChange={handleChange} aria-label="Lead management tab">
                <Tab label="Invited" value="1"/>
                <Tab label="Accepted" value="2"/>
              </TabList>
            </AppBar>
            <TabPanel value="1">
              <LeadList type='invited' items={allLeads} loading={loading} />
            </TabPanel>
            <TabPanel value="2">
              <LeadList type='accepted' items={allLeads} loading={loading} />
            </TabPanel>
          </TabContext>
        </Grid>
      </Grid>
    </div>
  );
}

export default LeadTabPanel;
