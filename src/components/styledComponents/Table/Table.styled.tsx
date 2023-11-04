import { Table, TableRow, styled, TableCell, Skeleton, Paper } from '@mui/material'
import { colors } from '../../../styles/color'


export const CustomTable = styled(Table)({
    '&.MuiTable-root': {
        backgroundColor: colors.white.default,
    },
})

export const CustomTableRow = styled(TableRow)({})

export const CustomTableCell = styled(TableCell)({
    '&.MuiTableCell-root': {
        color: colors.black.default,
        '& .Mui-checked': {
            color: colors.primary.primaryMain,
        },
    },
})

export const TableMenu = styled('div')({})

export const NotFoundTable = styled('div')({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '12px 0px',
    backgroundColor: colors.primary.primaryMain,
    gap: '4px',
})

export const TableRowSkeletonComponent = styled('div')({
    display: 'flex',
    justifyContent: 'space-around',
    backgroundColor: colors.black.default,
    borderBottom: `1px ${colors.black.default} solid`,
})

export const TableCellSkeleton = styled(Skeleton)({
    height: '60px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
})
export const TableSkeletonComponent = styled('div')({
    width: '100%',
})

export const TableIconContainer = styled('div')((props: { isFaint: boolean }) => ({
    '& > img': {
        opacity: props.isFaint ? 0.1 : 1,
    },
}))

export const TableCustomPaper = styled(Paper)({
    '& .css-8atqhb': {
        display: 'none',
    },
})
