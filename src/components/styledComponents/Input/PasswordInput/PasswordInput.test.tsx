import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import PasswordInput from './PasswordInput'

describe('PasswordInput', () => {
    it('toggles password visibility when the toggle button is clicked', () => {
        render(<PasswordInput />)

        const passwordInput = screen.getByTestId('password-input') as HTMLInputElement

        expect(passwordInput.type).toBe('password')

        const toggleButton = screen.getByRole('button')

        fireEvent.click(toggleButton)

        expect(passwordInput.type).toBe('text')

        fireEvent.click(toggleButton)

        expect(passwordInput.type).toBe('password')
    })
})
