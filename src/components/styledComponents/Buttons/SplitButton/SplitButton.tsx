import * as React from 'react'
import ClickAwayListener from '@mui/material/ClickAwayListener'
import Grow from '@mui/material/Grow'
import Paper from '@mui/material/Paper'
import Popper from '@mui/material/Popper'
import MenuItem from '@mui/material/MenuItem'
import MenuList from '@mui/material/MenuList'
import { CustomButton, CustomButtonGroup } from './SplitButton.styled'
import { SplitButtonProps } from './types'
import { ArrowDropDown } from '@mui/icons-material'

export const SplitButton: React.FunctionComponent<SplitButtonProps> = ({ handleClick, handleClose, open, ref, handleMenuItemClick, handleToggle, details, selectedIndex, color }) => {
    return (
        <div>
            <CustomButtonGroup color={color} variant="contained" ref={ref} aria-label="split button">
                <CustomButton color={color} onClick={handleClick}>
                    {details[selectedIndex]}
                </CustomButton>
                <CustomButton
                    color={color}
                    size="small"
                    aria-controls={open ? 'split-button-menu' : undefined}
                    aria-expanded={open ? 'true' : undefined}
                    aria-label="select merge strategy"
                    aria-haspopup="menu"
                    onClick={handleToggle}
                >
                    <ArrowDropDown />
                </CustomButton>
            </CustomButtonGroup>
            <Popper
                sx={{
                    zIndex: 1,
                }}
                open={open}
                anchorEl={ref?.current}
                role={undefined}
                transition
                disablePortal
            >
                {({ TransitionProps, placement }) => (
                    <Grow
                        {...TransitionProps}
                        style={{
                            transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom',
                        }}
                    >
                        <Paper>
                            <ClickAwayListener onClickAway={handleClose}>
                                <MenuList id="split-button-menu" autoFocusItem>
                                    {details.map((detail, index) => (
                                        <MenuItem key={detail} disabled={index === 2} selected={index === selectedIndex} onClick={(event) => handleMenuItemClick(event, index)}>
                                            {detail}
                                        </MenuItem>
                                    ))}
                                </MenuList>
                            </ClickAwayListener>
                        </Paper>
                    </Grow>
                )}
            </Popper>
        </div>
    )
}
