import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import Select from './Select'

test('Select component', () => {
    const options = [
        { name: 'Option 1', value: 'option1' },
        { name: 'Option 2', value: 'option2' },
        { name: 'Option 3', value: 'option3' },
    ]

    const onChange = jest.fn()

    render(<Select label="Select Option" placeholder="Select an option" options={options} onChange={onChange} />)

    const selectElement = screen.getByPlaceholderText('Select an option') as HTMLInputElement

    fireEvent.change(selectElement, { target: { value: 'option2' } })

    expect(onChange).toHaveBeenCalledTimes(1)
    expect(onChange).toHaveBeenCalledWith('option2', expect.anything())

    expect(selectElement.value).toBe('option2')
})
