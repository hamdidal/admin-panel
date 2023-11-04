import { useBaseQuery } from "../_Base";
import { Query } from "../types";
import groupsServices from "../../../../services/be-api/groups";
import { GetAllGroupsServiceResponse } from "../../../../services/be-api/groups/types";

export const useGetAllGroups: Query<any, GetAllGroupsServiceResponse> = (
  params
) => {
  return useBaseQuery({
    queryKeys: ["group", { params: params.queryKeys }],
    service: groupsServices.getAllGroups,
    onSuccess: {
      messageDisplay: false,
      message: "Succesfully, get all users",
    },
    onLoading: {
      messageDisplay: false,
      message: "Loading",
    },
    onError: {
      messageDisplay: false,
    },
    enabled: params.enabled,
  });
};
