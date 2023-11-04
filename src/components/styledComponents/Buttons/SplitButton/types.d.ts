export type SplitButtonProps = {
    handleClick: () => void
    handleMenuItemClick: (event: React.MouseEvent<HTMLLIElement, MouseEvent>, index: number) => void
    handleToggle: () => void
    handleClose: (event: Event) => void
    details: string[]
    ref?: React.RefObject<HTMLDivElement>
    open: boolean
    selectedIndex: number
    color?: 'inherit' | 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning'
}
