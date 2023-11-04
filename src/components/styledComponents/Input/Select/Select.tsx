import React, { forwardRef, useEffect, useState } from 'react'
import { FormControl, FormHelperText, InputAdornment, SelectChangeEvent } from '@mui/material'


import { CustomSelect, CustomMenuItem, SelectContainer, CustomInputLabel } from './Select.styled'
import { OptionType, SelectProps } from './types'
import Typography from '../../Typography/Typography'
import { colors } from '../../../../styles/color'
import Icon from '../../Icons/Icon'

const Select: React.FunctionComponent<SelectProps> = forwardRef(
    (
        {
            labelId,
            position = 'top',
            multiple,
            label,
            helperText,
            name,
            id,
            variant,
            size = 'medium',
            expand,
            width = 220,
            onChange,
            placeholder,
            options,
            selectedValue = '',
            onError,
            clearValue,
            startAdornment,
            minWidth,
            ...props
        },
        ref
    ) => {
        const [value, setValue] = useState<string | number | Array<string | number> | undefined>(selectedValue)

        useEffect(() => {
            if (clearValue === true) {
                setValue('')
            }
        }, [clearValue])

        useEffect(() => {
            setValue(selectedValue)
        }, [selectedValue])

        const selectItems =
            options &&
            options.map((option) => (
                <CustomMenuItem key={option.value} onClick={() => {}} value={option.value}>
                    {option.src ? <img src={option.src} alt="" /> : null}
                    <Typography>{option.name}</Typography>
                </CustomMenuItem>
            ))

        return (
            <FormControl sx={{ width: '100%' }}>
                <CustomInputLabel>{label}</CustomInputLabel>
                <SelectContainer position={position} width={expand ? '100%' : width}>
                    <CustomSelect
                        labelId={labelId}
                        name={name}
                        multiple={multiple}
                        variant={variant}
                        error={!!onError}
                        onChange={(e: SelectChangeEvent<unknown>) => {
                            const option: OptionType = { name: e.target.name, value: e.target.value as string | number }
                            if (onChange) {
                                setValue(option.value)
                                onChange(option.value, e)
                            }
                        }}
                        displayEmpty
                        sx={{ minWidth: { minWidth } }}
                        size={size}
                        value={value}
                        position={position}
                        inputRef={ref}
                        placeholder={placeholder}
                        startAdornment={startAdornment && <InputAdornment position="start">{<Icon icon={startAdornment} />} </InputAdornment>}
                        {...props}
                    >
                        <CustomMenuItem key="" onClick={() => {}} value="">
                            <Typography color={colors.text.disabledTextLight} variant="body-normal-default">
                                {placeholder}
                            </Typography>
                        </CustomMenuItem>
                        {selectItems}
                    </CustomSelect>
                </SelectContainer>
                <FormHelperText>{helperText}</FormHelperText>
            </FormControl>
        )
    }
)

export default Select
