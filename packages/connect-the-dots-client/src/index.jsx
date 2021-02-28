import Axios from "axios";
import React from "react";
import { render } from "react-dom";

import { AppContainer } from "./core";
import theme from "./theme";

const {
  api: {
    url: apiUrl
  },
  state: {
    storageKey: stateStorageKey
  }
} = process.env.CONFIG;

const httpClient = Axios.create({
  baseURL: apiUrl,
  withCredentials: true
});

const target = document.querySelector("#app");

render(
  <AppContainer
    httpClient={httpClient}
    theme={theme}
    stateStorageKey={stateStorageKey}
  />,
  target
);
