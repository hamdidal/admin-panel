import { Service } from "../../types";
import { Request } from "../../_base";

import {
  ADD_GROUP_CLAIM,
  ADD_GROUP_USER,
  DELETE_GROUP,
  DELETE_GROUP_CLAIM,
  DELETE_GROUP_USER,
  GET_GROUP,
  GET_GROUPS_ALL,
  GET_GROUP_CLAIMS,
  GET_GROUP_USERS,
  POST_ADD_GROUP,
  PUT_UPDATE_GROUP,
} from "./constants";
import {
  AddGroupClaimData,
  AddGroupData,
  AddGroupUserData,
  DeleteGroupIdVariables,
  GetAllGroupsServiceResponse,
  GetGroupsVariables,
  GroupIdVariables,
  UpdateGroupData,
} from "./types";

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

export const getGroupUserList: Service<GetGroupsVariables> = (querykeys) => {
  const params = querykeys.queryKey[1].params;
  return Request.get(GET_GROUP_USERS(params.id), {});
};

export const getGroup: Service<GetGroupsVariables> = (querykeys) => {
  const params = querykeys.queryKey[1].params;
  return Request.get(GET_GROUP(params.id), {});
};

export const getGroupClaim: Service<GetGroupsVariables> = (querykeys) => {
  const params = querykeys.queryKey[1].params;
  return Request.get(GET_GROUP_CLAIMS(params.id), {});
};

export const postAddGroupUser: Service<AddGroupUserData> = ({ data }) => {
  return Request.post(ADD_GROUP_USER, data, {});
};

export const postAddGroupClaim: Service<AddGroupClaimData> = ({ data }) => {
  return Request.post(ADD_GROUP_CLAIM, data, {});
};

export const deleteGroupUser: Service<DeleteGroupIdVariables> = ({
  groupId,
  id,
}) => {
  return Request.delete(DELETE_GROUP_USER(groupId, id), {});
};

export const deleteGroupClaim: Service<DeleteGroupIdVariables> = ({
  groupId,
  id,
}) => {
  return Request.delete(DELETE_GROUP_CLAIM(groupId, id), {});
};
