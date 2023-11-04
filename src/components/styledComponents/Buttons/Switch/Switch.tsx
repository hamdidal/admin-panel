import React from 'react'

import { SwitchProps } from './types'
import { CustomFormControlLabel, CustomSwitch } from './Switch.styled'

const Switch: React.FunctionComponent<SwitchProps> = ({ onChange, label, labelPlacement, size, color, disabled, checked, defaultChecked, edge, id }) => {
    return (
        <CustomFormControlLabel
            labelPlacement={labelPlacement}
            label={label || ''}
            control={<CustomSwitch onChange={onChange} disabled={disabled} checked={checked} defaultChecked={defaultChecked} edge={edge} color={color} size={size} id={id} />}
        />
    )
}
export default Switch
