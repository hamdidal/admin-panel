import { InputLabel, MenuItem, Select, styled } from '@mui/material'
import { colors } from '../../../../styles/color';

export const SelectContainer = styled('div')((props: { position: 'left' | 'top'; width: string | number }) => ({
    width: props.width,
    display: 'flex',
    flexDirection: props.position === 'top' ? 'column' : 'row',
    alignItems: props.position === 'left' ? 'center' : 'normal',
    gap: props.position === 'left' ? '10px' : '8px',
}))

export const CustomSelect = styled(Select)((props: { position: 'left' | 'top'; size: 'small' | 'medium' }) => ({
    width: '100%',
    minWidth: props.size === 'medium' ? '220px' : '100%',
    height: props.size === 'medium' ? '56px' : '38px',
    '&.Mui-focused': {
        '& .MuiOutlinedInput-notchedOutline': {
            border: '2px solid #FFAA00',
        },
        '& .MuiOutlinedInput-root': {
            '&.Mui-focused fieldset': {
                borderColor: colors.primary.primaryMain,
            },
        },
    },

    '&:before': {
        borderColor: colors.primary.primaryMain,
    },
    '&:after': {
        borderColor: colors.primary.primaryMain,
    },
}))
export const CustomInputLabel = styled(InputLabel)(() => ({
    '&.Mui-focused': {
        color: colors.primary.primaryMain,
        backgroundColor: colors.lightBackground,

        '& .MuiOutlinedInput-notchedOutline': {
            color: colors.primary.primaryMain,
            backgroundColor: colors.lightBackground,
        },
    },
}))
export const CustomMenuItem = styled(MenuItem)({
    // TODO: It will be updated according to the design
    // backgroundColor: '',
    // '&&.Mui-selected': '',
    // '&&:hover': '',
    // '&&.Mui-focusVisible': '',
})
