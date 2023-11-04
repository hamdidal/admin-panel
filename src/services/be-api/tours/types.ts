import { AllCityModel } from "../cities/types";

export interface AllTourModel {
  id: number;
  name: string;
  title: string;
  description: string;
  isActive: boolean;
  cityId: number;
  city: AllCityModel;
}

export interface AddTourVariables {
  name: string;
  title: string;
  description: string;
  isActive: NonNullable<boolean | undefined>;
  cityId: number;
  images?: (string | undefined)[];
}

export interface AddTourData {
  data: AddTourVariables;
}

export interface UpdateTourVariables {
  id: number;
  name: string;
  title: string;
  description: string;
  isActive: boolean;
  cityId: number;
}

export interface UpdateTourData {
  data: UpdateTourVariables;
}

export interface TourDetailVariables {
  id: number;
}

export type GetAllToursServiceResponse = AllTourModel;
