const unpackError = error => {
  const type = error.constructor.name;
  const cause = error.cause
    ? { type: error.cause.constructor.name, message: error.cause.message }
    : undefined;

  const message = error.message;

  return {
    type,
    cause,
    message
  };
};

export default unpackError;
