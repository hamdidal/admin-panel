export interface AllCityModel {
  id: number;
  name: string;
  isActive: boolean;
}

export interface AddCityVariables {
  name: string;
  isActive: boolean;
}

export interface PostAddCityVariables {
  data: AddCityVariables;
}

export interface UpdateCityVariables {
  id: number;
  name: string;
  isActive: boolean;
}

export interface UpdateCityData {
  data: UpdateCityVariables;
}

export interface CityDetailVariables {
  id: number;
}

export type GetAllCitiesServiceResponse = AllCityModel;
export type GetCityByIdVariables = CityDetailVariables;
