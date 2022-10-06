import { RootState } from "../store";

export const selectIsAutn = (state: RootState) => state.profile.isAuth;

export const selectPhotoURL = (state: RootState) => state.profile.photoURL;

export const selectName = (state: RootState) => state.profile.name;

export const selectDescription = (state: RootState) =>
  state.profile.description;

export const selectDefaultColor = (state: RootState) =>
  state.profile.defaultColor;
