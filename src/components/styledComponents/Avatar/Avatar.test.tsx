import Avatar from './Avatar'
import { render, screen } from '@testing-library/react'

describe('Avatar', () => {
    it('short name', () => {
        const name = 'John Doe'
        render(<Avatar name={name} />)
        const avatar = screen.getByText('JD')
        expect(avatar).toBeInTheDocument()
    })

    it('long name', () => {
        render(<Avatar name="Ali Emre Safak" />)
        const avatar = screen.getByText('AE')
        expect(avatar).toBeInTheDocument()
    })

    it('image avatar', () => {
        const imageUrl = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
        render(<Avatar src={imageUrl} />)
        const avatar = screen.getByRole('img')
        expect(avatar).toHaveAttribute('src', imageUrl)
    })
})
