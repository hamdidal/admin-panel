import { RequestParams } from "../../types";

export interface AllUserModel {
  id: number;
  email: string;
  name: string;
  imageUrl: string;
}

export interface UserDetailVariables {
  id: number;
}

export interface UpdateUserByAdminVariables {
  id: number;
  email: string;
  name: string;
}

export interface UpdateUserVariables {
  email: string;
  name: string;
}

export interface ChangePasswordVariables {
  newPassword: string;
  oldPassword: string;
}

export interface AddUserClaimVariables {
  userId: number;
  claimId: number[];
}

export interface DeleteUserIdVariables {
  userId: number;
  claimId: number;
}

export interface UpdateUserByAdminData {
  data: UpdateUserByAdminVariables;
}

export interface ChangepasswordData {
  data: ChangePasswordVariables;
}

export interface UpdateUserData {
  data: UpdateUserVariables;
}

export interface AddUserClaimData {
  data: AddUserClaimVariables;
}

export type GetUserVariables = RequestParams<UserDetailVariables>;
export type GetUserByIdVariables = UserDetailVariables;
export type GetAllUsersServiceResponse = AllUserModel;
