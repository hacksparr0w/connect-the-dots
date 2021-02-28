const saveAppState = (storageKey, { clientId }) => {
  const state = { clientId };

  window.localStorage.setItem(storageKey, JSON.stringify(state));
};

export default saveAppState;
