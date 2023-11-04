import { render, screen } from '@testing-library/react'
import Table from '../Table'
import { TableBodyRowDataProps, TableHeadRowProps } from '../types'
import { EditOutlined } from '@mui/icons-material'
import { colors } from '../../../styles/color'
import List from '../../List/List'
import React from 'react'

const testSetup = () => {
    const head = [
        { field: '', headerName: 'Name' },
        { field: '', headerName: 'Age' },
        { field: '', headerName: 'Location' },
    ] as TableHeadRowProps

    const menu = (
        <List
            listDetails={[{ name: 'Görüntüle', icon: <EditOutlined style={{ color: colors.action.actionActiveLight }} />, onClick: () => jest.fn() }]}
            width="230px"
            minWidth="inherit"
            gap="10px"
            listPadding="15px"
            itemButtonPadding="0px"
            ListContainerPadding="0px 10px"
            ListTextPadding="5px 0px"
            backgroundColor={colors.white.default}
            boxShadow="0px 5px 5px -3px #4C4E6424, 0px 8px 10px 1px #4C4E6424, 0px 3px 14px 2px #4C4E6433"
            isTableActions={true}
        />
    )

    const rowsData = [
        {
            name: 'John Doe',
            age: 25,
            location: 'New York',
            detail: 'Additional details',
            selectableId: 1,
            menu: menu,
        },
        {
            name: 'Jane Smith',
            age: 30,
            location: 'London',
            detail: 'Additional details',
            selectableId: 2,
            menu: menu,
        },
    ] as TableBodyRowDataProps
    const utils = render(
        <Table
            page={0}
            count={10}
            result={10}
            onPageChange={() => jest.fn()}
            head={head}
            rowsData={rowsData}
            checkBox={true}
            menu={true}
            isLoading={false}
            radioButton={false}
            pagination={true}
            onChange={() => jest.fn()}
            onSelected={() => jest.fn()}
            initialRadioButtonValue={undefined}
            onRowsPerPageChange={() => jest.fn()}
            onSelectAll={() => jest.fn()}
            selectedIds={[]}
            isClickable={true}
        />
    )

    return { head, rowsData, menu, utils }
}

beforeEach(() => {
    testSetup()
})

test('[TABLE] check column', () => {
    // testSetup()
    expect(screen.getByText('Name')).toBeInTheDocument()
    expect(screen.getByText('Age')).toBeInTheDocument()
    expect(screen.getByText('Location')).toBeInTheDocument()
})

test('[TABLE] check rows', () => {
    // testSetup()
    expect(screen.getByText('John Doe')).toBeInTheDocument()
    expect(screen.getByText('25')).toBeInTheDocument()
    expect(screen.getByText('New York')).toBeInTheDocument()
})

test('[TABLE] check loading', () => {
    expect(screen.queryByText('Loading...')).toBeNull()
})

test('[TABLE] check no data found', () => {
    expect(screen.queryByText('No data found.')).toBeNull()
})
