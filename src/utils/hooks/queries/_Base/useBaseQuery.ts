import { useEffect } from 'react'
import { useQuery } from 'react-query'

import useNotify from '../../notify/useNotify'
import { UseBaseQueryParams } from './types'
import { useNavigate } from 'react-router-dom'

const useBaseQuery = ({ queryKeys, onSuccess, onLoading, onError, service, enabled = true, cacheTime }: UseBaseQueryParams) => {
    const { notify } = useNotify()
    const navigate = useNavigate()
    const { data, isError, isSuccess, isLoading, error, refetch } = useQuery({
        queryKey: queryKeys,
        queryFn: service,
        refetchOnWindowFocus: false,
        enabled,
        cacheTime,
    })

    useEffect(() => {
        if (isLoading) {
            if (onLoading.messageDisplay) {
                notify({ message: onLoading.message || 'loading message' })
            }

            if (onLoading && onLoading.callback) {
                onLoading.callback()
            }
        }
        if (isSuccess) {
            if (onSuccess.messageDisplay) {
                notify({ message: onSuccess.message || 'success message' })
            }

            if (onSuccess && onSuccess.callback) {
                onSuccess.callback()
            }
        }
        if (isError) {
            const _error = error as { unAuthorizedRequest: boolean }
            if (_error?.unAuthorizedRequest) {
                navigate('/login')
            }
            if (onError.messageDisplay) {
                notify({
                    message: onError.message || (error as { error: { message: string } }).error.message,
                    type: 'warning',
                })
            }
            if (onError && onError.callback) {
                onError.callback()
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isError, isSuccess, isLoading])

    return { data, isError, isSuccess, isLoading, error, refetch }
}

export default useBaseQuery
