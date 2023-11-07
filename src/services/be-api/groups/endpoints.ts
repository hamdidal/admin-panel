import { Service } from "../../types";
import { Request } from "../../_base";

import { DELETE_GROUP, GET_GROUPS_ALL, POST_ADD_GROUP, PUT_UPDATE_GROUP } from "./constants";
import { AddGroupData, GetAllGroupsServiceResponse, GroupIdVariables, UpdateGroupData } from "./types";

export const getAllGroups: Service<any> = () => {
  return Request.get<any, GetAllGroupsServiceResponse>(GET_GROUPS_ALL, {});
};

export const postAddGroup: Service<AddGroupData> = ({ data }) => {
  return Request.post(POST_ADD_GROUP, data, {});
};

export const putGroup: Service<UpdateGroupData> = ({ data }) => {
  return Request.put(PUT_UPDATE_GROUP, data, {});
};

export const deleteGroup: Service<GroupIdVariables> = ({ id }) => {
  return Request.delete(DELETE_GROUP(id), {});
};
