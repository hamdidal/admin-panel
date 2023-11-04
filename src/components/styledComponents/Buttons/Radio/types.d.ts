export type RadioProps = {
    label?: string
    labelPlacement?: 'bottom' | 'end' | 'start' | 'top'

    size?: 'small' | 'medium'
    checked?: boolean
    disabled?: boolean
    fontSize?: number
    color?: 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning' | 'default'
    value?: any
    id?: string
    name?: string
    onChange?: (e: string, k: React.ChangeEvent<HTMLInputElement>) => void
}
