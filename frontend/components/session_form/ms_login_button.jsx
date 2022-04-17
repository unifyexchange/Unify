import React from "react"
import {PublicClientApplication, LogLevel} from '@azure/msal-browser';
import { useMsal } from "@azure/msal-react";
import { loginRequest } from "../../../src/config";
import { useNavigate } from "react-router-dom";

export const MsSignInButton = () => {
    const { instance } = useMsal();
    
    const handleLogin = () => {
        instance.loginPopup(loginRequest).catch(e => {
            console.log(e);
        });
    }
    return (
        <button onClick={() => handleLogin(instance)}>Sign in using Popup</button>
    );
}