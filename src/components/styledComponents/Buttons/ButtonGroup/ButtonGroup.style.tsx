import { ButtonGroup, styled } from '@mui/material'
import { colors } from '../../../../styles/color'

export const CustomGroup = styled(ButtonGroup)({
    width: '100%',
    borderRadius: '10px',
    backgroundColor: colors.white.default,
    boxShadow: '0px 5px 5px -3px rgba(76, 78, 100, 0.2), 0px 8px 10px 1px rgba(76, 78, 100, 0.14), 0px 3px 14px 2px rgba(76, 78, 100, 0.12)',
    '> button': {
        width: '100%',
    },
})
