import { httpGet } from "connect-the-dots-common"

const getUser = (client, username) => httpGet(client, `/user/${username}`);

export default getUser;
