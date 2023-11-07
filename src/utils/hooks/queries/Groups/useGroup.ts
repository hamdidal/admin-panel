import { useBaseMutation, useBaseQuery } from "../_Base";
import { Mutation, Query } from "../types";
import groupsServices from "../../../../services/be-api/groups";
import {
  AddGroupData,
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
