import React from 'react'
import { Routes, Route, Outlet, Navigate } from 'react-router-dom'

import RouterList from './Routes'
import useAuthStore from '../../context/auth-store'

const ProtectedRoute: React.FunctionComponent = () => {
    const accessToken = useAuthStore((state) => state.accessToken)

    return accessToken ? <Outlet /> : <Navigate to="/login" />
}

const RouterProvider: React.FunctionComponent = () => {
    const protectedRouters = RouterList.filter(({ pageType }) => {
        return pageType === 'protected'
    })

    const publicRouters = RouterList.filter(({ pageType }) => {
        return pageType === 'public'
    })

    return (
        <Routes>
            <Route path="/" element={<ProtectedRoute />}>
                {protectedRouters.map(({ Page, path }) => {
                    return <Route path={path} key={path} element={<Page />} />
                })}
            </Route>
            {publicRouters.map(({ Page, path }) => {
                return <Route path={path} key={path} element={<Page />} />
            })}
        </Routes>
    )
}

export default RouterProvider
