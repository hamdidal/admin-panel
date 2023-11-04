import { RequestParams } from "../../types";

export interface AllHotelModel {
  id: number;
  name: string;
  description: string;
  isActive: boolean;
  images: Image[];
}

export interface Image {
  imageUrl: string;
  id: string;
}

export interface HotelVariables {
  id: number;
}

export interface AddHotelVariables {
  name: string;
  description: string;
  isActive: boolean;
  cityId: number;
}

export interface AddHotelData {
  data: AddHotelVariables;
}

export interface UpdateHotelVariables {
  id: number;
  name: string;
  description: string;
  isActive: boolean;
}

export interface UpdateHotelData {
  data: UpdateHotelVariables;
}

export interface DeleteHotelVariables {
  hotelId: number;
  cityId: number;
}

export interface DeleteHotelData {
  data: DeleteHotelVariables;
}

export type GetAllHotelsServiceResponse = AllHotelModel;

export type GetHotelsVariables = RequestParams<HotelVariables>;
