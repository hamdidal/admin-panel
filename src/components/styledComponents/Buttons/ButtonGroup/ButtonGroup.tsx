import React from 'react'
import { Box } from '@mui/material'

import { CustomGroup } from './ButtonGroup.style'
import { ButtonGroupProps } from './types'
import { colors } from '../../../../styles/color'

const ButtonGroup: React.FunctionComponent<ButtonGroupProps> = ({ children, size, orientation, padding }) => {
    return (
        <Box sx={{ backgroundColor: colors.white.default }}>
            <CustomGroup sx={{ padding: padding }} orientation={orientation} size={size}>
                {children}
            </CustomGroup>
        </Box>
    )
}

export default ButtonGroup
