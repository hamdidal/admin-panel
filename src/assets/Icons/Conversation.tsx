import React from 'react'

// import { GeneralIconProps } from './types'

export type GeneralIconProps = {
    color?: string
    width?: number
    height?: number
}
const Conversation: React.FunctionComponent<GeneralIconProps> = ({ width = 22, height = 22, color }) => {
    return (
        <svg width={width} height={height} viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M14.5 12.25H14.9375C15.6611 12.25 16.25 11.6611 16.25 10.9375V3.0625C16.25 2.33887 15.6611 1.75 14.9375 1.75H3.5625C2.83887 1.75 2.25 2.33887 2.25 3.0625V15.75L6.91638 12.25H14.5ZM6.33362 10.5L4 12.25V3.5H14.5V10.5H6.33362Z"
                fill="#757575"
            />
            <path
                d="M18.4375 7H18V12.2509C18 13.2134 17.2186 13.9948 16.2587 14H7.5V14.4375C7.5 15.1611 8.08887 15.75 8.8125 15.75H15.0836L19.75 19.25V8.3125C19.75 7.58887 19.1611 7 18.4375 7Z"
                fill="#757575"
            />
        </svg>
    )
}
export default Conversation
