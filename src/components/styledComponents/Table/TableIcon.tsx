import React from 'react'



import { TableIconContainer } from './Table.styled'
import { TableIconProps } from './types'
import Icon from '../Icons/Icon'
import Typography from '../Typography/Typography'
import { colors } from '../../../styles/color'

const TableIcon: React.FunctionComponent<TableIconProps> = ({ icon, isFaint }) => {
    return (
        <TableIconContainer isFaint={isFaint}>
            {icon ? (
                <Icon icon={icon} width={85} height={30} />
            ) : (
                <Typography color={isFaint ? colors.black.default : colors.white.default} weight={300}>
                    N/A
                </Typography>
            )}
        </TableIconContainer>
    )
}

export default TableIcon
