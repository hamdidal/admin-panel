import { FieldError } from 'react-hook-form'

export type OptionType = {
    value: string | number
    label: string | number
}

export type AutocompleteProps = {
    name?: string
    label?: string
    multiple?: boolean
    limitTags?: number | undefined
    placeholder?: string
    id?: string
    fullWidth?: boolean
    width?: string
    height?: string
    size?: 'small' | 'medium'
    onError?: FieldError | undefined
    options?: ReadonlyArray<OptionType>
    onChange?: (data: string | number | null, event: React.ChangeEvent<{}>) => void
    selectedValue?: string | number | null
    getOptionDisabled?: UseAutocompleteProps<unknown, boolean | undefined, boolean | undefined, boolean | undefined>
    disabled?: boolean
}
