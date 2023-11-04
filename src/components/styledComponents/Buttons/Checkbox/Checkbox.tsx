import React from 'react'

import { CustomCheckbox, CustomFormControlLabel } from './Checkbox.styled'
import { CheckboxProps } from './types'

const CheckBox: React.FunctionComponent<CheckboxProps> = ({ label, labelPlacement, value, name, size, onChange, checked, indeterminate, disabled, fontSize, color }) => {
    return (
        <CustomFormControlLabel
            label={label || ''}
            labelPlacement={labelPlacement}
            control={
                <CustomCheckbox
                    checked={checked}
                    disabled={disabled}
                    indeterminate={indeterminate}
                    color={color}
                    value={value}
                    name={name}
                    sx={{ '& .MuiSvgIcon-root': { fontSize: fontSize } }}
                    size={size}
                    onChange={onChange}
                />
            }
        />
    )
}

export default CheckBox
