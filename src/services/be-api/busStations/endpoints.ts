import { Service } from "../../types";
import { Request } from "../../_base";
import {
  AddBusStationData,
  BusStationVariables,
  GetBusStationVariables,
  UpdateBusStationData,
} from "./types";
import {
  DELETE_TERMINAL,
  GET_STATION_ALL,
  POST_ADD_TERMINAL,
  PUT_UPDATE_TERMINAL,
} from "./constants";

export const getAllBusStations: Service<GetBusStationVariables> = (
  querykeys
) => {
  const params = querykeys.queryKey[1].params;
  return Request.get(GET_STATION_ALL(params.id), {});
};

export const postAddStation: Service<AddBusStationData> = ({ data }) => {
  return Request.post(POST_ADD_TERMINAL, data, {});
};

export const putStation: Service<UpdateBusStationData> = ({ data }) => {
  return Request.put(PUT_UPDATE_TERMINAL, data, {});
};

export const deleteStation: Service<BusStationVariables> = ({ id }) => {
  return Request.delete(DELETE_TERMINAL(id), {});
};
