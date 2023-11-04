import React from 'react'

// import { GeneralIconProps } from './types'

export type GeneralIconProps = {
    color?: string
    width?: number
    height?: number
}
const ShippingBox: React.FunctionComponent<GeneralIconProps> = ({ width = 22, height = 22, color }) => {
    return (
        <svg width={width} height={height} viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M10.1504 2.22253C10.4103 2.07819 10.7027 2.00244 11 2.00244C11.2973 2.00244 11.5897 2.07819 11.8496 2.22253L18.4253 5.87478C18.5616 5.95059 18.6752 6.06146 18.7542 6.19592C18.8333 6.33038 18.875 6.48354 18.875 6.63953V13.8452C18.8749 14.1572 18.7914 14.4636 18.6331 14.7325C18.4748 15.0014 18.2474 15.2231 17.9746 15.3747L11.8496 18.7784C11.5897 18.9227 11.2973 18.9985 11 18.9985C10.7027 18.9985 10.4103 18.9227 10.1504 18.7784L4.02537 15.3747C3.75269 15.2232 3.52543 15.0017 3.36713 14.7329C3.20882 14.4641 3.12523 14.1579 3.125 13.846V6.63953C3.12499 6.48354 3.16669 6.33038 3.24576 6.19592C3.32484 6.06146 3.43842 5.95059 3.57475 5.87478L10.1504 2.22253Z"
                stroke="#757575"
                stroke-width="1.7"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            <path d="M3.125 6.125L11 10.5M11 10.5L18.875 6.125M11 10.5V19.25" stroke="#757575" stroke-width="1.7" stroke-linejoin="round" />
            <path d="M7.0625 8.3125L14.9375 3.9375M5.75 10.787L8.375 12.25" stroke="#757575" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
    )
}
export default ShippingBox
