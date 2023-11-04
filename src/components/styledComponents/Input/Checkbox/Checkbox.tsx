import React, { forwardRef } from 'react'

import { CustomCheckbox, CustomFormControlLabel } from './Checkbox.styled'
import { CheckboxProps } from './types'

const CheckBox: React.FunctionComponent<CheckboxProps> = forwardRef(({ defaultChecked, label, value, size = 'small', onChange, checked }, ref) => {
    if (label) {
        return <CustomFormControlLabel inputRef={ref} label={label} control={<CustomCheckbox size={size} />} />
    }
    return (
        <CustomCheckbox
            value={value}
            size={size}
            data-testid={'checkbox'}
            checked={checked}
            inputProps={{
                // @ts-ignore
                'data-testid': 'test-checkbox-input',
            }}
            defaultChecked={defaultChecked}
            onChange={(event) => {
                if (onChange) {
                    onChange(event.currentTarget.value, event)
                }
            }}
        />
    )
})

export default CheckBox
