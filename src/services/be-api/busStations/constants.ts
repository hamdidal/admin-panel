export const GET_STATION_ALL = (id: number) =>
  `/Terminal/GetListByCityId/${id}`;
export const POST_ADD_TERMINAL = "/Terminal/Add";
export const PUT_UPDATE_TERMINAL = "/Terminal/Update";
export const DELETE_TERMINAL = (id: number) => `/Terminal/Delete/${id}`;
