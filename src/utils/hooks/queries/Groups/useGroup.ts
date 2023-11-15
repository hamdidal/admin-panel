import { useBaseMutation, useBaseQuery } from "../_Base";
import { Mutation, Query } from "../types";
import groupsServices from "../../../../services/be-api/groups";
import {
  AddGroupClaimData,
  AddGroupData,
  AddGroupUserData,
  DeleteGroupIdVariables,
  GetAllGroupsServiceResponse,
  GroupIdVariables,
  UpdateGroupData,
} from "../../../../services/be-api/groups/types";

export const useGetAllGroups: Query<any, GetAllGroupsServiceResponse> = (
  params
) => {
  return useBaseQuery({
    queryKeys: ["group", { params: params.queryKeys }],
    service: groupsServices.getAllGroups,
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

export const usePostGroup: Mutation<
  AddGroupData,
  GetAllGroupsServiceResponse
> = () =>
  useBaseMutation({
    service: groupsServices.postAddGroup,
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

export const usePutGroup: Mutation<
  UpdateGroupData,
  GetAllGroupsServiceResponse
> = () =>
  useBaseMutation({
    service: groupsServices.putGroup,
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

export const useDeleteGroup: Mutation<
  GroupIdVariables,
  GetAllGroupsServiceResponse
> = () =>
  useBaseMutation({
    service: groupsServices.deleteGroup,
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

export const useGetGroup: Query<
  GroupIdVariables,
  GetAllGroupsServiceResponse
> = (params) => {
  return useBaseQuery({
    queryKeys: ["groupById", { params: params.queryKeys }],
    service: groupsServices.getGroup,
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

export const useGetGroupClaim: Query<
  GroupIdVariables,
  GetAllGroupsServiceResponse
> = (params) => {
  return useBaseQuery({
    queryKeys: ["groupByClaim", { params: params.queryKeys }],
    service: groupsServices.getGroupClaim,
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

export const useGetGroupUser: Query<
  GroupIdVariables,
  GetAllGroupsServiceResponse
> = (params) => {
  return useBaseQuery({
    queryKeys: ["groupUserList", { params: params.queryKeys }],
    service: groupsServices.getGroupUserList,
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

export const usePostGroupUser: Mutation<
  AddGroupUserData,
  GetAllGroupsServiceResponse
> = () =>
  useBaseMutation({
    service: groupsServices.postAddGroupUser,
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

export const usePostGroupClaim: Mutation<
  AddGroupClaimData,
  GetAllGroupsServiceResponse
> = () =>
  useBaseMutation({
    service: groupsServices.postAddGroupClaim,
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

export const useDeleteGroupUser: Mutation<
  DeleteGroupIdVariables,
  GetAllGroupsServiceResponse
> = () =>
  useBaseMutation({
    service: groupsServices.deleteGroupUser,
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

export const useDeleteGroupClaim: Mutation<
  DeleteGroupIdVariables,
  GetAllGroupsServiceResponse
> = () =>
  useBaseMutation({
    service: groupsServices.deleteGroupClaim,
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
