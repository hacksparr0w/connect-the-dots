import { isString, validateClientId } from "connect-the-dots-common";

import AuthenticationError from "./AuthenticationError";

const authenticate = (req, _, next) => {
  const { clientId } = req.cookies;

  try {
    if (!isString(clientId)) {
      throw new TypeError("Client ID is not present or is not a string");
    }

    validateClientId(clientId);
  } catch (error) {
    throw new AuthenticationError(error, "Could not validate your client ID");
  }

  req.clientId = clientId;
  next();
};

export default authenticate;
