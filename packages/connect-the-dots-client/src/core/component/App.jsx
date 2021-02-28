import React from "react";

import { AppStateType } from "../state";
import Explorer from "./Explorer";
import Launcher from "./Launcher";
import Loader from "./Loader";

const App = ({ state, actions }) => {
  const { type } = state;

  if (type === AppStateType.EXPLORER) {
    return (
      <Explorer />
    );
  }

  if (type === AppStateType.LAUNCHER) {
    return (
      <Launcher {...state} {...actions.launcher} />
    );
  }

  return (
    <Loader />
  );
};

export default App;
