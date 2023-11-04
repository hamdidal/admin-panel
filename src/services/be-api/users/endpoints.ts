import { RequestParams, Service } from "../../types";
import { Request } from "../../_base";

import { GET_USERS_ALL, GET_USER_BY_ID } from "./constants";
import { GetAllUsersServiceResponse, GetUserByIdVariables } from "./types";

export const getAllUser: Service<any> = () => {
  return Request.get<any, GetAllUsersServiceResponse>(GET_USERS_ALL, {});
};

export const getUserById: Service<RequestParams<GetUserByIdVariables>> = ({
  queryKey,
}) => {
  const { params } = queryKey[1];

  return Request.get(GET_USER_BY_ID, { id: params.id });
};
