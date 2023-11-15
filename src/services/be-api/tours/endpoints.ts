import { RequestParams, Service } from "../../types";
import { Request } from "../../_base";
import {
  AddTourData,
  AllTourModel,
  GetAllToursServiceResponse,
  TourDetailVariables,
  UpdateTourData,
} from "./types";
import {
  DELETE_TOUR,
  DELETE_TOUR_IMAGE,
  GET_TOUR_ALL,
  GET_TOUR_BY_ID,
  GET_TOUR_IMAGES_BY_ID,
  POST_ADD_TOUR,
  POST_ADD_TOUR_IMAGE,
  PUT_UPDATE_TOUR,
} from "./constants";
import {
  AddActivitiesImageVariables,
  GetActivityByIdVariables,
} from "../activities/types";

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

export const postAddTourImages: Service<AddActivitiesImageVariables> = ({
  image,
  id,
}) => {
  const formData = new FormData();

  for (const imageFile of image) {
    formData.append("Images", imageFile, imageFile.name);
  }
  formData.append("TourId", id.toString());

  return Request.post(POST_ADD_TOUR_IMAGE, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export const deleteTourImage: Service<GetActivityByIdVariables> = ({ id }) => {
  return Request.delete(DELETE_TOUR_IMAGE(id), {});
};

export const getTourById: Service<RequestParams<AllTourModel>> = (
  querykeys
) => {
  const params = querykeys.queryKey[1].params;
  return Request.get(GET_TOUR_BY_ID(params.id), {});
};

export const getTourImageById: Service<RequestParams<AllTourModel>> = (
  querykeys
) => {
  const params = querykeys.queryKey[1].params;
  return Request.get(GET_TOUR_IMAGES_BY_ID(params.id), {});
};
