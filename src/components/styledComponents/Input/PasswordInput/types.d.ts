import { FieldError } from "react-hook-form";
import { InputBaseComponentProps } from "@mui/material";

export type PasswordInputProps = {
  size?: "medium" | "small";
  expand?: boolean;
  width?: string;
  onError?: FieldError;
  inputProps?: InputBaseComponentProps;
  label?: string;
};
