import { FieldError } from 'react-hook-form'

export type OptionType = {
    src?: string
    value: string | number
    name: string | number
}

export type SelectProps = {
    labelId?: string
    position?: 'left' | 'top'
    label?: string
    multiple?: boolean
    name?: string
    helperText?: string
    id?: string
    expand?: boolean
    width?: string
    size?: 'small' | 'medium'
    onError?: FieldError
    placeholder?: string
    options?: OptionType[]
    onChange?: (data: string | number | null, k: SelectChangeEvent<unknown>) => void
    startAdornment?: string
    selectedValue?: string | number | string[] | number[]
    clearValue?: boolean
    minWidth?: string
    variant?: 'filled' | 'outlined' | 'standard'
    disabled?: boolean
}
