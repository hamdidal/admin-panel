export interface DataProps {
    data: any;
    isLoading: boolean;
    isSuccess: boolean;
}

export interface AddAirportValues {
    name: string;
    description: string;
    isActive: NonNullable<boolean | undefined>;
    cityId: number;
  }
  