import { useBaseQuery, useBaseMutation } from "../_Base";
import { Mutation, Query } from "../types";
import activitiesServices from "../../../../services/be-api/activities";
import {
  GetActivityByIdVariables,
  GetAddActivityVariables,
  GetAllActivitiesServiceResponse,
  GetUpdateActivityVariables,
} from "../../../../services/be-api/activities/types";

export const useGetAllActivities: Query<
  any,
  GetAllActivitiesServiceResponse
> = (params) => {
  return useBaseQuery({
    queryKeys: ["activity", { params: params.queryKeys }],
    service: activitiesServices.getAllActivities,
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

export const useGetActivity: Query<
  GetActivityByIdVariables,
  GetAllActivitiesServiceResponse
> = (params) => {
  return useBaseQuery({
    queryKeys: ["activityById", { params: params.queryKeys }],
    service: activitiesServices.getActivityById,
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

export const usePostActivity: Mutation<
  GetAddActivityVariables,
  GetAllActivitiesServiceResponse
> = () =>
  useBaseMutation({
    service: activitiesServices.postAddActivity,
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

export const usePutActivity: Mutation<
  GetUpdateActivityVariables,
  GetAllActivitiesServiceResponse
> = () =>
  useBaseMutation({
    service: activitiesServices.putActivity,
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

export const useDeleteActivity: Mutation<
  GetActivityByIdVariables,
  GetAllActivitiesServiceResponse
> = () =>
  useBaseMutation({
    service: activitiesServices.deleteActivity,
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
