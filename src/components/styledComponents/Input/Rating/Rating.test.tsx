import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import Rating from './Rating'
import { RatingProps } from './types'

const ratingProps: RatingProps = {
    label: 'Rating',
    size: 'medium',
    name: 'rating',
    selectedValue: 2,
    precision: 1,
}

it('renders the rating component', () => {
    render(<Rating {...ratingProps} />)
    const ratingElement = screen.getByText(`${ratingProps.selectedValue} Stars`)
    expect(ratingElement).toBeInTheDocument()
})

it('updates the rating value when the rating is changed', () => {
    render(<Rating {...ratingProps} />)
    const ratingInput = screen.getByLabelText('rating') as HTMLInputElement
    ratingInput.value = '3'
    fireEvent.change(ratingInput)
    expect(screen.getByText('3 Stars')).toBeInTheDocument()
})
