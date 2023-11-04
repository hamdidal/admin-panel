import { InputLabel, OutlinedInput, styled } from '@mui/material'
import { colors } from '../../../../styles/color'

export const CustomOutlinedInput = styled(OutlinedInput)((props) => ({
    width: props.size === 'medium' ? '100%' : 'fit-content',
    minWidth: props.size === 'medium' ? '220px' : 'fit-content',
    '&.Mui-focused': {
        border: '2px solid #FFAA00',
        '& .MuiOutlinedInput-notchedOutline': {
            border: 'none',
        },
    },
}))

export const CustomInputLabel = styled(InputLabel)(() => ({
    '&.Mui-focused': {
        color: colors.primary.primaryMain,
        backgroundColor: colors.white.default,

        '& .MuiOutlinedInput-notchedOutline': {
            color: colors.primary.primaryMain,
            backgroundColor: colors.white.default,
        },
    },
}))
