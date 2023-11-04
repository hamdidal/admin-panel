import { Box, List, ListItemAvatar, ListItemButton, ListItemIcon, ListItemText, ListSubheader, styled } from '@mui/material'
import { colors } from '../../../styles/color'
import { ptr } from '../../../utils/helpers'


export const CustomList = styled(List)((props) => ({
    borderRadius: '10px',
}))
export const CustomListSubheader = styled(ListSubheader)((props) => ({
    background: 'inherit',
    lineHeight: '14px',
    margin: '30px 0 18px 0',
    userSelect: 'none',
}))
export const CustomListItemButton = styled(ListItemButton)((props) => ({
    borderRadius: '4px',
    '&.Mui-selected': {
        backgroundColor: colors.customBg.statesMenuActive,
    },
    '&.Mui-selected:hover': {
        backgroundColor: colors.customBg.statesMenuActive,
    },
    ':hover': {
        backgroundColor: colors.action.actionHoverLight,
    },
}))
export const CustomListItemIcon = styled(ListItemIcon)((props) => ({}))
export const CustomListItemAvatar = styled(ListItemAvatar)((props) => ({}))
export const CustomListItemText = styled(ListItemText)((props) => ({
    color: colors.text.primaryTextLight,
}))
export const ListContainer = styled('div')((props) => ({}))
export const UserInfoContainer = styled('div')((props) => ({
    display: 'flex',
    flexDirection: 'column',
    padding: ' 10px 0',
}))

export const ListActionItem = styled(Box)((props) => ({
    display: 'flex',
    alignItems: 'center',
    gap: ptr(8.75),
    padding: `${ptr(9)} ${ptr(5)}`,
    borderRadius: ptr(10),
}))
