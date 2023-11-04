import { Link as FormLink } from 'react-router-dom'
import { styled } from '@mui/material'

export const CustomForm = styled('div')((props: { gap: 'large' | 'small' }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
    gap: '16px',
    width: ' 100%',
}))

export const FormRow = styled('div')({
    display: 'flex',
    width: '100%',
})

export const FormActions = styled('div')({
    display: 'flex',
    width: '100%',
})

export const Link = styled(FormLink)({
    display: 'flex',
})
