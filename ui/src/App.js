import { Route } from "wouter";
import PersistentTopBar from "./common/components/PersistentTopBar";
import LeadTabPanel from './leads/components/LeadTabPanel';
import { makeStyles } from "@material-ui/core";
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import orange from '@material-ui/core/colors/orange';

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
    height: '100vh'
  },
}));

const theme = createMuiTheme({
  palette: {
    primary: orange,
  },
});

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <MuiThemeProvider theme={theme}>
        <PersistentTopBar />
        <Route path="/">
          <LeadTabPanel/>
        </Route>
      </MuiThemeProvider>
    </div>
  );
}

export default App;
