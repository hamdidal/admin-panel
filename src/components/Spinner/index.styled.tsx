import { Backdrop, CircularProgress, styled } from '@mui/material'
import { colors } from '../../styles/color'

export const CustomSpinner = styled(CircularProgress)({
    color: colors.black.default,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
})

export const CustomBackdrop = styled(Backdrop)(({ theme }) => ({
    zIndex: `${theme.zIndex.drawer + 1}`,
}))
