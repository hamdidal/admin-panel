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
} from "../../../../services/be-api/users/types";
import { useBaseMutation, useBaseQuery } from "../_Base";
import { Mutation, Query } from "../types";
import usersServices from "../../../../services/be-api/users";

export const useGetAllUsers: Query<any, GetAllUsersServiceResponse> = (
  params
) => {
  return useBaseQuery({
    queryKeys: ["user", { params: params.queryKeys }],
    service: usersServices.getAllUser,
    onSuccess: {
      messageDisplay: false,
      message: "Succesfully, get all users",
    },
    onLoading: {
      messageDisplay: false,
      message: "Loading",
    },
    onError: {
      messageDisplay: false,
    },
    enabled: params.enabled,
  });
};

export const useGetUser: Query<
  GetUserByIdVariables,
  GetAllUsersServiceResponse
> = (params) => {
  return useBaseQuery({
    queryKeys: ["userById", { params: params.queryKeys }],
    service: usersServices.getUserById,
    onSuccess: {
      messageDisplay: false,
      message: "Succesfully, get all users",
    },
    onLoading: {
      messageDisplay: false,
      message: "Loading",
    },
    onError: {
      messageDisplay: false,
    },
    enabled: params.enabled,
  });
};

export const useDeleteUser: Mutation<
  UserDetailVariables,
  GetAllUsersServiceResponse
> = () =>
  useBaseMutation({
    service: usersServices.deleteUser,
    onSuccess: {
      messageDisplay: true,
      message: "Başarılı bir şekilde giriş yapıldı.",
    },
    onLoading: {
      messageDisplay: true,
      message: "Bilgileriniz kontrol ediliyor...",
    },
    onError: {
      messageDisplay: true,
    },
  });

export const useGetUserClaim: Query<
  GetUserVariables,
  GetAllUsersServiceResponse
> = (params) => {
  return useBaseQuery({
    queryKeys: ["userByClaim", { params: params.queryKeys }],
    service: usersServices.getUserClaim,
    onSuccess: {
      messageDisplay: false,
      message: "Succesfully, get all users",
    },
    onLoading: {
      messageDisplay: false,
      message: "Loading",
    },
    onError: {
      messageDisplay: false,
    },
    enabled: params.enabled,
  });
};

export const usePostUserClaim: Mutation<
  AddUserClaimData,
  GetAllUsersServiceResponse
> = () =>
  useBaseMutation({
    service: usersServices.postAddUserClaim,
    onSuccess: {
      messageDisplay: true,
      message: "Başarılı bir şekilde giriş yapıldı.",
    },
    onLoading: {
      messageDisplay: true,
      message: "Bilgileriniz kontrol ediliyor...",
    },
    onError: {
      messageDisplay: true,
    },
  });

export const useDeleteUserClaim: Mutation<
  DeleteUserIdVariables,
  GetAllUsersServiceResponse
> = () =>
  useBaseMutation({
    service: usersServices.deleteUserClaim,
    onSuccess: {
      messageDisplay: true,
      message: "Başarılı bir şekilde giriş yapıldı.",
    },
    onLoading: {
      messageDisplay: true,
      message: "Bilgileriniz kontrol ediliyor...",
    },
    onError: {
      messageDisplay: true,
    },
  });

export const usePutUser: Mutation<
  UpdateUserData,
  GetAllUsersServiceResponse
> = () =>
  useBaseMutation({
    service: usersServices.putUser,
    onSuccess: {
      messageDisplay: true,
      message: "Başarılı bir şekilde giriş yapıldı.",
    },
    onLoading: {
      messageDisplay: true,
      message: "Bilgileriniz kontrol ediliyor...",
    },
    onError: {
      messageDisplay: true,
    },
  });

export const useChangePassword: Mutation<
  ChangepasswordData,
  GetAllUsersServiceResponse
> = () =>
  useBaseMutation({
    service: usersServices.changePassword,
    onSuccess: {
      messageDisplay: true,
      message: "Başarılı bir şekilde giriş yapıldı.",
    },
    onLoading: {
      messageDisplay: true,
      message: "Bilgileriniz kontrol ediliyor...",
    },
    onError: {
      messageDisplay: true,
    },
  });

export const usePutUserByAdmin: Mutation<
  UpdateUserByAdminData,
  GetAllUsersServiceResponse
> = () =>
  useBaseMutation({
    service: usersServices.putUserByAdmin,
    onSuccess: {
      messageDisplay: true,
      message: "Başarılı bir şekilde giriş yapıldı.",
    },
    onLoading: {
      messageDisplay: true,
      message: "Bilgileriniz kontrol ediliyor...",
    },
    onError: {
      messageDisplay: true,
    },
  });
