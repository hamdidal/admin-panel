import React, { ReactElement } from 'react'

export type PopButtonSubButtonProps = {
    onClick: () => void
    children: React.ReactNode
}
export type Positions = {
    x: number
    y: number
}

export type PopButtonProps = {
    button: ReactElement<PopButtonSubButtonProps>
    popArea: React.ReactNode
    pos: Positions
    style?: React.CSSProperties
}
