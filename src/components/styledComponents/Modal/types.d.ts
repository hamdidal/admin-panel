import { ButtonProps } from "components/Inputs/Buttons/Button/types";
import React from "react";

export type ModalProps = {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
  header?: React.ReactNode;
  okButtonProps?: ButtonProps | null;
  cancelButtonProps?: ButtonProps | null;
  disabled?: boolean;
  subheader?: React.ReactNode | string;
  children?: React.ReactNode;
  alertIcon?: boolean;
  type?: "publish" | "remove" | "delete";
  style?: React.CSSProperties | undefined;
  isAdd?: boolean;
  isImg?: boolean;
};
