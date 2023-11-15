export const GET_TOUR_ALL = "/Tour/GetList";
export const GET_TOUR_BY_ID = (id: number) => `/Tour/GetByIdTours/${id}`;
export const GET_TOUR_IMAGES_BY_ID = (id: number) =>
  `/Tour/GetTourByIdImage/${id}`;
export const POST_ADD_TOUR = "/Tour/Add";
export const POST_ADD_TOUR_IMAGE = "/Tour/AddTourImage";
export const PUT_UPDATE_TOUR = "/Tour/Update";
export const DELETE_TOUR = (id: number) => `/Tour/DeleteTour/${id}`;
export const DELETE_TOUR_IMAGE = (id: number) => `/Tour/DeleteTourImage/${id}`;
