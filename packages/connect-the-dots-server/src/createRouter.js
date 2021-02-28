import { Router } from "express";

import { authenticate } from "./authentication";
import {
  createAuthenticationController,
  createUserController
} from "./controller";

const createRouter = ({ httpClient, sessionCookie }) => Router()
  .post("/authentication", createAuthenticationController({ sessionCookie }))
  .get("/user/:username", authenticate, createUserController({ httpClient }));

export default createRouter;
