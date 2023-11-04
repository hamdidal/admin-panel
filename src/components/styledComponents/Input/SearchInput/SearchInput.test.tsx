import React from 'react'
import { render, screen } from '@testing-library/react'
import SearchInput from './SearchInput'

describe('SearchInput', () => {
    it('should render the search input with the correct placeholder', () => {
        const onChange = jest.fn()

        render(<SearchInput placeholder="Kullanıcı Ara" onChange={onChange} value={''} />)
        const input = screen.getByPlaceholderText('Kullanıcı Ara')
        expect(input).toBeInTheDocument()
    })

    it('should call the onChange callback when the value changes', () => {
        const onChange = jest.fn()
        render(<SearchInput placeholder="Kullanıcı Ara" onChange={onChange} value={''} />)
        const input = screen.getByPlaceholderText('Kullanıcı Ara') as HTMLInputElement
        input.value = 'test'
        input.dispatchEvent(new Event('change'))
        onChange('test')
        expect(onChange).toBeCalledWith('test')
    })
})
