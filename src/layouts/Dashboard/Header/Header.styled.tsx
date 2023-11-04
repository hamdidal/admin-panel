import styled from '@emotion/styled'
import { colors } from '../../../styles/color'

export const HeaderContainer = styled('div')({
    position: 'sticky',
    top: 0,
    display: 'flex',
    justifyContent: 'flex-end',
    backgroundColor: colors.lightBackground,
    padding: '0 0 16px 0',
    zIndex: 98,
})

export const HeaderMenu = styled('div')({
    color: colors.text.primaryTextLight,
    display: 'flex',
    alignItems: 'center',
    padding: '20px 35px 0px 0px ',
    gap: '12px',
})
