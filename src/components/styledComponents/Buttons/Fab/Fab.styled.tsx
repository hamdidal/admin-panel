import { Fab, styled } from '@mui/material'
import { colors } from '../../../../styles/color'


export const CustomFab = styled(Fab)((props) => ({
    backgroundColor: props.color ? colors.secondary.secondaryMain : colors.primary.primaryMain,
    color: colors.white.default,
    height: props.size === 'large' ? '50px' : props.size === 'medium' ? '40px' : '34px',
    width: props.size === 'large' ? '105px' : props.size === 'medium' ? '104px' : 'fit-content',
    variant: props.children ? 'extended' : 'circular',
    gap: '6px',

    '&.Mui-disabled': {
        backgroundColor: colors.action.actionDisabledLight,
        color: colors.action.actionDisabledLight,
    },

    '&:hover': {
        backgroundColor: props.color ? colors.secondary.secondaryContainedHoverBg : colors.primary.primaryContainedHoverBg,
    },
    '&:active': {
        backgroundColor: props.color ? colors.secondary.secondaryContainedHoverBg : colors.primary.primaryContainedHoverBg,
    },
    '&:focus': {
        backgroundColor: props.color ? colors.secondary.secondaryContainedHoverBg : colors.primary.primaryContainedHoverBg,
    },
}))
