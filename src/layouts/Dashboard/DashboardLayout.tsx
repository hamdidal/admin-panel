import React from 'react'
import { useNavigate } from 'react-router-dom'


import { DashboardContainer, DashboardContent, DashboardMain } from './Dashboard.styled'
import { DashboardLayoutProps } from './types'
import SideBar from './SideBar/SideBar'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import useAuthStore from '../../context/auth-store'
import useUserStore from '../../context/user-store'

const DashboardLayout: React.FunctionComponent<DashboardLayoutProps> = ({ children }) => {
    const clearAccessToken = useAuthStore((state) => state.clearAccessToken)

    const navigate = useNavigate()
    const user = useUserStore((state) => state.user)

    const handleLogOut = () => {
        navigate('/login')
        clearAccessToken()
    }

    return (
        <DashboardContainer>
            <SideBar />
            <DashboardMain>
                <Header logOut={handleLogOut} user={user} />
                <DashboardContent>
                    {children}
                    <Footer />
                </DashboardContent>
            </DashboardMain>
        </DashboardContainer>
    )
}

export default DashboardLayout
