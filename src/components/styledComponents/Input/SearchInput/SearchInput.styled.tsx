import { styled, TextField } from '@mui/material'
import { colors } from '../../../../styles/color'

export const CustomSearchInput = styled(TextField)(() => ({
    borderColor: colors.primary.primaryMain,
    '& > div': {
        fontWeight: '400',
        paddingRight: '12px',
        fontSize: '14px',
        color: colors.black.default,
    },
    '& .MuiOutlinedInput-root': {
        '&:hover fieldset': {
            borderColor: colors.text.disabledTextLight,
        },
        '&.Mui-focused fieldset': {
            borderColor: colors.primary.primaryMain,
        },
    },
}))
