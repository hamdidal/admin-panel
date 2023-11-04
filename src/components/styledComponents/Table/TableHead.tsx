import React from 'react'
import { TableRow, TableHead } from '@mui/material'


import { CustomTableCell } from './Table.styled'
import { TableHeadRowProps } from './types'
import Typography from '../Typography/Typography'
import CheckBox from '../Buttons/Checkbox/Checkbox'
import { colors } from '../../../styles/color'

const TableHeadCellCreator: React.FunctionComponent<{ data: TableHeadRowProps; isDetail: boolean }> = ({ data, isDetail }) => {
    return (
        <>
            {isDetail && <CustomTableCell></CustomTableCell>}
            {data.map((h) => (
                <CustomTableCell align="left" key={Math.random()} width={h.width}>
                    <Typography color="#4C4E64" variant="body-smaller-light">
                        {h.headerName}
                    </Typography>
                </CustomTableCell>
            ))}
        </>
    )
}

const TableHeadComponent: React.FunctionComponent<{
    checkbox: boolean | undefined
    radioButton: boolean | undefined
    head: TableHeadRowProps
    isDetail: boolean
    onSelectAll?: (param: boolean) => void
    isAllSelected?: boolean
}> = ({ checkbox, head, radioButton, isDetail, onSelectAll, isAllSelected = false }) => {
    return (
        <TableHead sx={{ backgroundColor: colors.tableBackground }}>
            <TableRow>
                {onSelectAll && checkbox && (
                    <CustomTableCell padding="checkbox" sx={{}}>
                        <CheckBox
                            size="small"
                            onChange={(e) => {
                                if (onSelectAll) onSelectAll(e.target.checked)
                            }}
                            checked={isAllSelected}
                            labelPlacement="start"
                        />
                    </CustomTableCell>
                )}
                {radioButton && <CustomTableCell padding="checkbox" />}
                <TableHeadCellCreator data={head} isDetail={isDetail} />
            </TableRow>
        </TableHead>
    )
}

export default TableHeadComponent
