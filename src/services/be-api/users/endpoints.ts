import { RequestParams, Service } from "../../types";
import { Request } from "../../_base";

import {
  ADD_USER_CLAIM,
  CHANGE_PASSWORD,
  DELETE_USER,
  DELETE_USER_CLAIM,
  GET_USERS_ALL,
  GET_USERS_CLAIM,
  GET_USER_BY_ID,
  PUT_USER,
  PUT_USER_ADMIN,
} from "./constants";
import {
  AddUserClaimData,
  ChangepasswordData,
  DeleteUserIdVariables,
  GetAllUsersServiceResponse,
  GetUserByIdVariables,
  GetUserVariables,
  UpdateUserByAdminData,
  UpdateUserData,
  UserDetailVariables,
} from "./types";

export const getAllUser: Service<any> = () => {
  return Request.get<any, GetAllUsersServiceResponse>(GET_USERS_ALL, {});
};

export const getUserById: Service<RequestParams<GetUserByIdVariables>> = ({
  queryKey,
}) => {
  const { params } = queryKey[1];

  return Request.get(GET_USER_BY_ID, { id: params.id });
};

export const putUserByAdmin: Service<UpdateUserByAdminData> = ({ data }) => {
  return Request.put(PUT_USER_ADMIN, data, {});
};

export const putUser: Service<UpdateUserData> = ({ data }) => {
  return Request.put(PUT_USER, data, {});
};

export const changePassword: Service<ChangepasswordData> = ({ data }) => {
  return Request.put(CHANGE_PASSWORD, data, {});
};

export const deleteUser: Service<UserDetailVariables> = ({ id }) => {
  return Request.delete(DELETE_USER(id), {});
};

export const getUserClaim: Service<GetUserVariables> = (querykeys) => {
  const params = querykeys.queryKey[1].params;
  return Request.get(GET_USERS_CLAIM(params.id), {});
};

export const postAddUserClaim: Service<AddUserClaimData> = ({ data }) => {
  return Request.post(ADD_USER_CLAIM, data, {});
};

export const deleteUserClaim: Service<DeleteUserIdVariables> = ({
  userId,
  claimId,
}) => {
  return Request.delete(DELETE_USER_CLAIM(userId, claimId), {});
};
