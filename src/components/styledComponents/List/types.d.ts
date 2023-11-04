import React from 'react'

export type ListProps = {
    listDetails: ListDetailProps[]
    display?: string
    listPadding?: string
    itemButtonPadding?: string
    ListContainerPadding?: string
    ListTextPadding?: string
    gap?: string
    width?: string
    minWidth?: string
    boxShadow?: string
    backgroundColor?: string
    isTableActions?: boolean
}

export type ListDetailProps = {
    icon?: string | React.ReactNode
    text?: string
    avatar?: string
    subheader?: string | React.ReactNode
    path?: string
    id?: string
    onClick?: React.MouseEventHandler<HTMLDivElement> | undefined
    name?: string
    role?: string
    divider?: boolean
    disabled?: boolean
}
