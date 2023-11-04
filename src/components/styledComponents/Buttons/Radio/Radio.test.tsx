import React from 'react'
import { screen, render, fireEvent } from '@testing-library/react'
import Radio from './Radio'

describe('Radio Component', () => {
    test('Radio label test', () => {
        const label = 'label text'
        render(<Radio label={label} />)
        const radioElement = screen.getByLabelText(label)
        expect(radioElement).toBeInTheDocument()
    })

    test('Radio onchange test', () => {
        const onChangeMock = jest.fn()
        const value = 'option1'
        render(<Radio onChange={onChangeMock} value={value} />)
        const radioElement = screen.getByRole('radio')
        fireEvent.click(radioElement)
        expect(onChangeMock).toHaveBeenCalled()
        expect(onChangeMock).toHaveBeenCalledTimes(1)
    })

    test('Radio value test', () => {
        const value = 'example-value'
        render(<Radio value={value} />)
        const radioElement = screen.getByRole('radio')
        expect(radioElement).toHaveAttribute('value', value)
    })

    test('Checkbox name test', () => {
        const name = 'example-name'
        render(<Radio name={name} />)
        const radioElement = screen.getByRole('radio')
        expect(radioElement).toHaveAttribute('name', name)
    })
    test('Checkbox id test', () => {
        const id = 'example-id'
        render(<Radio id={id} />)
        const radioElement = screen.getByRole('radio')
        expect(radioElement).toHaveAttribute('id', id)
    })

    test('Checkbox disabled test', () => {
        render(<Radio disabled />)
        const radioElement = screen.getByRole('radio')
        expect(radioElement).toBeDisabled()
    })

    test('Checkbox checked test', () => {
        const checked = true
        render(<Radio checked={checked} />)
        const radioElement = screen.getByRole('radio')
        expect(radioElement).toBeChecked()
    })

    test('Checkbox color test', () => {
        const color = 'primary'
        render(<Radio color={color} />)
        const radioElement = screen.getByRole('radio')
        expect(radioElement).toHaveStyle(`color: ${color}`)
    })
})
