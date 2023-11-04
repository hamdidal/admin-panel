import { Checkbox, FormControlLabel, styled } from '@mui/material'
import { colors } from '../../../../styles/color'


export const CustomCheckbox = styled(Checkbox)((props) => ({
    '&.MuiCheckbox-root ': {
        color: colors.text.secondaryTextLight,
    },
    '&.Mui-checked': {
        color: props.color ? colors.secondary.secondaryMain : colors.primary.primaryMain,
    },
    '&.Mui-disabled': {
        color: colors.action.actionDisabledLight,
    },
}))
export const CustomFormControlLabel = styled(FormControlLabel)({
    color: colors.text.primaryTextLight,
    '& .MuiTypography-root.MuiTypography-body1.MuiFormControlLabel-label.Mui-disabled.MuiTypography-root': {
        color: colors.text.disabledTextLight,
    },
})
