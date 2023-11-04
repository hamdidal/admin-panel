import React from 'react'

// import { GeneralIconProps } from './types'

export type GeneralIconProps = {
    color?: string
    width?: number
    height?: number
}
const Diamond: React.FunctionComponent<GeneralIconProps> = ({ width = 22, height = 22, color }) => {
    return (
        <svg width={width} height={height} viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.40625 4.375H15.5938L18.6562 8.23594L11 17.5L3.34375 8.23594L6.40625 4.375Z" stroke="#757575" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
    )
}
export default Diamond
