import {
  QueryObserverResult,
  RefetchOptions,
  RefetchQueryFilters,
  UseMutateFunction,
} from "react-query";
import { AxiosResponse } from "axios";

export type MutationParams = {
  onSuccess?: () => void;
  onError?: () => void;
  onLoading?: () => void;
};
export type QueryParams = {
  queryKeys: object;
  onSuccess?: () => void;
  onError?: () => void;
  onLoading?: () => void;
  enabled?: boolean;
};

export type Query<Params, Res> = (params: QueryParams) => {
  data: AxiosResponse<ServerResponse<Res>, ServerResponse<Res>> | undefined;
  isError: boolean;
  isSuccess: boolean;
  isLoading: boolean;
  error: unknown;
  refetch: <TPageData>(
    options?:
      | (RefetchOptions & RefetchQueryFilters<TPageData> & Params)
      | undefined
  ) => Promise<
    QueryObserverResult<
      AxiosResponse<ServerResponse<Res>, ServerResponse<Res>>,
      unknown
    >
  >;
};

export type Mutation<Variables, Res> = (params?: MutationParams) => {
  mutate: UseMutateFunction<
    AxiosResponse<ServerResponse<Res>, ServerResponse<Res>>,
    unknown,
    Variables,
    unknown
  >;
  data: AxiosResponse<ServerResponse<Res>, data<Res>> | undefined;
  isError: boolean;
  isSuccess: boolean;
  isLoading: boolean;
  error: unknown;
};
export type data<T> = {
  success: boolean;
  version: string;
  token: T;
};
