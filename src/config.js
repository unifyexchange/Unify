import { LogLevel } from "@azure/msal-browser";

export const msalConfig = {  
    auth: {
        clientId: '2bcbcced-47ca-4828-91b9-7f63b34f7101',
        authority: 'https://login.microsoftonline.com/496b6d7d-089e-4318-89ef-d9fdf760aafd',
        redirectUri: 'http://localhost:3000/'
    },
    cache: {
        cacheLocation: "sessionStorage",
        storeAuthStateInCookie: false
    },
    system: {	
        loggerOptions: {	
            loggerCallback: (level, message, containsPii) => {	
                if (containsPii) {		
                    return;		
                }		
                switch (level) {		
                    case LogLevel.Error:		
                        console.error(message);		
                        return;		
                    case LogLevel.Info:		
                        console.info(message);		
                        return;		
                    case LogLevel.Verbose:		
                        console.debug(message);		
                        return;		
                    case LogLevel.Warning:		
                        console.warn(message);		
                        return;		
                }	
            }	
        }	
    }
};

export const loginRequest = {
    scope: ["User.Read"]
};