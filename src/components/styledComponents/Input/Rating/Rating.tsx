import React, { forwardRef } from 'react'
import { Box } from '@mui/material'


import { RatingProps } from './types'
import { CustomRating } from './Rating.styled'
import Typography from '../../Typography/Typography'
import Icon from '../../Icons/Icon'

const Rating: React.FunctionComponent<RatingProps> = forwardRef(({ label, size, name, selectedValue = 2, precision, icon }, ref) => {
    const [value, setValue] = React.useState<number | null>(selectedValue)

    return (
        <Box>
            {label && <Typography>{label}</Typography>}
            <CustomRating
                aria-label="rating"
                name={name}
                size={size}
                value={value}
                icon={typeof icon === 'string' ? <Icon icon={icon} /> : icon}
                precision={precision}
                onChange={(event, newValue) => {
                    setValue(newValue)
                }}
            />
        </Box>
    )
})

export default Rating
