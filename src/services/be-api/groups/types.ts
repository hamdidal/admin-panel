import { RequestParams } from "../../types";

export interface AllUserModel {
  id: number;
  email: string;
  name: string;
  imageUrl: string;
}

export type AllGroupModel = Group[];

export interface Group {
  id: number;
  name: string;
}

export interface AddGroupVariables {
  name: string;
}
export interface UpdateGroupData {
  data: Group;
}

export interface AddGroupData {
  data: AddGroupVariables;
}

export interface GroupIdVariables {
  id: number;
}

export interface DeleteGroupIdVariables {
  groupId: number;
  id: number;
}

export interface AddGroupUsersVariables {
  groupId: number;
  userId: number[];
}

export interface AddGroupClaimVariables {
  groupId: number;
  claimId: number[];
}

export interface AddGroupUserData {
  data: AddGroupUsersVariables;
}

export interface AddGroupClaimData {
  data: AddGroupClaimVariables;
}

export type GetGroupsVariables = RequestParams<GroupIdVariables>;
export type GetAllGroupsServiceResponse = AllGroupModel;
