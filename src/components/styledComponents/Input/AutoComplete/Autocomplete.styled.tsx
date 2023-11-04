import { Autocomplete, styled } from '@mui/material'

export const CustomAutocomplete = styled(Autocomplete)((props) => ({
    width: props.size === 'medium' ? '100%' : 'fit-content',
    minWidth: props.size === 'medium' ? '220px' : 'fit-content',
    height: '100%',
    '& .MuiFormControl-root > div': {
        height: '100%',
    },
    '& > .MuiBox-root  .MuiAutocomplete-tag': {
        border: '1px solid rgba(76, 78, 100, 0.22)',
        backgroundColor: 'transparent',
    },
}))
