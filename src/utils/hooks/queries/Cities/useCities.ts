import { useBaseMutation, useBaseQuery } from "../_Base";
import { Mutation, Query } from "../types";
import claimsServices from "../../../../services/be-api/claims";
import {
  GetAllCitiesServiceResponse,
  GetCityByIdVariables,
  PostAddCityVariables,
  UpdateCityData,
} from "../../../../services/be-api/cities/types";

export const useGetAllCities: Query<any, GetAllCitiesServiceResponse> = (
  params
) => {
  return useBaseQuery({
    queryKeys: ["cities", { params: params.queryKeys }],
    service: claimsServices.getAllClaims,
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

export const useCreateCity: Mutation<
  PostAddCityVariables,
  GetAllCitiesServiceResponse
> = () => {
  return useBaseMutation({
    service: claimsServices.postAddClaim,
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

export const usePutCity: Mutation<
  UpdateCityData,
  GetAllCitiesServiceResponse
> = () =>
  useBaseMutation({
    service: claimsServices.putClaim,
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

export const useDeleteCity: Mutation<
  GetCityByIdVariables,
  GetAllCitiesServiceResponse
> = () =>
  useBaseMutation({
    service: claimsServices.deleteClaim,
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
