import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import CheckBox from './Checkbox'

describe('CheckBox', () => {
    test('renders without errors', () => {
        render(<CheckBox />)
    })

    test('renders with label', () => {
        render(<CheckBox label="Test Label" />)
        const labelElement = screen.getByText('Test Label')
        expect(labelElement).toBeInTheDocument()
    })

    test('handles onChange event correctly', () => {
        const handleChange = jest.fn()
        render(<CheckBox onChange={handleChange} />)

        const checkbox = screen.getByTestId('test-checkbox-input')
        fireEvent.click(checkbox)

        expect(handleChange).toHaveBeenCalled()
    })
    test('value', () => {
        render(<CheckBox value={4} />)

        const checkbox = screen.getByTestId('test-checkbox-input')
        expect(checkbox).toBeInTheDocument()
    })
})
