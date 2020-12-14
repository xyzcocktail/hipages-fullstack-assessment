import { makeStyles } from '@material-ui/core/styles';
import LeadItem from './LeadItem';
import { useLeadContextProvider } from '../LeadContext';
import { LoadingLead } from './Skeleton';
import EmptyItem from './EmptyItem';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
}));

const LeadList = (props) => {
  const { loading } = useLeadContextProvider();
  const classes = useStyles();
  const cnt = props.items.length;

  return (
    <div className={classes.root}>
      {loading ? (
        cnt > 0 && props.items ? (
          props.items.map(lead => {
            return (
              <LeadItem key={lead.id} data={lead} />
            )
          })
        ) : (
          <EmptyItem />
        )
      ) : (
        <LoadingLead />
      )}
    </div>
  );
};

export default LeadList;
