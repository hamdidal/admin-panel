import React from 'react'

export type FabProps = {
    children: React.ReactNode
    size?: 'small' | 'large' | 'medium'
    variant?: 'circular' | 'extended'
    disabled?: boolean
    backgroundColor?: string
    color?: 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning' | 'default'
}
