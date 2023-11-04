import { Service } from "../../types";
import { Request } from "../../_base";
import { AddTourData, GetAllToursServiceResponse, TourDetailVariables, UpdateTourData } from "./types";
import { DELETE_TOUR, GET_TOUR_ALL, POST_ADD_TOUR, PUT_UPDATE_TOUR } from "./constants";

export const getAllTours: Service<any> = () => {
  return Request.get<any, GetAllToursServiceResponse>(GET_TOUR_ALL, {});
};

export const postAddTour: Service<AddTourData> = ({ data }) => {
  const formData = new FormData();
  formData.append("Name", data.name);
  formData.append("Title", data.title);
  formData.append("IsActive", data.isActive.toString());
  formData.append("CityId", data.cityId.toString());
  formData.append("Description", data.description);
  formData.append("Images", data.images!.toString());

  return Request.post(POST_ADD_TOUR, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export const putTour: Service<UpdateTourData> = ({ data }) => {
  return Request.put(PUT_UPDATE_TOUR, data, {});
};

export const deleteTour: Service<TourDetailVariables> = ({ id }) => {
  return Request.delete(DELETE_TOUR(id), {});
};
