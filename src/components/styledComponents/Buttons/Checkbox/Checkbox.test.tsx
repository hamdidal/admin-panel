import React from 'react'
import { screen, render, fireEvent } from '@testing-library/react'
import CheckBox from './Checkbox'

describe('Checkbox Component', () => {
    test('Checkbox label test', () => {
        const label = 'label text'
        render(<CheckBox label={label} />)
        const checkBoxElement = screen.getByLabelText(label)
        expect(checkBoxElement).toBeInTheDocument()
    })

    test('Checkbox onchange test', () => {
        const onChangeMock = jest.fn()
        render(<CheckBox onChange={onChangeMock} />)
        const checkBoxElement = screen.getByRole('checkbox')
        fireEvent.click(checkBoxElement)
        expect(onChangeMock).toHaveBeenCalled()
        expect(onChangeMock).toHaveBeenCalledTimes(1)
    })

    test('Checkbox value test', () => {
        const value = 'example-value'
        render(<CheckBox value={value} />)
        const checkBoxElement = screen.getByRole('checkbox')
        expect(checkBoxElement).toHaveAttribute('value', value)
    })

    test('Checkbox name test', () => {
        const name = 'example-name'
        render(<CheckBox name={name} />)
        const checkBoxElement = screen.getByRole('checkbox')
        expect(checkBoxElement).toHaveAttribute('name', name)
    })

    test('Checkbox disabled test', () => {
        render(<CheckBox disabled />)
        const checkBoxElement = screen.getByRole('checkbox')
        expect(checkBoxElement).toBeDisabled()
    })

    test('Checkbox checked test', () => {
        const checked = true
        render(<CheckBox checked={checked} />)
        const checkBoxElement = screen.getByRole('checkbox')
        expect(checkBoxElement).toBeChecked()
    })

    test('Checkbox color test', () => {
        const color = 'primary'
        render(<CheckBox color={color} />)
        const checkBoxElement = screen.getByRole('checkbox')
        expect(checkBoxElement).toHaveStyle(`color: ${color}`)
    })
})
