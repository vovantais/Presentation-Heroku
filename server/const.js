const CREDENTIAL_TO_SALESFORCE_CONNECT = {
  clientId: "3MVG9SOw8KERNN0921aCIlmfdlncQk9XioKrjnaEZlC7F70fgB4i9xwiRO21wRtlA1npDTJEFFmbrormfjEW8",
  clientSecret: "387082FC56DE240A02262BB89F56FA9E5A23EB36C18727A5A8D06511074AE52B",
  redirectUri: "http://localhost:8080/oauth/_callback", //http://localhost:8080/oauth/_callback'
  apiVersion: "v57.0", // optional, defaults to current salesforce API version
  environment: "production", // optional, salesforce 'sandbox' or 'production', production default
  mode: "single", // optional, 'single' or 'multi' user mode, multi default
  autoRefresh: true,
  timeout: 120000,
};

const USER_CREDENTIAL = {
  username: "gedeikov@gmail.com",
  password: "mainAdmin97!!7Q1zBG5w9OfuQqEy1Q4Xw58yU",
};

const QUERY_ACCOUNTS = 'SELECT Id, Name, AccountNumber, Industry FROM Account LIMIT 10';

export {CREDENTIAL_TO_SALESFORCE_CONNECT, USER_CREDENTIAL, QUERY_ACCOUNTS};