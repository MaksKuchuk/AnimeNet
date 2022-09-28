export type IRegisterStage =
  | "enternumber"
  | "verifynumber"
  | "namepass"
  | "success";

export type IModalsSlice = {
  signInVisible: boolean;
  registerVisible: boolean;
  registerStage: IRegisterStage;
};
