export interface DataProps {
  data: any;
  isLoading: boolean;
  isSuccess: boolean;
  refetch?: any;
}

export interface AddGroupValues {
  name: string;
}

export interface AddGroupClaimValues {
  claimId: number[];
  groupId: number;
}

export interface AddGroupUsersValues {
  userId: number[];
  groupId: number;
}
