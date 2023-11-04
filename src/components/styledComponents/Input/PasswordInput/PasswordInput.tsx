import React from 'react'
import { FormControl, IconButton, InputAdornment } from '@mui/material'

// Todo:
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import { Visibility } from '@mui/icons-material'

import { PasswordInputProps } from './types'
import { CustomInputLabel, CustomOutlinedInput } from './PasswordInput.styled'

const PasswordInput: React.FC<PasswordInputProps> = ({ expand, width = 220, size = 'medium', onError, ...props }) => {
    const [showPassword, setShowPassword] = React.useState(false)

    const handleClickShowPassword = () => setShowPassword((show) => !show)
    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
    }

    return (
        <FormControl sx={{ width: expand ? '100%' : width }} variant="outlined">
            <CustomInputLabel>Şifre</CustomInputLabel>
            <CustomOutlinedInput
                error={!!onError}
                size={size}
                type={showPassword ? 'text' : 'password'}
                inputProps={{
                    // @ts-ignore
                    'data-testid': 'password-input',
                }}
                endAdornment={
                    <InputAdornment position="end">
                        <IconButton onClick={handleClickShowPassword} onMouseDown={handleMouseDownPassword} edge="end">
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                    </InputAdornment>
                }
                {...props}
            />
        </FormControl>
    )
}

export default PasswordInput
