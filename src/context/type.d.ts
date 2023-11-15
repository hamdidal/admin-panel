export type UserModel = {
  id: number;
  name: string;
  surname: string;
  userName: string;
  emailAddress: string;
  isSeller: boolean;
  isBuyer: boolean;
};
export type RoleModel = {
  [x: string]: any;
  id: number;
  name: string;
};
export type UserState = {
  user: UserModel;
  setUser: (userData: UserModel) => void;
  role: RoleModel;
  setRole: (roleData: RoleModel) => void;
};
type AuthState = {
  user: any;
  setUser: (authUser: any) => void;
  accessToken: string | null;
  setAccessToken: (token: string | null) => void;
  clearAccessToken: () => void;
};

export type DateState = {
  startDate: string | null;
  setStartDate: (date: string | null) => void;
  endDate: string | null;
  setEndDate: (date: string | null) => void;
  reset: () => void;
};
