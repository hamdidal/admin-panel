import React, { forwardRef } from "react";
import { Box, InputAdornment } from "@mui/material";

import { CustomTextFieldComponent } from "./TextField.styled";
import { TextFieldProps } from "./types";

const TextField: React.FunctionComponent<TextFieldProps> = forwardRef(
  (
    {
      placeholder,
      label,
      expand,
      width = 220,
      multiline,
      maxRows,
      rows,
      size = "medium",
      type = "text",
      name,
      endAdornment,
      onError,
      startAdornment,
      inputComponent,
      disabled,
      onChange,
      variant,
      onBlur,
      height,
      defaultValue,
      ...props
    },
    ref
  ) => {
    return (
      <Box
        sx={{
          width: expand ? "100%" : width,
          display: type === "hidden" ? "none" : "block",
          height,
        }}
      >
        <CustomTextFieldComponent
          onChange={(e) => {
            if (onChange) {
              onChange(e.target.value, e);
            }
          }}
          onBlur={onBlur}
          label={label}
          disabled={disabled}
          hidden={type === "hidden"}
          data-testid={"text-field"}
          error={!!onError}
          inputRef={ref}
          placeholder={placeholder}
          type={type}
          size={size}
          variant={variant}
          name={name}
          defaultValue={defaultValue}
          multiline={multiline}
          maxRows={maxRows}
          rows={rows}
          helperText={onError && onError.message}
          InputProps={{
            endAdornment: endAdornment && (
              <InputAdornment position="end">
                {endAdornment}
                {/* TODO:  <Icon icon={endAdornment} /> */}
              </InputAdornment>
            ),
            startAdornment: startAdornment && (
              <InputAdornment position="start">
                {startAdornment}
                {/* TODO:  <Icon icon={startAdornment} /> */}
              </InputAdornment>
            ),
            inputComponent,
          }}
          {...props}
        />
      </Box>
    );
  }
);

export default TextField;
