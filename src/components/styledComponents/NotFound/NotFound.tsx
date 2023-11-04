import React from 'react'
import { Warning } from '@mui/icons-material'


import { NotFoundProps } from './types'
import { CustomBox } from './NotFound.styled'
import Typography from '../Typography/Typography'
import { colors } from '../../../styles/color'

const NotFoundComponent: React.FunctionComponent<NotFoundProps> = ({ title }) => {
    return (
        <CustomBox>
            <Warning style={{ color: colors.white.default }} />
            <Typography variant="body-small-default">{title}</Typography>
        </CustomBox>
    )
}

export default NotFoundComponent
