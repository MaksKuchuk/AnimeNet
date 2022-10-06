import { Color } from "../globalTypes";

export type IProfileSlice = {
  id: string;
  isAuth: boolean;
  defaultColor: Color;
  name: string;
  description: string;
  photoURL: string;
};
