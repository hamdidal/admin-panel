import { RequestParams, Service } from "../../types";
import { Request } from "../../_base";
import {
  AddFlightData,
  DeleteFlightVariables,
  FlightsVariables,
  GetAllAirportsServiceResponse,
} from "./types";
import {
  DELETE_FLIGHT,
  GET_AIRPORT_ALL,
  GET_FLIGHTS_ALL,
  POST_ADD_FLIGHT,
} from "./constants";

export const getAllAirports: Service<any> = () => {
  return Request.get<any, GetAllAirportsServiceResponse>(GET_AIRPORT_ALL, {});
};

export const getAllFlights: Service<RequestParams<FlightsVariables>> = ({
  queryKey,
}) => {
  const { params } = queryKey[1];

  return Request.get(GET_FLIGHTS_ALL, { airportId: params.airportId });
};

export const postAddFlight: Service<AddFlightData> = ({ data }) => {
  return Request.post(POST_ADD_FLIGHT, data, {});
};

export const deleteFlight: Service<DeleteFlightVariables> = ({
  airportFlightsId,
  airportId,
}) => {
  return Request.delete(DELETE_FLIGHT(airportId, airportFlightsId), {});
};
