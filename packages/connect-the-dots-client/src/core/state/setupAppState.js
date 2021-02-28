import createAppState from "./createAppState";
import loadAppState from "./loadAppState";
import validateAppState from "./validateAppState";

const setupAppState = storageKey => {
  let state;

  try {
    state = loadAppState(storageKey);
    validateAppState(state);
  } catch (error) {
    console.error(error);

    state = createAppState();
  }

  return state;
};

export default setupAppState;
