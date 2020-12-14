import { Route } from "wouter";
import { LeadProvider } from "./leads/LeadContext";
import PersistentTopBar from "./common/components/PersistentTopBar";
import LeadTabPanel from './leads/components/LeadTabPanel';

function App() {
  return (
    <div style={{ height: "100vh" }}>
      <LeadProvider>
        <PersistentTopBar />
        <Route path="/">
          <LeadTabPanel />
        </Route>
      </LeadProvider>
    </div>
  );
}

export default App;
