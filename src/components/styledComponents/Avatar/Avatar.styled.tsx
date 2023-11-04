import { Avatar, styled } from '@mui/material'

export const CustomAvatar = styled(Avatar)((props: { height: number; width: string | number; marginBottom: number }) => ({
    background: `linear-gradient(180deg, #BDBDBD 100%, #19C9EE 100%)`,
    width: props.width,
    height: props.height,
    marginBottom: props.marginBottom,
    fontSize: '16px',
}))
