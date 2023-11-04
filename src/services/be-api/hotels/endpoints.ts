import { Service } from "../../types";
import { Request } from "../../_base";
import {
  AddHotelData,
  DeleteHotelVariables,
  GetHotelsVariables,
  UpdateHotelData,
} from "./types";
import {
  DELETE_CITY_HOTEL,
  GET_HOTEL_ALL,
  POST_ADD_HOTEL,
  PUT_UPDATE_HOTEL,
} from "./constants";

export const getAllHotels: Service<GetHotelsVariables> = (querykeys) => {
  const params = querykeys.queryKey[1].params;
  return Request.get(GET_HOTEL_ALL(params.id), {});
};

export const postAddHotel: Service<AddHotelData> = (data) => {
  console.log(data);

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

export const putHotel: Service<UpdateHotelData> = ({ data }) => {
  return Request.put(PUT_UPDATE_HOTEL, data, {});
};

export const deleteHotel: Service<DeleteHotelVariables> = ({ hotelId, cityId }) => {
  return Request.delete(DELETE_CITY_HOTEL(hotelId, cityId), {});
};
