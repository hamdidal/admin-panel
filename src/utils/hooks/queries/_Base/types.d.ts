import { AxiosResponse } from 'axios'

export type UseBaseMutationParams = {
    onSuccess: {
        messageDisplay?: boolean
        message?: string
        callback?: () => void
    }
    onLoading: {
        messageDisplay?: boolean
        message?: string
        callback?: () => void
    }
    onError: {
        messageDisplay?: boolean
        message?: string
        callback?: () => void
    }
    service: (params: any) => Promise<AxiosResponse>
}

export type UseBaseQueryParams = {
    queryKeys: Array<string | number | boolean | object>
    onSuccess: {
        messageDisplay?: boolean
        message?: string
        callback?: () => void
    }
    onLoading: {
        messageDisplay?: boolean
        message?: string
        callback?: () => void
    }
    onError: {
        messageDisplay?: boolean
        message?: string
        callback?: () => void
    }
    service: (data?: any, params?: any) => Promise<AxiosResponse>
    enabled?: boolean
    cacheTime?: number | undefined
}
