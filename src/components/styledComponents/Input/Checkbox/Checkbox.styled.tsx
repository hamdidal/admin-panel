import { Checkbox, FormControlLabel, styled } from '@mui/material'
import { colors } from '../../../../styles/color'


export const CustomCheckbox = styled(Checkbox)({
    '&.MuiCheckbox-root ': {
        color: colors.black.default,
    },
    '&.Mui-checked': {
        color: colors.primary.primaryMain,
    },
})
export const CustomFormControlLabel = styled(FormControlLabel)({
    color: colors.white.default,
    '> .MuiTypography-root': {
        fontSize: '14px !important',
    },
})
