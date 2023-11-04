import { useBaseMutation, useBaseQuery } from "../_Base";
import { Mutation, Query } from "../types";
import tourServices from "../../../../services/be-api/tours";
import {
  AddTourData,
  GetAllToursServiceResponse,
  TourDetailVariables,
  UpdateTourData,
} from "../../../../services/be-api/tours/types";

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
