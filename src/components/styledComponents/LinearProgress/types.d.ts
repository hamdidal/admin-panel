export interface LinearProgressProps {
    color?: 'error' | 'primary' | 'secondary' | 'info' | 'success' | 'warning'
    variant: 'determinate' | 'indeterminate' | 'buffer' | 'query' | undefined
    value: number
    valueBuffer?: number
}
