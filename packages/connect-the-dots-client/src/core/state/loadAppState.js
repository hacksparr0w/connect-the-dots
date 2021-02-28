import createLoaderAppState from "./createLoaderAppState";

const loadAppState = storageKey => (
  createLoaderAppState(JSON.parse(window.localStorage.getItem(storageKey)))
);

export default loadAppState;
