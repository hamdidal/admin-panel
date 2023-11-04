import { render, screen } from '@testing-library/react'
import Card from './Card'

test('render card component', () => {
    render(<Card expanded onClick={() => jest.fn()} children={<div></div>} details={[]} />)
    const container = screen.getByTestId('card-container')
    expect(container).toBeInTheDocument()
})
