import { Service } from "../../types";
import { Request } from "../../_base";

import { GET_GROUPS_ALL } from "./constants";
import { GetAllGroupsServiceResponse } from "./types";

export const getAllGroups: Service<any> = () => {
  return Request.get<any, GetAllGroupsServiceResponse>(GET_GROUPS_ALL, {});
};
