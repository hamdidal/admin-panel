import { styled } from '@mui/material'
import { colors } from '../../../styles/color'
import Flatpickr from 'react-flatpickr'


export const DateRangePickerContainer = styled('div')({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
    width: '100%',
    border: '1px solid #c4c4c4',
    borderRadius: '4px',
    ':focus': {
        border: `1px solid ${colors.primary.primaryMain}`,
    },
})

export const DateRangePicker = styled(Flatpickr)({
    fontSize: '1rem',
    fontWeight: '400',
    padding: '0 8px 0 8px',
    letterSpacing: '-1px',
    height: '56px',
})

export const IconBox = styled('div')({
    minWidth: '1rem',
    //position: absolute;
    //left: 94%;
    //z-index: 99;
    cursor: 'pointer',
})
