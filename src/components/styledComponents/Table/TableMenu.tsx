import React from 'react'
import { IconButton } from '@mui/material'
import { MoreVert } from '@mui/icons-material'



import { CustomTableCell, TableMenu } from './Table.styled'
import PopButton from '../Buttons/PopButton/PopButton'
import Icon from '../Icons/Icon'

const TableRowMenu: React.FunctionComponent<{ menu: React.ReactNode }> = ({ menu }) => {
    return (
        <CustomTableCell padding="checkbox">
            <PopButton
                data-testid="menu-icon"
                button={
                    <IconButton>
                        <Icon icon={<MoreVert />} />
                    </IconButton>
                }
                popArea={<TableMenu>{menu}</TableMenu>}
                pos={{ x: -200, y: 40 }}
            />
        </CustomTableCell>
    )
}

export default TableRowMenu
