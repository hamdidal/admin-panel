export type SwitchProps = {
    onChange?: ((event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => void) | undefined
    label?: string | React.ReactNode
    labelPlacement?: 'bottom' | 'end' | 'start' | 'top'

    size?: 'small' | 'medium'
    color?: 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning'
    disabled?: boolean
    checked?: boolean
    defaultChecked?: boolean
    edge?: 'end' | 'start' | false
    id?: string
}
