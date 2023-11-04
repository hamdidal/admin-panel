import React from 'react'

// import { GeneralIconProps } from './types'

export type GeneralIconProps = {
    color?: string
    width?: number
    height?: number
}

const ArrowRight: React.FunctionComponent<GeneralIconProps> = ({ width = 14, height = 14 }) => {
    return (
        <svg width={width} height={height} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.99998 0.333374L5.82498 1.50837L10.475 6.16671H0.333313V7.83337H10.475L5.82498 12.4917L6.99998 13.6667L13.6666 7.00004L6.99998 0.333374Z" fill="white" />
        </svg>
    )
}

export default ArrowRight
