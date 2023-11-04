import { render, screen } from '@testing-library/react'
import AutocompleteContainer from './Autocomplete'

describe('AutocompleteContainer', () => {
    test('renders AutocompleteContainer with options', () => {
        const options = [
            { value: 'option1', label: 'Option 1' },
            { value: 'option2', label: 'Option 2' },
            { value: 'option3', label: 'Option 3' },
        ]
        render(<AutocompleteContainer options={options} />)

        const autocompleteInput = screen.getAllByTestId('auto-complete')
        expect(autocompleteInput).toBeTruthy()
    })
})
