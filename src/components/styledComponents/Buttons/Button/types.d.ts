import React from 'react'

export type ButtonProps = {
    children: React.ReactNode
    startIcon?: string | React.ReactNode
    endIcon?: string | React.ReactNode
    size?: 'small' | 'large' | 'medium'
    backgroundColor?: string
    variant?: 'contained' | 'outlined' | 'text'
    borderColor?: string
    padding?: string
    onClick?: () => void
    disabled?: boolean
    width?: string
    color?: 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning'
    colorsx?: string
    type?: 'button' | 'reset' | 'submit' | undefined
    id?: string
    borderRadius?: string
}
