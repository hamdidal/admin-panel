import { styled } from '@mui/material'
interface Props {
    weight: number
    color: string
    size: number | string
    width: string | number
    isLineClamp?: boolean
    lineClampRow?: number
}
export const CustomTypography = styled('div')((props: Props) => {
    let clampSettings = {
        overflow: 'hidden',
        '-webkit-box-orient': 'vertical',
        '-webkit-line-clamp': String(props.lineClampRow) ?? String(3),
        display: '-webkit-box',
    }
    let clampCss = props.isLineClamp ? clampSettings : { display: 'inline-block' }

    return {
        fontWeight: props.weight,
        color: props.color,
        fontSize: props.size,
        minWidth: props.width,
        letterSpacing: '0.03em',
        ...clampCss,
    }
})
