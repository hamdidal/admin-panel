export const GET_GROUPS_ALL = "/Group/GetList";
export const POST_ADD_GROUP = "/Group/Add";
export const PUT_UPDATE_GROUP = "/Group/Update";
export const GET_GROUP = (id: number) => `/Group/GetGroupById/${id}`;
export const GET_GROUP_CLAIMS = (id: number) => `/Group/GetGroupClaim/${id}`;
export const GET_GROUP_USERS = (id: number) => `/Group/GetGroupUserList/${id}`;
export const ADD_GROUP_USER = "/Group/AddGroupUsers";
export const ADD_GROUP_CLAIM = "/Group/AddGroupClaim";
export const DELETE_GROUP = (id: number) => `/Group/Delete/${id}`;
export const DELETE_GROUP_USER = (groupId: number, userId: number) =>
  `/Group/DeleteGroupUser/${groupId}/${userId}`;
export const DELETE_GROUP_CLAIM = (groupId: number, claimId: number) =>
  `/Group/DeleteGroupClaim/${groupId}/${claimId}`;
