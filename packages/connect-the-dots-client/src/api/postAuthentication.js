import { httpPost } from "connect-the-dots-common";

const postAuthentication = (client, clientId) => (
  httpPost(client, "/authentication", undefined, { clientId })
);

export default postAuthentication;
