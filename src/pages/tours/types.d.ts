export interface DataProps {
  data: any;
  isLoading: boolean;
  isSuccess: boolean;
}

export interface AddTourValues {
  name: string;
  title: string;
  description: string;
  isActive: NonNullable<boolean | undefined>;
  cityId: number;
  images?: (string | undefined)[];
}
