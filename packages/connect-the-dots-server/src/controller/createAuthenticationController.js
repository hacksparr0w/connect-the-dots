import { HttpStatusCode, validateClientId } from "connect-the-dots-common";

const createAuthenticationController = ({ sessionCookie }) => (
  ({ body: { clientId } }, res) => {
    validateClientId(clientId);

    res
      .cookie("clientId", clientId, sessionCookie)
      .status(HttpStatusCode.NO_CONTENT)
      .end();
  }
);

export default createAuthenticationController;
