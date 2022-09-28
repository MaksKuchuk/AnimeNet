import { RootState } from "../store";

export const selectSignInVisible = (state: RootState) =>
  state.modals.signInVisible;

export const selectRegisterVisible = (state: RootState) =>
  state.modals.registerVisible;

export const selectRegisterStage = (state: RootState) =>
  state.modals.registerStage;
