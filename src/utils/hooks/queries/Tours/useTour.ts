import { useBaseMutation, useBaseQuery } from "../_Base";
import { Mutation, Query } from "../types";
import tourServices from "../../../../services/be-api/tours";
import {
  AddTourData,
  AllTourModel,
  GetAllToursServiceResponse,
  TourDetailVariables,
  UpdateTourData,
} from "../../../../services/be-api/tours/types";
import {
  AddActivitiesImageVariables,
  GetActivityByIdVariables,
} from "../../../../services/be-api/activities/types";

export const useGetAllTours: Query<any, GetAllToursServiceResponse> = (
  params
) => {
  return useBaseQuery({
    queryKeys: ["tours", { params: params.queryKeys }],
    service: tourServices.getAllTours,
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

export const usePostTour: Mutation<
  AddTourData,
  GetAllToursServiceResponse
> = () =>
  useBaseMutation({
    service: tourServices.postAddTour,
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

export const usePutTour: Mutation<
  UpdateTourData,
  GetAllToursServiceResponse
> = () =>
  useBaseMutation({
    service: tourServices.putTour,
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

export const useDeleteTour: Mutation<
  TourDetailVariables,
  GetAllToursServiceResponse
> = () =>
  useBaseMutation({
    service: tourServices.deleteTour,
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

export const useGetTourById: Query<AllTourModel, GetAllToursServiceResponse> = (
  params
) => {
  return useBaseQuery({
    queryKeys: ["tourById", { params: params.queryKeys }],
    service: tourServices.getTourById,
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

export const useGetTourImageById: Query<
  AllTourModel,
  GetAllToursServiceResponse
> = (params) => {
  return useBaseQuery({
    queryKeys: ["tourImageById", { params: params.queryKeys }],
    service: tourServices.getTourImageById,
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

export const usePostTourImage: Mutation<
  AddActivitiesImageVariables,
  GetAllToursServiceResponse
> = () =>
  useBaseMutation({
    service: tourServices.postAddTourImages,
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

export const useDeleteTourImage: Mutation<
  GetActivityByIdVariables,
  GetAllToursServiceResponse
> = () =>
  useBaseMutation({
    service: tourServices.deleteTourImage,
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
