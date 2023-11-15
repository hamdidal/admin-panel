import { useBaseMutation, useBaseQuery } from "../_Base";
import { Mutation, Query } from "../types";
import {
  AddHotelData,
  AllHotelModel,
  DeleteHotelVariables,
  GetAllHotelsServiceResponse,
  GetHotelsVariables,
  UpdateHotelData,
} from "../../../../services/be-api/hotels/types";
import { getAllHotels } from "../../../../services/be-api/hotels/endpoints";
import hotelsServices from "../../../../services/be-api/hotels";
import {
  AddActivitiesImageVariables,
  GetActivityByIdVariables,
} from "../../../../services/be-api/activities/types";

export const useGetHotels: Query<
  GetHotelsVariables,
  GetAllHotelsServiceResponse
> = (params) =>
  useBaseQuery({
    queryKeys: ["hotels", { params: params.queryKeys }],
    service: getAllHotels,
    onSuccess: {
      messageDisplay: false,
      message: "Successful.",
    },
    onLoading: {
      messageDisplay: false,
      message: "Loading",
    },
    onError: {
      messageDisplay: false,
    },
  });

export const useCreateHotel: Mutation<
  AddHotelData,
  GetAllHotelsServiceResponse
> = () => {
  return useBaseMutation({
    service: hotelsServices.postAddHotel,
    onSuccess: {
      messageDisplay: true,
      message: "Ürün Başarı ile Eklenmiştir",
    },
    onLoading: {
      messageDisplay: false,
      message: "Loading",
    },
    onError: {
      messageDisplay: false,
    },
  });
};

export const usePutHotel: Mutation<
  UpdateHotelData,
  GetAllHotelsServiceResponse
> = () =>
  useBaseMutation({
    service: hotelsServices.putHotel,
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

export const useDeleteHotel: Mutation<
  DeleteHotelVariables,
  GetAllHotelsServiceResponse
> = () =>
  useBaseMutation({
    service: hotelsServices.deleteHotel,
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

export const useGetHotel: Query<any, AllHotelModel> = (params) => {
  return useBaseQuery({
    queryKeys: ["getByHotel", { params: params.queryKeys }],
    service: hotelsServices.getHotelById,
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

export const usePostHotelImage: Mutation<
  AddActivitiesImageVariables,
  GetAllHotelsServiceResponse
> = () =>
  useBaseMutation({
    service: hotelsServices.postAddHotelImages,
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

export const useDeleteHotelImage: Mutation<
  GetActivityByIdVariables,
  GetAllHotelsServiceResponse
> = () =>
  useBaseMutation({
    service: hotelsServices.deleteHotelImage,
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
