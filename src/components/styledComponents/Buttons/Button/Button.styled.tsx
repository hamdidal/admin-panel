import { Button, styled } from '@mui/material'
import { colors } from '../../../../styles/color'


export const CustomButton = styled(Button)((props) => ({
    borderRadius: '4px',
    fontSize: props.size === 'large' ? '15px' : props.size === 'medium' ? '14px' : '13px',
    height: props.size === 'large' ? '42px' : props.size === 'medium' ? '38px' : '30px',
    width: props.size !== 'medium' ? 'fit-content' : '104px',
    // width: 'fit-content',
    boxShadow: props.variant === 'contained' ? '0px 4px 8px -4px rgba(76, 78, 100, 0.42)' : 'none',
    // padding: props.size === 'large' ? '8px 2px' : props.size === 'medium' ? '7px 2px' : '4px 2px',
    padding: props.size === 'large' ? '8px 22px' : props.size === 'medium' ? '7px 2px' : '4px 2px',
    fontWeight: 500,
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',

    color:
        props.variant !== 'contained'
            ? props.color === 'secondary'
                ? colors.secondary.secondaryMain
                : props.color === 'success'
                ? colors.white.default
                : colors.primary.primaryMain
            : colors.white.default,
    backgroundColor:
        props.variant === 'contained'
            ? props.color === 'secondary'
                ? colors.secondary.secondaryMain
                : props.color === 'success'
                ? colors.success.successMain
                : props.color === 'error'
                ? colors.error.errorMain
                : colors.primary.primaryMain
            : colors.white.default,
    borderColor:
        props.variant === 'outlined'
            ? props.color === 'secondary'
                ? colors.secondary.secondaryOutlinedRestingBg
                : props.color === 'success'
                ? colors.success.successOutlinedRestingBg
                : colors.primary.primaryOutlinedRestingBg
            : props.color === 'secondary'
            ? colors.secondary.secondaryMain
            : props.color === 'success'
            ? colors.success.successMain
            : colors.primary.primaryMain,
    '&.Mui-disabled': {
        color: colors.action.actionDisabledLight,
    },

    ' &:hover': {
        boxShadow: props.variant === 'contained' ? '0px 4px 8px -4px rgba(76, 78, 100, 0.42)' : 'none',
        backgroundColor:
            props.variant === 'contained'
                ? props.color === 'secondary'
                    ? colors.secondary.secondaryContainedHoverBg
                    : props.color === 'success'
                    ? colors.success.successContainedHoverBg
                    : colors.primary.primaryContainedHoverBg
                : props.color === 'secondary'
                ? colors.secondary.secondaryOutlinedHoverBg
                : props.color === 'success'
                ? colors.success.successOutlinedHoverBg
                : colors.primary.primaryOutlinedHoverBg,
        borderColor:
            props.variant === 'contained'
                ? props.color === 'secondary'
                    ? colors.secondary.secondaryContainedHoverBg
                    : props.color === 'success'
                    ? colors.success.successContainedHoverBg
                    : colors.primary.primaryContainedHoverBg
                : props.color === 'secondary'
                ? colors.secondary.secondaryOutlinedRestingBg
                : props.color === 'success'
                ? colors.success.successOutlinedHoverBg
                : colors.primary.primaryOutlinedRestingBg,
    },
    ' &:active': {
        boxShadow: props.variant === 'contained' ? '0px 4px 8px -4px rgba(76, 78, 100, 0.42)' : 'none',
        backgroundColor:
            props.variant === 'contained'
                ? props.color === 'secondary'
                    ? colors.secondary.secondaryContainedHoverBg
                    : props.color === 'success'
                    ? colors.success.successContainedHoverBg
                    : colors.primary.primaryContainedHoverBg
                : props.color === 'secondary'
                ? colors.secondary.secondaryOutlinedHoverBg
                : props.color === 'success'
                ? colors.success.successOutlinedHoverBg
                : colors.primary.primaryOutlinedHoverBg,
        borderColor:
            props.variant === 'contained'
                ? props.color === 'secondary'
                    ? colors.secondary.secondaryContainedHoverBg
                    : props.color === 'success'
                    ? colors.success.successContainedHoverBg
                    : colors.primary.primaryContainedHoverBg
                : props.color === 'secondary'
                ? colors.secondary.secondaryOutlinedRestingBg
                : props.color === 'success'
                ? colors.success.successOutlinedHoverBg
                : colors.primary.primaryOutlinedRestingBg,
    },
    ' &:focus': {
        boxShadow: props.variant === 'contained' ? '0px 4px 8px -4px rgba(76, 78, 100, 0.42)' : 'none',
        backgroundColor:
            props.variant === 'contained'
                ? props.color === 'secondary'
                    ? colors.secondary.secondaryContainedHoverBg
                    : props.color === 'success'
                    ? colors.success.successContainedHoverBg
                    : colors.primary.primaryContainedHoverBg
                : props.color === 'secondary'
                ? colors.secondary.secondaryOutlinedHoverBg
                : props.color === 'success'
                ? colors.success.successOutlinedHoverBg
                : colors.primary.primaryOutlinedHoverBg,
        borderColor:
            props.variant === 'contained'
                ? props.color === 'secondary'
                    ? colors.secondary.secondaryContainedHoverBg
                    : props.color === 'success'
                    ? colors.success.successContainedHoverBg
                    : colors.primary.primaryContainedHoverBg
                : props.color === 'secondary'
                ? colors.secondary.secondaryOutlinedRestingBg
                : props.color === 'success'
                ? colors.success.successOutlinedHoverBg
                : colors.primary.primaryOutlinedRestingBg,
    },
}))
