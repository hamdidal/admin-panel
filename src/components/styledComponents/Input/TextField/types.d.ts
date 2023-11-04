import { InputBaseComponentProps } from "@mui/material";
import { FieldError } from "react-hook-form";

export type TextFieldProps = {
  placeholder?: string;
  label?: string;
  expand?: boolean;
  width?: string;
  multiline?: booelan;
  maxRows?: number;
  rows?: number;
  type?: "password" | "text" | "email" | "tel" | "hidden" | "date" | "number";
  size?: "medium" | "small";
  variant?: "filled" | "outlined" | "standard";
  endAdornment?: React.ReactNode;
  startAdornment?: React.ReactNode;
  onError?: FieldError;
  value?: string | number | Date | null;
  name?: string;
  inputComponent?: React.ElementType<InputBaseComponentProps> | undefined;
  inputProps?: InputBaseComponentProps;
  disabled?: boolean;
  onChange?: (
    e: string | number | null,
    k: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  onBlur?: (
    e: React.FocusEvent<HTMLTextAreaElement | HTMLInputElement, Element>
  ) => void;
  height?: string;
  defaultValue?: any;
};
