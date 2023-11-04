export type LoginServiceDatas = {
  email: string;
  password: string;
};
export type LoginServiceResponse = {
  accessToken: string;
  expiresInSeconds: number;
  refreshToken: string;
};

export type LoginServiceVariables = {
  data: LoginServiceDatas;
};
