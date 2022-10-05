import { Color } from "../globalTypes";

export type IProfileSlice = {
  isAuth: boolean;
  isPhoto: boolean;
  photoColor: Color;
  name: string;
  description: string;
};
