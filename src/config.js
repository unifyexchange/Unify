export const msalConfig = {  
    auth: {
        authority: 'https://login.microsoftonline.com/496b6d7d-089e-4318-89ef-d9fdf760aafd',
        clientId: '2bcbcced-47ca-4828-91b9-7f63b34f7101',
        redirectUri: 'https://localhost:3000/#/home',
    },
    cache: {
        cacheLocation: "sessionStorage",
        storeAuthStateInCookie: false
    }
};

export const loginRequest = {
    scope: ["User.Read"]
};