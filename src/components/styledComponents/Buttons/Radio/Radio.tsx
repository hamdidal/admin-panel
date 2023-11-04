import React from 'react'

import { CustomFormControlLabel, CustomRadio } from './Radio.styled'
import { RadioProps } from './types'

const Radio: React.FunctionComponent<RadioProps> = ({ label, labelPlacement, size, onChange, value, color, fontSize, checked, disabled, id, name }) => {
    return (
        <CustomFormControlLabel
            label={label || ''}
            labelPlacement={labelPlacement}
            value={value}
            control={
                <CustomRadio
                    color={color}
                    sx={{
                        '& .MuiSvgIcon-root': { fontSize: fontSize },
                    }}
                    size={size}
                    checked={checked}
                    disabled={disabled}
                    id={id}
                    name={name}
                    onChange={(e) => {
                        if (onChange) {
                            onChange(e.target.value, e)
                        }
                    }}
                    value={value}
                />
            }
        />
    )
}

export default Radio
