const CREDENTIAL_TO_SALESFORCE_CONNECT = {
  clientId: "",
  clientSecret: "",
  redirectUri: "http://localhost:8080/oauth/_callback", //http://localhost:8080/oauth/_callback'
  apiVersion: "v57.0", // optional, defaults to current salesforce API version
  environment: "production", // optional, salesforce 'sandbox' or 'production', production default
  mode: "single", // optional, 'single' or 'multi' user mode, multi default
  autoRefresh: true,
  timeout: 120000,
};

const USER_CREDENTIAL = {
  username: "",
  password: "",
};

const QUERY_ACCOUNTS = 'SELECT Id, Name, AccountNumber, Industry FROM Account LIMIT 10';

export {CREDENTIAL_TO_SALESFORCE_CONNECT, USER_CREDENTIAL, QUERY_ACCOUNTS};
