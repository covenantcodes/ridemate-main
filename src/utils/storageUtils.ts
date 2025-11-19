import {appStorage} from "store/rootReducer";

const FIRST_LAUNCH_KEY = "hasLaunched";

export const storageUtils = {
  isFirstLaunch: (): boolean => {
    const hasLaunched = appStorage.getBoolean(FIRST_LAUNCH_KEY);
    return !hasLaunched;
  },

  setHasLaunched: (): void => {
    appStorage.set(FIRST_LAUNCH_KEY, true);
  },

  resetFirstLaunch: (): void => {
    appStorage.remove(FIRST_LAUNCH_KEY);
  },
};
