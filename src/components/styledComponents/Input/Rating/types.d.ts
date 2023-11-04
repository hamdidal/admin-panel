import React from 'react'

export type RatingProps = {
    size?: 'small' | 'medium' | 'large'
    name?: string
    label?: string
    selectedValue?: number | undefined
    precision?: number
    icon?: string | React.ReactNode
}
