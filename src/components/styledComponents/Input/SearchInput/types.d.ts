export type SearchInputProps = {
    onChange: (value: string) => void
    value: string
    placeholder?: string
    type?: 'number' | 'text'
    fullHeight?: boolean
    fullWidth?: boolean
    height?: string
}
