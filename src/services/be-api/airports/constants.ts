export const GET_AIRPORT_ALL = "/Airport/GetList";
export const GET_FLIGHTS_ALL = "/Airport/GetListAirportFlights";
export const POST_ADD_FLIGHT = "/Airport/AddAirportFlight";
export const DELETE_FLIGHT = (airportId: number, airportFlightsId: number) =>
  `/Airport/DeleteAirportFlight/${airportId}/${airportFlightsId}`;
