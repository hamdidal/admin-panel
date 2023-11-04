import { Backdrop, styled } from '@mui/material'

import { Positions } from './types'

export const Pop = styled('div')((props: { type: Positions }) => {
    return {
        display: 'block',
        position: 'absolute',
        left: `${props.type.x}px`,
        top: `${props.type.y}px`,
        minWidth: 'fit-content',
        borderRadius: '3px',
        zIndex: 1201,
    }
})
export const PopButtonContainer = styled('div')({
    display: 'flex',
    position: 'relative',
    width: 'min-content',
    height: 'min-content',
})
export const ButtonCapsule = styled('div')({
    display: 'flex',
    border: 'none',
    background: 'none',
    padding: 'none',
    margin: 'none',
})
export const CustomBackdrop = styled(Backdrop)({
    zIndex: 1200,
    backgroundColor: 'transparent',
})
