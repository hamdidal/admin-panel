import React from 'react'
import { CustomCard, CustomCardActions } from './Card.styled'
import { CardProps } from './types'
import { CardContent, CardHeader, CardMedia, Collapse, IconButton } from '@mui/material'
import Typography from '../Typography/Typography'

const Card: React.FunctionComponent<CardProps> = ({ children, details, onClick, expanded }) => {
    return (
        <div data-testid="card-container">
            {details?.map((detail, index) => (
                <CustomCard key={index}>
                    <CardHeader avatar={detail.avatar} action={detail.iconButton} title={<Typography variant="h6-medium">{detail.title}</Typography>} subheader={detail.subtitle} />
                    <CardMedia component="img" height={detail.height} src={detail.image} alt={detail.alt} />
                    <CardContent>
                        <Typography>{detail.text}</Typography>
                        {children}
                    </CardContent>
                    {detail.actionsButtons?.map((action) => (
                        <CustomCardActions disableSpacing>
                            <div>
                                <IconButton>{action[0].leftIconButton}</IconButton>
                                <IconButton>{action[1].middleIconButton}</IconButton>x
                            </div>
                            <IconButton onClick={onClick}>{action[2].rightIconButton} </IconButton>
                        </CustomCardActions>
                    ))}
                    {detail.longtext && (
                        <Collapse in={expanded}>
                            <Typography>{detail.longtext}</Typography>
                        </Collapse>
                    )}
                </CustomCard>
            ))}
        </div>
    )
}

export default Card
