import InvalidTwitterUsernameError from "./InvalidTwitterUsernameError";

const TWITTER_USERNAME_PATTERN = /^[a-zA-Z0-9_]{4,15}$/;

const validateTwitterUsername = value => {
  if (value.length < 4) {
    throw new InvalidTwitterUsernameError(
      "Twitter username must be longer than 4 characters"
    );
  }

  if (value.length > 15) {
    throw new InvalidTwitterUsernameError(
      "Twitter username must be shorter than 15 characters"
    );
  }

  if(!TWITTER_USERNAME_PATTERN.test(value)) {
    throw new InvalidTwitterUsernameError(
      "Twitter username must only contain alphanumeric characters and " +
      "underscores"
    );
  }
};

export default validateTwitterUsername;
