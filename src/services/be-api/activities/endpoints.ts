import { RequestParams, Service } from "../../types";
import { Request } from "../../_base";
import {
  AddActivityData,
  GetActivityByIdVariables,
  GetAllActivitiesServiceResponse,
  UpdateActivityData,
} from "./types";
import {
  DELETE_ACTIVITY,
  GET_ACTIVITY_ALL,
  GET_ACTIVITY_BY_ID,
  POST_ADD_ACTIVITY,
  PUT_UPDATE_ACTIVITY,
} from "./constants";

export const getAllActivities: Service<any> = () => {
  return Request.get<any, GetAllActivitiesServiceResponse>(
    GET_ACTIVITY_ALL,
    {}
  );
};

export const getActivityById: Service<
  RequestParams<GetActivityByIdVariables>
> = ({ queryKey }) => {
  const { params } = queryKey[1];

  return Request.get(GET_ACTIVITY_BY_ID, { id: params.id });
};

export const postAddActivity: Service<AddActivityData> = ({ data }) => {
  const formData = new FormData();
  formData.append("Name", data.name);
  formData.append("Title", data.title);
  formData.append("IsActive", data.isActive.toString());
  formData.append("CityId", data.cityId.toString());
  formData.append("Description", data.description);
  formData.append("Images", data.images!.toString());

  // for (const image of data.Images) {
  //   formData.append("Images", image, image.name);
  // }

  return Request.post(POST_ADD_ACTIVITY, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export const putActivity: Service<UpdateActivityData> = ({ data }) => {
  return Request.put(PUT_UPDATE_ACTIVITY, data, {});
};

export const deleteActivity: Service<GetActivityByIdVariables> = ({ id }) => {
  return Request.delete(DELETE_ACTIVITY(id), {});
};
