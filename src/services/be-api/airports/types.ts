export type AllAirportModel = AirportModel[];

export interface AirportModel {
  id: number;
  name: string;
  description: string;
  isActive: boolean;
}

export interface FlightsVariables {
  airportId: number;
}

export interface FlightsModel {
  id: number;
  startDate: string;
  endDate: string;
  airplaneCode: string;
  isActive: boolean;
  travelTime: string;
}

export interface AddFlightVariables {
  airportId: number;
  startDate: string;
  endDate: string;
  airplaneCode: string;
  isActive: boolean;
  travelTime: string;
}

export interface AddFlightData {
  data: AddFlightVariables;
}

export interface DeleteFlightVariables {
  airportId: number;
  airportFlightsId: number;
}

export type GetAllAirportsServiceResponse = AllAirportModel;
export type GetAllFlightsServiceResponse = FlightsModel;
