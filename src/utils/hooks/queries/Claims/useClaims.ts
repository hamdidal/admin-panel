import { useBaseMutation, useBaseQuery } from "../_Base";
import { Mutation, Query } from "../types";
import claimsServices from "../../../../services/be-api/claims";
import {
  AddClaimVariables,
  GetAllClaimsServiceResponse,
  GetClaimByIdVariables,
  UpdateClaimData,
} from "../../../../services/be-api/claims/types";

export const useGetAllClaim: Query<any, GetAllClaimsServiceResponse> = (
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

export const useCreateClaim: Mutation<
AddClaimVariables,
  GetAllClaimsServiceResponse
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

export const usePutClaim: Mutation<
  UpdateClaimData,
  GetAllClaimsServiceResponse
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

export const useDeleteClaim: Mutation<
GetClaimByIdVariables,
  GetAllClaimsServiceResponse
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
