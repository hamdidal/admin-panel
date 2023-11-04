import { FormControlLabel, Switch, styled } from '@mui/material'
import { colors } from '../../../../styles/color'


export const CustomSwitch = styled(Switch)((props) => ({
    '& .MuiSwitch-switchBase.Mui-checked': {
        color:
            props.color === 'primary'
                ? colors.primary.primaryMain
                : props.color === 'secondary'
                ? colors.secondary.secondaryMain
                : props.color === 'error'
                ? colors.error.errorMain
                : props.color === 'warning'
                ? colors.warning.warningMain
                : props.color === 'info'
                ? colors.info.infoMain
                : colors.success.successMain,
    },
    '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
        backgroundColor:
            props.color === 'primary'
                ? colors.primary.primaryMain
                : props.color === 'secondary'
                ? colors.secondary.secondaryMain
                : props.color === 'error'
                ? colors.error.errorMain
                : props.color === 'warning'
                ? colors.warning.warningMain
                : props.color === 'info'
                ? colors.info.infoMain
                : colors.success.successMain,
    },
}))

export const CustomFormControlLabel = styled(FormControlLabel)({
    color: colors.text.primaryTextLight,
})
