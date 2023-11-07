import { RequestParams, Service } from "../../types";
import { Request } from "../../_base";
import {
  AddAirportData,
  AddFlightData,
  AirportVariables,
  DeleteFlightVariables,
  FlightsVariables,
  GetAllAirportsServiceResponse,
  UpdateAirportData,
} from "./types";
import {
  DELETE_AIRPORT,
  DELETE_FLIGHT,
  GET_AIRPORT_ALL,
  GET_FLIGHTS_ALL,
  POST_ADD_AIRPORT,
  POST_ADD_FLIGHT,
  PUT_UPDATE_AIRPORT,
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

export const postAddAirport: Service<AddAirportData> = ({ data }) => {
  const formData = new FormData();
  formData.append("Name", data.name);
  formData.append("IsActive", data.isActive.toString());
  formData.append("CityId", data.cityId.toString());
  formData.append("Description", data.description);

  return Request.post(POST_ADD_AIRPORT, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export const putAirport: Service<UpdateAirportData> = ({ data }) => {
  return Request.put(PUT_UPDATE_AIRPORT, data, {});
};

export const deleteAirport: Service<AirportVariables> = ({ id }) => {
  return Request.delete(DELETE_AIRPORT(id), {});
};
