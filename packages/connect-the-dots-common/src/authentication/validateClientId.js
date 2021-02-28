import { version as getUuidVersion } from "uuid";

import InvalidClientIdError from "./InvalidClientIdError";

const validateClientId = id => {
  let version;

  try {
    version = getUuidVersion(id)
  } catch {
    throw new InvalidClientIdError("Invalid UUID format");
  }

  if (version !== 4) {
    throw new InvalidClientIdError("Invalid UUID version");
  }
};

export default validateClientId;
