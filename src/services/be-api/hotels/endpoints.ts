import { RequestParams, Service } from "../../types";
import { Request } from "../../_base";
import {
  AddHotelData,
  AllHotelModel,
  DeleteHotelVariables,
  GetHotelsVariables,
  UpdateHotelData,
} from "./types";
import {
  DELETE_CITY_HOTEL,
  DELETE_HOTEL_IMAGE,
  GET_HOTEL_ALL,
  GET_HOTEL_BY_ID,
  POST_ADD_HOTEL,
  POST_ADD_HOTEL_IMAGE,
  PUT_UPDATE_HOTEL,
} from "./constants";
import {
  AddActivitiesImageVariables,
  GetActivityByIdVariables,
} from "../activities/types";

export const getAllHotels: Service<GetHotelsVariables> = (querykeys) => {
  const params = querykeys.queryKey[1].params;
  return Request.get(GET_HOTEL_ALL(params.id), {});
};

export const getHotelById: Service<RequestParams<AllHotelModel>> = (
  querykeys
) => {
  const params = querykeys.queryKey[1].params;
  return Request.get(GET_HOTEL_BY_ID(params.id), {});
};

export const postAddHotel: Service<AddHotelData> = (data) => {
  const formData = new FormData();
  formData.append("Name", data.data.name);
  formData.append("IsActive", data.data.isActive.toString());
  formData.append("Description", data.data.description);
  formData.append("CityId", data.data.cityId.toString());

  return Request.post(POST_ADD_HOTEL, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export const postAddHotelImages: Service<AddActivitiesImageVariables> = ({
  image,
  id,
}) => {
  const formData = new FormData();

  for (const imageFile of image) {
    formData.append("Images", imageFile, imageFile.name);
  }
  formData.append("HotelId", id.toString());

  return Request.post(POST_ADD_HOTEL_IMAGE, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export const deleteHotelImage: Service<GetActivityByIdVariables> = ({ id }) => {
  return Request.delete(DELETE_HOTEL_IMAGE(id), {});
};

export const putHotel: Service<UpdateHotelData> = ({ data }) => {
  return Request.put(PUT_UPDATE_HOTEL, data, {});
};

export const deleteHotel: Service<DeleteHotelVariables> = ({
  hotelId,
  cityId,
}) => {
  return Request.delete(DELETE_CITY_HOTEL(hotelId, cityId), {});
};
