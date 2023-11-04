import React from 'react'

import { CustomLinearProgress } from './LinearProgress.styled'
import { LinearProgressProps } from './types'

const LinearProgress = ({ color, variant, value, valueBuffer }: LinearProgressProps) => {
    return <CustomLinearProgress color={color} variant={variant} value={value} valueBuffer={valueBuffer} />
}
export default LinearProgress
