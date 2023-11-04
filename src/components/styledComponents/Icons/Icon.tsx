import React from 'react'

import { CustomIcon } from './Icon.styled'
import { IconProps } from './types'

const Icon: React.FunctionComponent<IconProps> = ({ icon, width, height }) => {
    if (typeof icon === 'string') {
        return <CustomIcon src={icon} alt="icon" width={width} height={height} />
    }
    return <> {icon} </>
}
export default Icon
