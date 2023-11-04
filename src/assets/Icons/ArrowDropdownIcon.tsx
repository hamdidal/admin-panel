import React from 'react'

// import { GeneralIconProps } from './types'
export type GeneralIconProps = {
    color?: string
    width?: number
    height?: number
}

const ArrowDropDownIcon: React.FunctionComponent<GeneralIconProps> = ({ width = 14, height = 14, color }) => {
    return (
        <svg width={width} height={height} viewBox="0 0 10 5" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.833328 0.333374L4.99999 4.50004L9.16666 0.333374H0.833328Z" fill={color ? color : 'white'} />
        </svg>
    )
}

export default ArrowDropDownIcon
