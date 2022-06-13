import React from "react";
import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";
import App from "./App";
import { PublicClientApplication } from "@azure/msal-browser";
import { MsalProvider } from "@azure/msal-react";
import { msalConfig } from "../../src/config";

const msalInstance = new PublicClientApplication(msalConfig);

const Root = ({ store }) => (
  <Provider store={store}>
    <MsalProvider instance={msalInstance}>
      <HashRouter>
        <App />
      </HashRouter>
    </MsalProvider>
  </Provider>
);

export default Root;
