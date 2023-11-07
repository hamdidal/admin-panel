import { useBaseMutation, useBaseQuery } from "../_Base";
import { Mutation, Query } from "../types";
import airportsServices from "../../../../services/be-api/airports";
import {
  AddAirportData,
  AddFlightData,
  AirportVariables,
  DeleteFlightVariables,
  FlightsVariables,
  GetAllAirportsServiceResponse,
  GetAllFlightsServiceResponse,
  UpdateAirportData,
} from "../../../../services/be-api/airports/types";

export const useGetAllAirports: Query<any, GetAllAirportsServiceResponse> = (
  params
) => {
  return useBaseQuery({
    queryKeys: ["airport", { params: params.queryKeys }],
    service: airportsServices.getAllAirports,
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

export const useGetAllFlights: Query<
  FlightsVariables,
  GetAllFlightsServiceResponse
> = (params) => {
  return useBaseQuery({
    queryKeys: ["flights", { params: params.queryKeys }],
    service: airportsServices.getAllFlights,
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

export const useCreateFlight: Mutation<
  AddFlightData,
  GetAllFlightsServiceResponse
> = () =>
  useBaseMutation({
    service: airportsServices.postAddFlight,
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

export const useDeleteFlight: Mutation<
  DeleteFlightVariables,
  GetAllFlightsServiceResponse
> = () =>
  useBaseMutation({
    service: airportsServices.deleteFlight,
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

export const usePostAirport: Mutation<
  AddAirportData,
  GetAllAirportsServiceResponse
> = () =>
  useBaseMutation({
    service: airportsServices.postAddAirport,
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

export const usePutAirport: Mutation<
  UpdateAirportData,
  GetAllAirportsServiceResponse
> = () =>
  useBaseMutation({
    service: airportsServices.putAirport,
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

export const useDeleteAirport: Mutation<
  AirportVariables,
  GetAllAirportsServiceResponse
> = () =>
  useBaseMutation({
    service: airportsServices.deleteAirport,
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
