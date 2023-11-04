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

export type GetAllGroupsServiceResponse = AllGroupModel;
