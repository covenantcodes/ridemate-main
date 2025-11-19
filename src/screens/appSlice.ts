import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ISuccessModalValues} from "types/appTypes";

interface appState {
  bvndleShare: {
    bvndleSharedToday: [] | string[];
    todayDate: string | null;
    isGiftedCoinForToday: boolean;
  };
  yellow: boolean;
  appLoader: boolean;
  bioMetricModal: boolean;
  useBiometric: string | null | undefined;
  logoutLoader: boolean;
  appsFlyerReferralTag: string | null;
  isUsd: boolean | null;
  transactionModal: ISuccessModalValues | null;
  appCurrency: boolean;
}

const initialState: appState = {
  appLoader: false,
  bioMetricModal: false,
  useBiometric: null,
  logoutLoader: false,
  bvndleShare: {
    bvndleSharedToday: [],
    todayDate: null,
    isGiftedCoinForToday: false,
  },
  yellow: false,
  appsFlyerReferralTag: null,
  isUsd: false,
  transactionModal: null,
  appCurrency: false,
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    toggleAppLoader: (state: appState, {payload}: PayloadAction<boolean>) => {
      state.appLoader = payload;
    },
    toggleBiometricModal: (
      state: appState,
      {payload}: PayloadAction<boolean>,
    ) => {
      state.bioMetricModal = payload;
    },
    toggleTransactionModal: (
      state: appState,
      {payload}: PayloadAction<ISuccessModalValues>,
    ) => {
      state.transactionModal = payload;
    },
    toggleUseBiometric(
      state: appState,
      {payload}: PayloadAction<string | null>,
    ) {
      state.useBiometric = payload;
    },
    toggleLogoutLoader(state: appState, {payload}: PayloadAction<boolean>) {
      state.logoutLoader = payload;
    },
    toggleIsUsd(state: appState, {payload}: PayloadAction<boolean>) {
      state.isUsd = payload;
    },
    addSharedBvndle(state: appState, {payload}: PayloadAction<string>) {
      state.bvndleShare.bvndleSharedToday = [
        ...state.bvndleShare.bvndleSharedToday,
        payload,
      ];
    },
    resetSharedBvndle(state: appState) {
      state.bvndleShare.bvndleSharedToday = [];
    },
    toggleAddBvndleDate(state: appState, {payload}: PayloadAction<string>) {
      state.bvndleShare.todayDate = payload;
    },
    toggleAppCurrency(state: appState, {payload}: PayloadAction<boolean>) {
      state.appCurrency = payload;
    },
    resetAddBvndleDate(state: appState) {
      state.bvndleShare.todayDate = null;
    },
    toggleIsGiftedCoinForToday(
      state: appState,
      {payload}: PayloadAction<boolean>,
    ) {
      state.bvndleShare.isGiftedCoinForToday = payload;
    },
    toggleAppsFlyerReferralTag(
      state: appState,
      {payload}: PayloadAction<string | null>,
    ) {
      state.appsFlyerReferralTag = payload;
    },
  },
});

export const {
  toggleAppLoader,
  toggleBiometricModal,
  toggleUseBiometric,
  toggleLogoutLoader,
  addSharedBvndle,
  toggleAddBvndleDate,
  resetSharedBvndle,
  resetAddBvndleDate,
  toggleIsGiftedCoinForToday,
  toggleAppsFlyerReferralTag,
  toggleIsUsd,
  toggleTransactionModal,
  toggleAppCurrency,
} = appSlice.actions;

export default appSlice.reducer;
