import { render, screen } from '@testing-library/react'
import TableHeadComponent from '../TableHead'
import { GridColDef } from '@mui/x-data-grid'

test('TableHeadComponent renders correctly with checkbox and header cells', () => {
    const headData = [
        { field: 'Column 1', headerName: 'Column 1' },
        { field: 'Column 2', headerName: 'Column 2' },
        { field: 'Column 3', headerName: 'Column 3' },
    ] as GridColDef[]
    const checkbox = true
    const radioButton = false
    const isDetail = false
    const onSelectAll = jest.fn()
    const isAllSelected = false

    render(
        <table>
            <thead>
                <TableHeadComponent checkbox={checkbox} radioButton={radioButton} head={headData} isDetail={isDetail} onSelectAll={onSelectAll} isAllSelected={isAllSelected} />
            </thead>
        </table>
    )

    // Check if the checkbox is rendered
    expect(screen.getByRole('checkbox')).toBeInTheDocument()

    // Check if the header cells are rendered correctly
    expect(screen.getByText('Column 1')).toBeInTheDocument()
    expect(screen.getByText('Column 2')).toBeInTheDocument()
    expect(screen.getByText('Column 3')).toBeInTheDocument()
})

test('TableHeadComponent renders correctly without checkbox', () => {
    const headData = [
        { field: '', headerName: 'Column 1' },
        { field: '', headerName: 'Column 2' },
        { field: '', headerName: 'Column 3' },
    ]
    const checkbox = false
    const radioButton = false
    const isDetail = false

    render(
        <table>
            <thead>
                <TableHeadComponent checkbox={checkbox} radioButton={radioButton} head={headData} isDetail={isDetail} />
            </thead>
        </table>
    )

    // Check if the checkbox is not rendered
    expect(screen.queryByRole('checkbox')).not.toBeInTheDocument()

    // Check if the header cells are rendered correctly
    expect(screen.getByText('Column 1')).toBeInTheDocument()
    expect(screen.getByText('Column 2')).toBeInTheDocument()
    expect(screen.getByText('Column 3')).toBeInTheDocument()
})
