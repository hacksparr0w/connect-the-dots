import { httpGet } from "../../../connect-the-dots-common";

const getUser = (client, username) => (
  httpGet(client, `/users/by/username/${username}`)
);

export default getUser;
