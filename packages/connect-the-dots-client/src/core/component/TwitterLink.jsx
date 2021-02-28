import { Link } from "@material-ui/core";
import { isString } from "connect-the-dots-common";
import React from "react";

const TWITTER_URL = "https://twitter.com";

const TwitterLink = ({ children }) => {
  if (!isString(children)) {
    throw new TypeError("TwitterLink component expects a string child!");
  }

  const href = `${TWITTER_URL}/${children}`;

  return (
    <Link href={href}>
      @{children}
    </Link>
  )
};

export default TwitterLink;
