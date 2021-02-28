import { HttpStatusCode, ValueError } from "connect-the-dots-common";

import { AuthenticationError } from "../authentication";

AuthenticationError.prototype.statusCode = HttpStatusCode.UNAUTHORIZED;
ValueError.prototype.statusCode = HttpStatusCode.BAD_REQUEST;

const getHttpError = (error) => {
  let statusCode = error.statusCode;
  let type = error.constructor.name;
  let cause = error.cause
    ? { type: error.cause.constructor.name, message: error.cause.message }
    : undefined;

  let message = error.message;

  if (!statusCode) {
    statusCode = 500;
    type = "InternalServerError";
    message = "An unexpected error has occurred, please try it again later";
  }

  return [statusCode, { type, cause, message }];
};

export default getHttpError;
