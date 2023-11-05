import { Service } from "../../types";
import { Request } from "../../_base";
import {
  AddClaimVariables,
  GetAllClaimsServiceResponse,
  GetClaimByIdVariables,
  UpdateClaimVariables
} from "./types";
import { DELETE_CLAIM, GET_CLAIM_ALL, POST_ADD_CLAIM, PUT_UPDATE_CLAIM } from "./constants";

export const getAllClaims: Service<any> = () => {
  return Request.get<any, GetAllClaimsServiceResponse>(GET_CLAIM_ALL, {});
};

export const postAddClaim: Service<AddClaimVariables> = (data) => {
  return Request.post(POST_ADD_CLAIM, data, {});
};



export const putClaim: Service<UpdateClaimVariables> = (data) => {
  return Request.put(PUT_UPDATE_CLAIM, data, {});
};

export const deleteClaim: Service<GetClaimByIdVariables> = ({ id }) => {
  return Request.delete(DELETE_CLAIM(id), {});
};
