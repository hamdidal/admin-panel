import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import Modal from './Modal'

test('header and subheader test', () => {
    const headerText = 'Modal Header'
    const subheaderText = 'Modal Subheader'

    render(<Modal open={true} header={headerText} subheader={subheaderText} onClose={() => {}} onConfirm={() => {}} />)

    const headerElement = screen.getByText(headerText)
    const subheaderElement = screen.getByText(subheaderText)
    expect(headerElement).toBeInTheDocument()
    expect(subheaderElement).toBeInTheDocument()
})

test('onclose test', () => {
    const onCloseMock = jest.fn()

    render(<Modal open={true} header="Modal Header" onClose={onCloseMock} onConfirm={() => {}} subheader={`Modal subHeader`} />)

    // tıkladığımızda
    const closeButton = screen.getByLabelText('close')
    fireEvent.click(closeButton)

    // çağrılıyor mu
    expect(onCloseMock).toHaveBeenCalled()
    expect(onCloseMock).toHaveBeenCalledTimes(1)
})

test('onclicked test', () => {
    const onConfirmMock = jest.fn()

    render(<Modal open={true} header="Modal Header" onClose={() => {}} onConfirm={onConfirmMock} subheader={`Modal subHeader`} />)

    // tıkladığımızda
    const okButton = screen.getByRole('button', { name: 'ONAYLA' })
    fireEvent.click(okButton)

    // çağrılıyor mu
    expect(onConfirmMock).toHaveBeenCalled()
    expect(onConfirmMock).toHaveBeenCalledTimes(1)
})

test('disables the buttons when disabled prop is true', () => {
    // Arrange
    const onConfirmMock = jest.fn()
    const onCloseMock = jest.fn()

    render(
        <Modal
            open={true}
            onConfirm={onConfirmMock}
            onClose={onCloseMock}
            header="Modal Header"
            subheader="Modal subHeader"
            disabled={true} // Disable özelliği burada ayarlanıyor
        />
    )

    const confirmButton = screen.getByText('ONAYLA')
    const cancelButton = screen.getByText('İPTAL')

    fireEvent.click(confirmButton)
    fireEvent.click(cancelButton)

    expect(onConfirmMock).not.toHaveBeenCalled() // onConfirm çağrılmamalı
    expect(onCloseMock).toHaveBeenCalled() // onClose çağrılmalı
    expect(confirmButton).toBeDisabled() // Confirm düğmesi devre dışı bırakılmalı
    expect(cancelButton).not.toBeDisabled() // Cancel düğmesi devre dışı bırakılmamalı
})
