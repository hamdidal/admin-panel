import { styled, TextField } from '@mui/material'
import { ptr } from '../../../../utils/helpers'
import { colors } from '../../../../styles/color'


export const CustomTextFieldComponent = styled(TextField)((props) => ({
    width: props.size === 'medium' ? '100%' : 'fit-content',
    minWidth: props.size === 'medium' ? '220px' : 'fit-content',
    '& > div': {
        minHeight: props.size === 'medium' ? ptr(55) : ptr(38),
    },
    '&& label.Mui-focused': {
        color: colors.primary.primaryMain,
    },
    // focused color for input with variant='standard'
    '& .MuiInput-underline:after': {
        borderBottomColor: colors.primary.primaryMain,
    },
    // focused color for input with variant='filled'
    '& .MuiFilledInput-underline:after': {
        borderBottomColor: colors.primary.primaryMain,
    },
    // focused color for input with variant='outlined'
    '& .MuiOutlinedInput-root': {
        '&.Mui-focused fieldset': {
            borderColor: colors.primary.primaryMain,
        },
    },
    // disabled color for input
    '& .MuiInputBase-root.Mui-disabled': {
        backgroundColor: colors.disabled.disabledBackgroundColor,
    },
    // type = number olunca sağ tarafa gelen up down oklarını kaldırma işlemi
    '& .MuiInputBase-input::-webkit-outer-spin-button, & .MuiInputBase-input::-webkit-inner-spin-button': {
        appearance: 'none',
        margin: 0,
    },
}))
