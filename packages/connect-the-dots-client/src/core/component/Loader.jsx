import React from "react";

import { CircularProgress, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  root: {
    height: "100vh",

    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }
}));

const Loader = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CircularProgress />
    </div>
  );
};

export default Loader;
