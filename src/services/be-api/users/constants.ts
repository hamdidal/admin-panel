export const GET_USERS_ALL = "/Users/GetList";
export const GET_USER_BY_ID = "/Users/GetById";
export const GET_USERS_CLAIM = (id: number) => `/Users/GetUserClaimList/${id}`;
export const PUT_USER_ADMIN = "/Users/AdminUserUpdate";
export const PUT_USER = "/Users/Update";
export const CHANGE_PASSWORD = "Users/ChangePassword";
export const ADD_USER_CLAIM = "/Users/UserClaimAdd";
export const DELETE_USER = (id: number) => `/Users/Delete/${id}`;
export const DELETE_USER_CLAIM = (userId: number, claimId: number) =>
  `/Users/DeleteUserClaim/${userId}/${claimId}`;
