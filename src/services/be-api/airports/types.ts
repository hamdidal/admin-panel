export type AllAirportModel = AirportModel[];

export interface AirportModel {
  id: number;
  name: string;
  description: string;
  isActive: boolean;
  cityId?: number;
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

export interface AirportVariables {
  id: number;
}

export interface AddAirportVariables {
  name: string;
  description: string;
  isActive: boolean;
  cityId: number;
}

export interface UpdateAirportVariables {
  id: number;
  name: string;
  description: string;
  isActive: boolean;
  cityId: number;
}

export interface AddAirportData {
  data: AddAirportVariables;
}

export interface UpdateAirportData {
  data: UpdateAirportVariables;
}

export type GetAllAirportsServiceResponse = AllAirportModel;
export type GetAllFlightsServiceResponse = FlightsModel;
