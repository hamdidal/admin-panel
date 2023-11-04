export interface DataProps {
  data: any;
  isLoading: boolean;
  isSuccess: boolean;
}

export interface AddFlightsValues {
  airportId: number;
  startDate: string;
  endDate: string;
  airplaneCode: string;
  isActive: boolean;
  travelTime: string;
}
