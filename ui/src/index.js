import { render } from "react-dom";
import { LeadProvider } from './leads/LeadContext';
import App from "./App";
import "./styles.css";

render(
  <LeadProvider>
    <App />
  </LeadProvider>,
  document.getElementById("root")
);
