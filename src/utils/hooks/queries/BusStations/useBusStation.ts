import { useBaseMutation, useBaseQuery } from "../_Base";
import { Mutation, Query } from "../types";
import {
  AddBusStationData,
  BusStationVariables,
  GetAllBusStationsServiceResponse,
  GetBusStationVariables,
  UpdateBusStationData,
} from "../../../../services/be-api/busStations/types";
import { getAllBusStations } from "../../../../services/be-api/busStations/endpoints";
import stationServices from "../../../../services/be-api/busStations";

export const useGetBusStations: Query<
  GetBusStationVariables,
  GetAllBusStationsServiceResponse
> = (params) =>
  useBaseQuery({
    queryKeys: ["bus-station", { params: params.queryKeys }],
    service: getAllBusStations,
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
export const usePostTerminal: Mutation<
  AddBusStationData,
  GetAllBusStationsServiceResponse
> = () =>
  useBaseMutation({
    service: stationServices.postAddStation,
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

export const usePutTerminal: Mutation<
  UpdateBusStationData,
  GetAllBusStationsServiceResponse
> = () =>
  useBaseMutation({
    service: stationServices.putStation,
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

export const useDeleteTerminal: Mutation<
  BusStationVariables,
  GetAllBusStationsServiceResponse
> = () =>
  useBaseMutation({
    service: stationServices.deleteStation,
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
