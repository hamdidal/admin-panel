import React from 'react'
import { GridColDef } from '@mui/x-data-grid'

export type TableHeadRowProps = GridColDef[]
export type TableBodyRowData = {
    [key: string]: number | string | React.ReactNode
    selectableId?: number
    detail?: React.ReactNode
    menu?: React.ReactNode
    rowColor?: string
    isRowColorful?: boolean
}
export type TableBodyRowDataProps = TableBodyRowData[]
export type TableProps = {
    head: TableHeadRowProps
    rowsData: TableBodyRowDataProps
    checkBox?: boolean
    menu?: boolean
    isLoading: boolean
    radioButton?: boolean
    onSelected?: (data: string) => void
    onChange?: (data: string) => void
    onPageChange?: (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => void
    pagination?: boolean
    initialRadioButtonValue?: string | number
    isClickable: boolean
    count?: number
    result?: number
    page?: number
    onRowsPerPageChange?: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
    onSelectAll?: (data: Array<string>) => void
    selectedIds?: string[]
}

export type TableIconProps = {
    isFaint: boolean
    icon: string | false
}
