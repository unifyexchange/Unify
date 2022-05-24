import React, { useEffect, useState} from "react"
import {PublicClientApplication, LogLevel} from '@azure/msal-browser';
import { useMsal, useIsAuthenticated } from "@azure/msal-react";
import { callMsGraph } from "../../../src/graph";
import { loginRequest } from "../../../src/config";
import { useNavigate } from "react-router-dom";
//import {update} from "./login_form";

// const ProfileContent = () => {
//     const { instance, accounts } = useMsal();
//     const [graphData, setGraphData] = useState(null);

//     function RequestProfileData() {
//         // Silently acquires an access token which is then attached to a request for MS Graph data
//         instance.acquireTokenSilent({
//             ...loginRequest,
//             account: accounts[0]
//         }).then((response) => {
//             callMsGraph(response.accessToken).then(response => setGraphData(response));
//         });
//     }
// };

// export const MsSignInButton = ({props, onChange}) => {
export const MsSignInButton = (props) => {
    const { instance, accounts } = useMsal();
    const [graphData, setGraphData] = useState(null);
    const isAuthenticated= useIsAuthenticated();
   
    function handleLogin() {
        console.log("in ms login");
        instance.loginPopup(loginRequest).catch(e => {
            console.log(e);
        });
    }

    function submit() {
        //console.log("is Authenticated " + isAuthenticated);
        console.log(graphData.userPrincipalName);
        //props.setState(graphData.userPrincipalName);
        //const user = Object.assign({}, {email_address: graphData.userPrincipalName});
        //console.log("user: " + user);
        props.func(graphData.userPrincipalName);
    }

    useEffect(() => {
        if(isAuthenticated === true){
            console.log("accessing graph data");
            instance.acquireTokenSilent({
                ...loginRequest,
                account: accounts[0]
            }).then((response) => {
                callMsGraph(response.accessToken).then(response => setGraphData(response));
                //setTimeout(function() {submit(response)}, 5000);
            });
            //console.log(typeof(msSignIn));
            
        }
    }, [isAuthenticated])

    useEffect(()=>{
        if(graphData){
            console.log(graphData);
            submit();
        }
        
    }, [graphData])
//     function RequestProfileData() {
//         console.log("aquiring graph data");
//         instance.acquireTokenSilent({
//             ...loginRequest,
//             account: accounts[0]
//         }).then((response) => {
//             callMsGraph(response.accessToken).then(response => setGraphData(response));
//         });
//         console.log(graphData.userPrincipalName);
    // }
    return (
        <button onClick={() => handleLogin(instance)}>Sign in using Popup</button>
    );
}