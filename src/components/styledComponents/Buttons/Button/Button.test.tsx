import React from 'react'
import { screen, render, fireEvent } from '@testing-library/react'
import Button from './Button'
import { IosShare } from '@mui/icons-material'

describe('Button Component', () => {
    test('button children test', () => {
        const buttonText = 'Submit'
        render(<Button>{buttonText}</Button>)
        const buttonElement = screen.getByText(buttonText)
        expect(buttonElement).toBeInTheDocument()
    })
    test('button onclick test', () => {
        const onClickMock = jest.fn()
        render(<Button onClick={onClickMock}>Submit</Button>)
        const buttonElement = screen.getByText('Submit')
        fireEvent.click(buttonElement)
        expect(onClickMock).toHaveBeenCalled()
        expect(onClickMock).toHaveBeenCalledTimes(1)
    })
    test('button disable test', () => {
        render(<Button disabled>Submit</Button>)
        const buttonElement = screen.getByText('Submit')
        expect(buttonElement).toBeDisabled()
    })

    test('button startIcon test', () => {
        const startIcon = <IosShare data-testid="start-icon" />
        render(<Button startIcon={startIcon}>Submit</Button>)
        const startIconElement = screen.getByTestId('start-icon')
        expect(startIconElement).toBeInTheDocument()
    })
    test('button endIcon test', () => {
        const endIcon = <IosShare data-testid="end-icon" />
        render(<Button endIcon={endIcon}>Submit</Button>)
        const endIconElement = screen.getByTestId('end-icon')
        expect(endIconElement).toBeInTheDocument()
    })

    test('button submit type test', () => {
        render(<Button type="submit">Submit</Button>)
        const buttonElement = screen.getByText('Submit')
        expect(buttonElement.getAttribute('type')).toBe('submit')
    })

    test('button button type test', () => {
        render(<Button type="button">Click me</Button>)
        const buttonElement = screen.getByText('Click me')
        expect(buttonElement.getAttribute('type')).toBe('button')
    })
})
