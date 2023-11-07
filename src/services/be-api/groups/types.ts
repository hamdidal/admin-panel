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

export type GetAllGroupsServiceResponse = AllGroupModel;
