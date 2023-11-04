import React from 'react'

export type CheckboxProps = {
    label?: string | React.ReactNode
    size?: 'small' | 'medium'
    value?: number | string
    checked?: boolean
    onChange?: (id: string, event?: React.ChangeEvent<HTMLInputElement>) => void
    name?: string
    defaultChecked?: boolean
}
