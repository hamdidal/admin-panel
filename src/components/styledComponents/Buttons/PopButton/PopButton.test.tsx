import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import PopButton from './PopButton'

describe('PopButton', () => {
    test('label test', () => {
        render(<PopButton button={<button>Toggle Pop-up</button>} popArea={<div>Pop-up Content</div>} pos={{ x: -150, y: 25 }} />)

        expect(screen.getByText('Toggle Pop-up')).toBeInTheDocument()
    })

    test('hides test', () => {
        render(<PopButton button={<button>Toggle Pop-up</button>} popArea={<div>Pop-up Content</div>} pos={{ x: -150, y: 25 }} />)

        expect(screen.queryByText('Pop-up Content')).toBeNull()
    })

    test('toggles when click test', () => {
        render(<PopButton button={<button>Toggle Pop-up</button>} popArea={<div>Pop-up Content</div>} pos={{ x: -150, y: 25 }} />)

        fireEvent.click(screen.getByText('Toggle Pop-up'))

        expect(screen.getByText('Pop-up Content')).toBeInTheDocument()

        fireEvent.click(screen.getByText('Toggle Pop-up'))

        expect(screen.queryByText('Pop-up Content')).toBeNull()
    })

    // test('pop up style ', () => {
    //     render(
    //       <PopButton
    //         button={<button>Toggle Pop-up</button>}
    //         popArea={<div>Pop-up Content</div>}
    //         pos={{ x: -150, y: 25 }}
    //       />
    //     );

    //     // Click the button to open the pop-up
    //     fireEvent.click(screen.getByText('Toggle Pop-up'));

    //     // Verify that the pop-up has the correct position style applied
    //     const popUp = screen.getByText('Pop-up Content');
    //     expect(popUp).toHaveStyle('left: -150px');
    //     expect(popUp).toHaveStyle('top: 25px');
    //   });
})
