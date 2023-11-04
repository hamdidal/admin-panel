import { GeneralIconProps } from 'assets/icons/types'
import React, { FunctionComponent } from 'react'

export type IconProps = {
    icon?: string | React.ReactNode | FunctionComponent<GeneralIconProps>
    width?: number | string
    height?: number | string
}
