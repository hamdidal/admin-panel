import { LinearProgress, styled } from '@mui/material'
import { colors } from '../../../styles/color'

export const CustomLinearProgress = styled(LinearProgress)({
    color: 'red',
    '&.MuiLinearProgress-colorPrimary': {
        background: '#FFDD99',
    },
    '& .MuiLinearProgress-bar': {
        background: colors.primary.primaryMain,
    },
})
