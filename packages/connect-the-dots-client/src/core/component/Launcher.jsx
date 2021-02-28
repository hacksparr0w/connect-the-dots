import React from "react";

import {
  Button,
  Fade,
  InputAdornment,
  TextField,
  Typography
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { FavoriteBorder as FavoriteBorderIcon } from "@material-ui/icons";

import LauncherBackground from "./LauncherBackground";
import LauncherErrorAlert from "./LauncherErrorAlert";
import TwitterLink from "./TwitterLink";

const useStyles = makeStyles(({ spacing }) => ({
  root: {
    height: "100vh",

    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  content: {
    textAlign: "center",

    "& > section:not(:first-child)": {
      marginTop: spacing(3)
    }
  },
  controls: {
    display: "flex",
    justifyContent: "center",

    "& > .MuiTextField-root": {
      width: 320
    },

    "& > :not(:first-child)": {
      marginLeft: spacing(2)
    }
  },
  epilogue: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    "& > svg": {
      marginLeft: 2,
      marginRight: 2
    }
  },
  subtitle: {
    fontWeight: 500
  }
}));

const Launcher = ({
  errorMessage,
  errorAlertOpen,
  processing,
  username,
  onErrorAlertClose,
  onUsernameChange,
  onLaunch
}) => {
  const classes = useStyles();

  const handleUsernameTextFieldChange = ({ target: { value } }) => {
    onUsernameChange(value);
  };

  const handleUsernameTextFieldKeyDown = ({ keyCode }) => {
    if (processing) {
      return;
    }

    if (keyCode === 13) {
      onLaunch();
    }
  };

  const handleLaunchButtonClick = () => {
    onLaunch();
  };

  return (
    <>
      <Fade timeout={1000} in>
        <div className={classes.root}>
        <LauncherBackground />
          <main className={classes.content}>
            <section>
              <Typography variant="h1">
                #ConnectTheDots
              </Typography>
              <Typography className={classes.subtitle} variant="h5">
                Explore your Twitter relationship graph using the&nbsp;
                <TwitterLink>
                  TwitterAPI
                </TwitterLink>
              </Typography>
            </section>
            <section className={classes.controls}>
              <TextField
                value={username}
                variant="outlined"
                placeholder="Enter your Twitter username"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">@</InputAdornment>
                  )
                }}
                onChange={handleUsernameTextFieldChange}
                onKeyDown={handleUsernameTextFieldKeyDown}
              />
              <Button
                color="primary"
                variant="contained"
                disabled={processing}
                onClick={handleLaunchButtonClick}
              >
                Let's go
              </Button>
            </section>
            <section>
              <Typography className={classes.epilogue} color="textSecondary">
                Created with <FavoriteBorderIcon color="inherit" /> by
                &nbsp;
                <TwitterLink>
                  hacksparr0w
                </TwitterLink>
              </Typography>
            </section>
          </main>
        </div>
      </Fade>
      <LauncherErrorAlert
        message={errorMessage}
        open={errorAlertOpen}
        onClose={onErrorAlertClose}
      />
    </>
  );
};

export default Launcher;
