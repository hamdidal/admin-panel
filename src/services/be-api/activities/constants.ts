export const GET_ACTIVITY_ALL = "/Activities/GetList";
export const GET_ACTIVITY_BY_ID = "/Activities/GetById";
export const POST_ADD_ACTIVITY = "/Activities/Add";
export const POST_ADD_ACTIVITY_IMAGE = "/Activities/AddActivitiesImage";
export const PUT_UPDATE_ACTIVITY = "/Activities/Update";
export const DELETE_ACTIVITY = (id: number) => `/Activities/Delete/${id}`;
export const DELETE_ACTIVITY_IMAGE = (id: number) => `/Activities/DeleteActivitiesImage/${id}`;

