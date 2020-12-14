import { useContext } from "react";
import { MainContext } from "./context/MainContext";
import PersistentTopBar from "./common/components/PersistentTopBar";
import LeadTabPanel from './leads/components/LeadTabPanel';
import { Route } from "wouter";

function App() {
  return (
    <div style={{ height: "100vh" }}>
      <PersistentTopBar />
      <Route path="/">
        <LeadTabPanel />
      </Route>
    </div>
  );
}

export default App;
