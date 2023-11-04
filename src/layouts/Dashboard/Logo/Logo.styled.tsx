import styled from '@emotion/styled'
import { Link } from 'react-router-dom'
import { colors } from '../../../styles/color'

export const LogoContainer = styled('div')({
    // display: 'flex',
    width: '232px',
    padding: '20px 0px 18px 20px',
})

export const LogoLink = styled(Link)({
    color: colors.text.primaryTextLight,
    fontSize: '1.25rem',
    fontFamily: 'eras-demi-itc',
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
})
