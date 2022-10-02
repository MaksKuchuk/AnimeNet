export type Color = `#${string}`;

export type IProfileSlice = {
  isAuth: boolean;
  isPhoto: boolean;
  photoColor: Color;
  name: string;
  description: string;
};
