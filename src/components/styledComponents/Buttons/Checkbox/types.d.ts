import React from 'react'

export type CheckboxProps = {
    label?: string | React.ReactNode
    labelPlacement?: 'bottom' | 'end' | 'start' | 'top'

    size?: 'small' | 'medium'
    value?: number | string
    checked?: boolean
    name?: string
    indeterminate?: boolean
    disabled?: boolean
    onChange?: ((event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => void) | undefined
    fontSize?: number
    color?: 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning' | 'default'
}
