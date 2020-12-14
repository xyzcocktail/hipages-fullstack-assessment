import { makeStyles } from '@material-ui/core/styles';
import InvitedItem from './InvitedItem';
import AcceptedItem from './AcceptedItem';
import { useLeadContextProvider } from '../LeadContext';
import { LoadingLead } from './Skeleton';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
}));

const LeadList = (props) => {
  const { loading } = useLeadContextProvider();
  const classes = useStyles();

  const cnt = props.items.length;

  console.info(`** LeadList ${cnt} **`);
  console.info(props);

  return (
    <div className={classes.root}>
      {loading ? (
        cnt > 0 && props.items ? (
          props.items.map(lead => {
            return (
              lead.status === 'accepted'
                ? <AcceptedItem key={lead.id} data={lead} />
                : <InvitedItem key={lead.id} data={lead} />
            )
          })
        ) : (
          <div>Empty</div>
        )
      ) : (
        <LoadingLead />
      )}
    </div>
  );
};

export default LeadList;
