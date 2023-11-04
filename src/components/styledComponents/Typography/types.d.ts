import React from 'react'

export type TypographyProps = {
    children?: React.ReactNode
    text?: string
    onClick?: () => void
    size?: 12 | 13 | 14 | 16 | 18 | 20 | 24 | 30
    weight?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900
    letter?: 3
    color?: string
    width?: string | number
    disabled?: boolean
    variant?:
        | 'h1-light'
        | 'h1-default'
        | 'h1-medium'
        | 'h1-semibold'
        | 'h1-bold'
        | 'h2-light'
        | 'h2-default'
        | 'h2-medium'
        | 'h2-semibold'
        | 'h2-bold'
        | 'h3-light'
        | 'h3-default'
        | 'h3-medium'
        | 'h3-semibold'
        | 'h3-bold'
        | 'h4-light'
        | 'h4-default'
        | 'h4-medium'
        | 'h4-semibold'
        | 'h4-bold'
        | 'h5-light'
        | 'h5-default'
        | 'h5-medium'
        | 'h5-semibold'
        | 'h5-bold'
        | 'h6-light'
        | 'h6-default'
        | 'h6-medium'
        | 'h6-semibold'
        | 'h6-bold'
        | 'body-normal-light'
        | 'body-normal-default'
        | 'body-normal-medium'
        | 'body-normal-semibold'
        | 'body-normal-bold'
        | 'body-small-light'
        | 'body-small-default'
        | 'body-small-medium'
        | 'body-small-semibold'
        | 'body-small-bold'
        | 'body-smaller-light'
        | 'body-smaller-default'
        | 'body-smaller-medium'
        | 'body-smaller-semibold'
        | 'body-smaller-bold'
    isLineClamp?: boolean
    lineClampRow?: number
    pointer?: booelan
}
