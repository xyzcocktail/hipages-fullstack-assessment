import { createContext, useContext, useState, useEffect } from "react";
import API from '../utils/Api';
import * as R from 'ramda'

export const LeadContext = createContext();

export const LeadProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [newLeads, setNewLeads] = useState([]);
  const [acceptedLeads, setAcceptedLeads] = useState([]);

  const setInitLeads = (allLeads) => {
    if (allLeads && allLeads.length > 0) {
      setNewLeads(allLeads.filter((lead) => lead.status === 'new'));
      setAcceptedLeads(allLeads.filter((lead) => lead.status === 'accepted'));
    }
  }

  const resetDataHandler = () => {
    console.info(`***** [resetDataHandler] *****`);
    API().get(`api/jobs/resetdata`).then(resp => {
      setInitLeads(resp.data.data);
    }).catch(err => {
      console.info(err);
    });
  }

  const getLeads = () => {
    API().get('api/jobs').then(resp => {
      console.info(resp.data);
      setInitLeads(resp.data.data);
      setLoading(true);
    }).catch(err => {
      console.info(err);
    });
  }

  const acceptHandler = (jobId) => {
    console.info(`***** [acceptHandler] : ${jobId} *****`);
    API().put(`api/jobs/${jobId}`, { status: 'accepted' }).then(resp => {
      setNewLeads(newLeads.filter((lead) => lead.id !== jobId));
      const newList = R.clone(acceptedLeads);
      newList.unshift(resp.data.data)
      setAcceptedLeads(newList);
    }).catch(err => {
      console.info(err);
    });
  }

  const declineHandler = (jobId) => {
    console.info(`***** [declineHandler] : ${jobId} *****`);
    API().put(`api/jobs/${jobId}`, { status: 'declined' }).then(resp => {
      setNewLeads(newLeads.filter((lead) => lead.id !== jobId));
    }).catch(err => {
      console.info(err);
    });
  }

  useEffect(() => {
    console.info('***** [LeadProvider] useEffect *****');
    getLeads();
  },[]);

  return (
    <LeadContext.Provider
      value={{
        loading,
        newLeads,
        acceptedLeads,
        acceptHandler,
        declineHandler,
        resetDataHandler,
        setInitLeads,
      }}
    >
      {children}
    </LeadContext.Provider>
  );
};

export const useLeadContextProvider = () => {
  return useContext(LeadContext);
}
