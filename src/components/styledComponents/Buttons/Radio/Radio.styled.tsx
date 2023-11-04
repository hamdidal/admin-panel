import { Radio, FormControlLabel, styled } from '@mui/material'
import { colors } from '../../../../styles/color'


export const CustomRadio = styled(Radio)((props) => ({
    '&.MuiRadio-root ': {
        color: colors.action.actionActiveLight,
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
    margin: 0,
})
