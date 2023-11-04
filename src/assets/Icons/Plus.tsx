import React from 'react'

// import { GeneralIconProps } from './types'

export type GeneralIconProps = {
    color?: string
    width?: number
    height?: number
}
const Plus: React.FunctionComponent<GeneralIconProps> = ({ width = 14, height = 14, color }) => {
    return (
        <svg width={width} height={height} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14 8H8V14H6V8H0V6H6V0H8V6H14V8Z" fill={color ? color : 'white'} />
        </svg>
    )
}

export default Plus
