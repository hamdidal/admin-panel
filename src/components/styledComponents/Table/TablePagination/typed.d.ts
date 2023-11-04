export type TablePaginationProps = {
    count: number
    page: number
    onChange: (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => void
    result?: number
    rowsPerPageOptions?: string[]
    onRowsPerPageChange?: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
}
