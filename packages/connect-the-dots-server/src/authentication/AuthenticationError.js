class AuthenticationError extends Error {
  constructor(cause, message) {
    super(message);

    this.cause = cause;
  }
}

export default AuthenticationError;
