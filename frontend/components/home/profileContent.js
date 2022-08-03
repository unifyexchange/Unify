import React, { useState } from "react";
import { AuthenticatedTemplate, UnauthenticatedTemplate, useMsal } from "@azure/msal-react";
// import { callMsGraph } from "./graph";
import Button from "react-bootstrap/Button";
import { loginRequest } from  '../../../src/config';
import { useIsAuthenticated } from "@azure/msal-react";

const ProfileContent = () => {
  const { instance, accounts } = useMsal();
  const [graphData, setGraphData] = useState(null);
  const isAuthenticated = useIsAuthenticated();
  console.log('isAuthenticated:', isAuthenticated);

  function RequestProfileData() {
      instance.acquireTokenSilent({ ...loginRequest, account: accounts[0] }
        ).then((response) => {
          console.log('response');
          // callMsGraph(response.accessToken).then(response => setGraphData(response));
      });
  }

  return (
      <>
        {isAuthenticated && (
          <>
            <h5 className="card-title">Welcome {accounts[0].name}</h5>
            <button onClick={RequestProfileData}>Request Profile Information</button>
          </>
        )}
      </>
  );
};

export default ProfileContent;