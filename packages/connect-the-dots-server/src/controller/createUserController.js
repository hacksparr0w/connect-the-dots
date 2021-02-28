import {
  HttpStatusCode,
  ValueError,

  isString,
  validateTwitterUsername
} from "connect-the-dots-common";

import { getUser } from "../twitter";
import { asyncly } from "../utility"

const createUserController = ({ httpClient }) => (
  asyncly(async ({ params: { username } }, res) => {
    if (!isString(username)) {
      throw new ValueError("Twitter username must be a string");
    }

    validateTwitterUsername(username);

    const { data } = await getUser(httpClient, username);

    console.log(data);

    res
      .status(HttpStatusCode.NO_CONTENT)
      .end();
  })
);

export default createUserController;
