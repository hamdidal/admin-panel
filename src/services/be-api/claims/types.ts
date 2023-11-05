export interface AllClaimModel {
  id: number;
  name: string;

}

export interface AddClaimVariables {
  name: string;
}



export interface UpdateClaimVariables {
  id: number;
  name: string;
  isActive: boolean;
}

export interface UpdateClaimData {
  data: UpdateClaimVariables;
}

export interface ClaimDetailVariables {
  id: number;
}

export type GetAllClaimsServiceResponse = AllClaimModel;
export type GetClaimByIdVariables = ClaimDetailVariables;
