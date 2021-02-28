import { generateClientId } from "connect-the-dots-common";
import AppStateType from "./AppStateType";

const createLoaderAppState = ({ clientId = generateClientId() } = {}) => ({
  type: AppStateType.LOADER,
  clientId
});

export default createLoaderAppState;
