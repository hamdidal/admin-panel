export interface AllUserModel {
  id: number;
  email: string;
  name: string;
  imageUrl: string;
}

export interface UserDetailVariables {
  id: number;
}

export type GetUserByIdVariables = UserDetailVariables;
export type GetAllUsersServiceResponse = AllUserModel;
