import { validateClientId } from "connect-the-dots-common";

const validateAppState = ({ clientId }) => {
  validateClientId(clientId);
};

export default validateAppState;
