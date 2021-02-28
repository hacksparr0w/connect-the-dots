import Axios from "axios";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";

import createRouter from "./createRouter";
import { errorHandler } from "./error";

const {
  http: {
    cors: { origin: httpCorsOrigin },
    server: { port: httpServerPort },
    sessionCookie: sessionCookie
  },
  twitterApi: {
    bearerToken: twitterApiBearerToken
  }
} = process.env.CONFIG;

const httpClient = Axios.create({
  baseURL: "https://api.twitter.com/2",
  headers: {
    Authorization: `Bearer ${twitterApiBearerToken}`
  }
});

const app = express();

app.use(cors({ origin: httpCorsOrigin, credentials: true }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(createRouwter({ httpClient, sessionCookie }));
app.use(errorHandler);

app.listen(httpServerPort, () => {
  console.log(`HTTP server listening on port ${httpServerPort}`);
});
