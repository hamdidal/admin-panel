import {
  GetAllUsersServiceResponse,
  GetUserByIdVariables,
} from "../../../../services/be-api/users/types";
import { useBaseQuery } from "../_Base";
import { Query } from "../types";
import usersServices from "../../../../services/be-api/users";

export const useGetAllUsers: Query<any, GetAllUsersServiceResponse> = (
  params
) => {
  return useBaseQuery({
    queryKeys: ["user", { params: params.queryKeys }],
    service: usersServices.getAllUser,
    onSuccess: {
      messageDisplay: false,
      message: "Succesfully, get all users",
    },
    onLoading: {
      messageDisplay: false,
      message: "Loading",
    },
    onError: {
      messageDisplay: false,
    },
    enabled: params.enabled,
  });
};

export const useGetUser: Query<
  GetUserByIdVariables,
  GetAllUsersServiceResponse
> = (params) => {
  return useBaseQuery({
    queryKeys: ["userById", { params: params.queryKeys }],
    service: usersServices.getUserById,
    onSuccess: {
      messageDisplay: false,
      message: "Succesfully, get all users",
    },
    onLoading: {
      messageDisplay: false,
      message: "Loading",
    },
    onError: {
      messageDisplay: false,
    },
    enabled: params.enabled,
  });
};
