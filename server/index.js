import express from "express";
import nforce from "nforce";
import path from "path";
import {
  CREDENTIAL_TO_SALESFORCE_CONNECT,
  USER_CREDENTIAL,
  QUERY_ACCOUNTS,
} from "./const.js";
import { handleError } from "./helper.js";

const app = express();
const PORT = process.env.PORT ?? 8080;
const currentModuleDir = path.dirname(
  new URL(import.meta.url).pathname.slice(1)
);
const publicPath = path.join(currentModuleDir, "../public");

app.use(express.static(publicPath));

const org = nforce.createConnection({
  clientId: CREDENTIAL_TO_SALESFORCE_CONNECT.clientId,
  clientSecret: CREDENTIAL_TO_SALESFORCE_CONNECT.clientSecret,
  redirectUri: CREDENTIAL_TO_SALESFORCE_CONNECT.redirectUri,
  apiVersion: CREDENTIAL_TO_SALESFORCE_CONNECT.apiVersion,
  environment: CREDENTIAL_TO_SALESFORCE_CONNECT.environment,
  mode: CREDENTIAL_TO_SALESFORCE_CONNECT.mode,
  autoRefresh: CREDENTIAL_TO_SALESFORCE_CONNECT.autoRefresh,
  timeout: CREDENTIAL_TO_SALESFORCE_CONNECT.timeout,
});

let oauth;
const orgAuth = async (res) => {
  await org.authenticate(
    { username: USER_CREDENTIAL.username, password: USER_CREDENTIAL.password },
    async (err, resp) => {
      if (err) {
        handleError(err);
      } else {
        oauth = resp;
        orgQuery(QUERY_ACCOUNTS, oauth, res);
      }
    }
  );
};

const orgQuery = async (query, oauth, res) => {
  await org.query({ query, oauth }, (err, resp) => {
    if (err) {
      handleError(err);
    } else {
      res.json(resp.records);
    }
  });
};

app.get("/accounts", (req, res) => {
  orgAuth(res);
});

app.listen(PORT, () => {
  console.log("Server has been started on port " + PORT + " ...");
});