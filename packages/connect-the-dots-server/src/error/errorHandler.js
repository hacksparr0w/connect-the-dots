import { HttpStatusCode } from "connect-the-dots-common";
import getHttpError from "./getHttpError";

const errorHandler = (error, req, res, next) => {
  const [statusCode, httpError] = getHttpError(error);

  if (statusCode === HttpStatusCode.INTERNAL_SERVER_ERROR) {
    console.error(error);
  }

  res
    .status(statusCode)
    .send(httpError);
};

export default errorHandler;
