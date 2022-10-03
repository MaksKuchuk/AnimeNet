import { RootState } from "../store";

export const selectIsAutn = (state: RootState) => state.profile.isAuth;

export const selectIsPhoto = (state: RootState) => state.profile.isPhoto;

export const selectName = (state: RootState) => state.profile.name;

export const selectDescription = (state: RootState) =>
  state.profile.description;

export const selectPhotoColor = (state: RootState) => state.profile.photoColor;
