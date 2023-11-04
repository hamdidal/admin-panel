export const GET_HOTEL_ALL = (id: number) => `/Hotel/GetListByCityId/${id}`;
export const POST_ADD_HOTEL = "/City/AddCityHotel";
export const PUT_UPDATE_HOTEL = "/Hotel/Update";
export const DELETE_CITY_HOTEL = (hotelId: number, cityId: number) =>
  `/City/DeleteCityHotel/${hotelId}/${cityId}`;
