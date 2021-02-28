import AppStateType from "./AppStateType";

const createLauncherAppState = (
  {
    clientId,
    processing = false,
    username = "",
    errorMessage = undefined,
    errorAlertOpen = false
  } = {}
) => ({
  type: AppStateType.LAUNCHER,
  clientId,
  processing,
  username,
  errorMessage,
  errorAlertOpen
});

export default createLauncherAppState;
