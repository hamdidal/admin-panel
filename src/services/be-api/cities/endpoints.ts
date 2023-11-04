import { Service } from "../../types";
import { Request } from "../../_base";
import {
  GetAllCitiesServiceResponse,
  GetCityByIdVariables,
  PostAddCityVariables,
  UpdateCityData,
} from "./types";
import { DELETE_CITY, GET_CITY_ALL, POST_ADD_CITY, PUT_UPDATE_CITY } from "./constants";

export const getAllCities: Service<any> = () => {
  return Request.get<any, GetAllCitiesServiceResponse>(GET_CITY_ALL, {});
};

export const postAddCity: Service<PostAddCityVariables> = (data) => {
  const formData = new FormData();
  formData.append("Name", data.data.name);
  formData.append("IsActive", data.data.isActive.toString());

  return Request.post(POST_ADD_CITY, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export const putCity: Service<UpdateCityData> = ({ data }) => {
  return Request.put(PUT_UPDATE_CITY, data, {});
};

export const deleteCity: Service<GetCityByIdVariables> = ({ id }) => {
  return Request.delete(DELETE_CITY(id), {});
};
