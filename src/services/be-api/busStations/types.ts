import { RequestParams } from "../../types";

export interface AllBusStationModel {
  id: number;
  name: string;
  description: string;
  isActive: boolean;
  cityId: number;
  city: City;
}

export interface City {
  id: number;
  name: string;
  isActive: boolean;
}

export interface BusStationVariables {
  id: number;
}

export interface AddStationVariables {
  name: string;
  description: string;
  isActive: boolean;
  cityId: number;
}

export interface UpdateStationVariables {
  id: number;
  name: string;
  description: string;
  isActive: boolean;
  cityId: number;
}

export interface AddBusStationData {
  data: AddStationVariables;
}

export interface UpdateBusStationData {
  data: UpdateStationVariables;
}

export type GetAllBusStationsServiceResponse = AllBusStationModel;

export type GetBusStationVariables = RequestParams<BusStationVariables>;
