import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useJwt } from 'react-jwt'


import { GuardProviderProps } from './types'
import useAuthStore from '../../context/auth-store'

const Guard: React.FunctionComponent<GuardProviderProps> = ({ children }) => {
    const accessToken = useAuthStore((state) => state.accessToken) || ''
    const clearAccessToken = useAuthStore((state) => state.clearAccessToken)

    const { isExpired } = useJwt(accessToken)
    const location = useLocation()
    const navigate = useNavigate()

    useEffect(() => {
        if (accessToken) {
            if (isExpired) {
                clearAccessToken()
                navigate('/login')
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [location])

    return <div>{children}</div>
}

export default Guard
