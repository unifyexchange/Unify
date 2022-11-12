import React from "react"
import {PublicClientApplication, LogLevel} from '@azure/msal-browser';
import { useMsal } from "@azure/msal-react";
import { loginRequest, graphConfig } from "../../../src/config";
import { useNavigate } from "react-router-dom";
import { useIsAuthenticated } from "@azure/msal-react";

export const MsSignOutButton = () => {
    const { instance, accounts } = useMsal();
    const isAuthenticated = useIsAuthenticated();
    const handleLogout = () => {
        instance.logoutPopup({
            postLogoutRedirectUri: "/",
            mainWindowRedirectUri: "/"
        });
    }

    return (
        <>
            <button className="account-button" onClick={() => handleLogout(instance)}>Sign out</button>
        </>
    );
}