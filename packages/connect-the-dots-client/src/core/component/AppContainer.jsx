import { CssBaseline, ThemeProvider } from "@material-ui/core";
import { unpackError, validateTwitterUsername, ValueError } from "connect-the-dots-common";
import React, { useEffect, useState } from "react";

import { getUser, postAuthentication } from "../../api";
import { createLauncherAppState, saveAppState, setupAppState } from "../state";
import App from "./App";

const AppContainer = ({ httpClient, theme, stateStorageKey }) => {
  const [state, setState] = useState(() => setupAppState(stateStorageKey));

  const authenticate = async () => {
    const { clientId } = state;

    try {
      await postAuthentication(httpClient, clientId);
    } catch (error) {
      console.error(error);
    }

    setState(createLauncherAppState);
  }

  const actions = {
    launcher: {
      onErrorAlertClose: () => (
        setState(value => ({ ...value, errorAlertOpen: false }))
      ),
      onUsernameChange: username => (
        setState(value => ({ ...value, username }))
      ),
      onLaunch: async () => {
        const { username } = state;

        try {
          validateTwitterUsername(username);
        } catch (error) {
          let message;

          if (error instanceof ValueError) {
            message = unpackError(error).message;
          } else {
            console.error(error);

            message = (
              "An unexpected error has occurred, please try it again later"
            );
          }

          setState(value => ({
            ...value,
            errorMessage: message,
            errorAlertOpen: true
          }));

          return;
        }

        setState(value => ({ ...value, processing: true }));

        try {
          await getUser(httpClient,  username);

          setState(value => ({ ...value, processing: false }));
        } catch (error) {
          console.error(error);

          setState(value => ({ ...value, processing: false }));
        }
      }
    }
  };

  useEffect(() => {
    authenticate();
  }, []);

  useEffect(() => {
    saveAppState(stateStorageKey, state);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App state={state} actions={actions} />
    </ThemeProvider>
  );
};

export default AppContainer;
