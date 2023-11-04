import React from 'react'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import List from './List'

describe('List component', () => {
    const listDetails = [
        {
            name: 'Item 1',
            role: 'Role 1',
            subheader: 'Subheader 1',
            path: '/item1',
            icon: <i className="fa fa-icon" />,
            onClick: jest.fn(),
        },
        {
            name: 'Item 2',
            role: 'Role 2',
            subheader: 'Subheader 2',
            path: '/item2',
            icon: <i className="fa fa-icon" />,
            onClick: jest.fn(),
        },
    ]

    it('renders list items correctly', () => {
        render(
            <MemoryRouter>
                <List listDetails={listDetails} />
            </MemoryRouter>
        )

        const item1 = screen.getByText('Item 1')
        expect(item1).toBeInTheDocument()

        const item2 = screen.getByText('Item 2')
        expect(item2).toBeInTheDocument()
    })
})
