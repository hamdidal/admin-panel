import { fireEvent, render, screen } from '@testing-library/react'
import ExpandableTableRow from '../ExpandableTableRow'

describe('ExpandableTableRow', () => {
    test('ExpandableTableRow expands', () => {
        const children = <td>Row content</td>
        const expandComponent = <td>Expanded content</td>
        const checkBox = true
        const radioButton = false
        const onSelectRows = jest.fn()
        const selectedCheckBox = [] as string[]
        const initialRadioButtonValue = undefined
        const isRowColorful = true
        const rowColor = 'blue'

        render(
            <table>
                <tbody>
                    <ExpandableTableRow
                        id={1}
                        checkBox={checkBox}
                        radioButton={radioButton}
                        onSelectRows={onSelectRows}
                        selectedCheckBox={selectedCheckBox}
                        initialRadioButtonValue={initialRadioButtonValue}
                        isRowColorful={isRowColorful}
                        rowColor={rowColor}
                        expandComponent={expandComponent}
                    >
                        {children}
                    </ExpandableTableRow>
                </tbody>
            </table>
        )

        expect(screen.queryByText('Expanded content')).not.toBeInTheDocument()

        fireEvent.click(screen.getByRole('button'))

        expect(screen.getByText('Expanded content')).toBeInTheDocument()

        fireEvent.click(screen.getByRole('button'))

        expect(screen.queryByText('Expanded content')).not.toBeInTheDocument()
    })
})
