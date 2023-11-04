import styled from '@emotion/styled'
import { colors } from '../../../styles/color'

export const SideBarContainer = styled('div')({
    position: 'fixed',
    width: '260px',
    height: '100vh',
    backgroundColor: colors.lightBackground,
    zIndex: 99,
    overflowY: 'auto',
    overflowX: 'hidden',
})
