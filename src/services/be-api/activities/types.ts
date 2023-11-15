export interface AllActivityModel {
  id: number;
  name: string;
  title: string;
  description: string;
  isActive: boolean;
  city: City;
  images: Image[];
}

export interface City {
  id: number;
  name: string;
  isActive: boolean;
}

export interface Image {
  imageUrl: string;
  id: string;
}

export interface ActivityDetailVariables {
  id: number;
}

export interface AddActivityVariables {
  name: string;
  title: string;
  description: string;
  isActive: NonNullable<boolean | undefined>;
  cityId: number;
  images?: (string | undefined)[];
}

export interface AddActivitiesImageVariables {
  id: number;
  image: File[];
}

export interface UpdateActivityVariables {
  id: number;
  name: string;
  title: string;
  description: string;
  isActive: boolean;
  cityId: number;
}

export interface UpdateActivityData {
  data: UpdateActivityVariables;
}

export interface AddActivityData {
  data: AddActivityVariables;
}

export interface AddActivityImageData {
  data: AddActivitiesImageVariables;
}

export type GetAllActivitiesServiceResponse = AllActivityModel;
export type GetActivityByIdVariables = ActivityDetailVariables;
export type GetAddActivityVariables = AddActivityData;
export type GetUpdateActivityVariables = UpdateActivityData;
