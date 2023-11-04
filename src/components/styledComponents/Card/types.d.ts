import React from 'react'

export type CardProps = {
    details?: CardDetailProps[]
    onClick?: () => void
    expanded?: boolean
    children?: React.ReactNode
}

export type CardDetailProps = {
    avatar?: string
    iconButton?: string | React.ReactNode
    title?: string
    subtitle?: string
    height?: string
    image?: string
    alt?: string
    color?: string
    text?: string
    actionsButtons?: ActionButtons[]
    longtext?: string
}

export type ActionButtons = [
    {
        leftIconButton?: string | React.ReactNode
    },
    {
        middleIconButton?: string | React.ReactNode
    },
    {
        rightIconButton?: string | React.ReactNode
    }
]
