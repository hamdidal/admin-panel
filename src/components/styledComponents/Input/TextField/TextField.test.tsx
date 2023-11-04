import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import TextField from './TextField'

test('onChange event updates the input value', () => {
    const handleChange = jest.fn()
    render(<TextField label="Text" onChange={handleChange} />)

    const input = screen.getByLabelText('Text')
    fireEvent.change(input, { target: { value: 'Hello' } })

    expect(input).toHaveDisplayValue('Hello')
})

test('renders TextField component with placeholder', () => {
    const placeholderText = 'Enter text'
    render(<TextField placeholder={placeholderText} />)

    const input = screen.getByPlaceholderText(placeholderText)

    expect(input).toBeInTheDocument()
})

test('renders disabled TextField component', () => {
    const { container } = render(<TextField disabled />)

    // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
    const input = container.querySelector('input')

    expect(input).toBeDisabled()
})

test('renders multiline TextField component', () => {
    render(<TextField multiline />)

    const textarea = screen.getByRole('textbox')

    expect(textarea).toBeInTheDocument()
})
