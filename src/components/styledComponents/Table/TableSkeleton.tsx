import React from 'react'

import { NotFoundTable, TableCellSkeleton, TableRowSkeletonComponent, TableSkeletonComponent } from './Table.styled'
import NotFoundComponent from '../NotFound/NotFound'

export const NotFound = () => {
    return (
        <NotFoundTable>
            <NotFoundComponent title="Bulunamadı" />
        </NotFoundTable>
    )
}

const TableRowSkeleton: React.FunctionComponent = () => {
    return (
        <TableRowSkeletonComponent>
            <TableCellSkeleton width="100%" variant="rectangular">
                loading
            </TableCellSkeleton>
            <TableCellSkeleton width="100%" variant="rectangular">
                loading
            </TableCellSkeleton>
            <TableCellSkeleton width="100%" variant="rectangular">
                loading
            </TableCellSkeleton>
            <TableCellSkeleton width="100%" variant="rectangular">
                loading
            </TableCellSkeleton>
            <TableCellSkeleton width="100%" variant="rectangular">
                loading
            </TableCellSkeleton>
        </TableRowSkeletonComponent>
    )
}

const TableSkeleton: React.FunctionComponent = () => {
    return (
        <TableSkeletonComponent>
            <TableRowSkeleton />
            <TableRowSkeleton />
            <TableRowSkeleton />
            <TableRowSkeleton />
            <TableRowSkeleton />
        </TableSkeletonComponent>
    )
}

export default TableSkeleton
