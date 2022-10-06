export type Color = `#${string}`;

export type IUser = {
  id: string;
  name: string;
  defaultColor: Color;
  photoURL: string;
  description?: string;
};
