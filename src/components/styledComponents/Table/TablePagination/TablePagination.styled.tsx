import { Pagination, styled } from '@mui/material'
import { colors } from '../../../../styles/color'


export const TableMuiPagination = styled(Pagination)({
    display: 'flex',
    justifyContent: 'center',

    backgroundColor: colors.white.default,
    padding: '8px',
    '& > ul': {
        flexWrap: 'nowrap',
    },
    '& .MuiButtonBase-root': {
        color: colors.black.default,
    },
    '& .MuiPaginationItem-root': {
        color: '#4C4E64',
    },
    '& .Mui-selected': {
        backgroundColor: colors.white.default,
        color: '#4C4E64',
        fontWeight: 'bold',
    },
})
