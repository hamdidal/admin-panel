import React from "react";
import { Box, IconButton } from "@mui/material";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

import Button from "../Buttons/Button/Button";

import { CustomAddModal, CustomModal } from "./Modal.styled";
import { ModalProps } from "./types";
import { CheckCircle, DeleteOutline } from "@mui/icons-material";

const Modal: React.FunctionComponent<ModalProps> = ({
  open,
  onConfirm,
  onClose,
  header,
  okButtonProps = null,
  cancelButtonProps = null,
  subheader,
  disabled = false,
  alertIcon = true,
  children,
  type,
  style,
  isAdd,
}: ModalProps) => {
  return isAdd ? (
    <CustomAddModal open={open} hideBackdrop>
      <div style={style} className="modal-body">
        <IconButton
          aria-label="close"
          onClick={() => {
            onClose();
          }}
          className="close-modal"
        >
          <CloseOutlinedIcon />
        </IconButton>
        <div className="form-body">
          {alertIcon && (
            <div>
              {type === "remove" ? (
                <CloseOutlinedIcon className="alert-icon remove" />
              ) : type === "publish" ? (
                <CheckCircle className="alert-icon publish" />
              ) : type === "delete" ? (
                <DeleteOutline className="alert-icon delete" />
              ) : (
                ""
              )}
            </div>
          )}
          <div className="header">{header}</div>
          <div className="subheader"> {subheader}</div>
          {children}
          <div className="buttons">
            <Box className="centerButton">
              <Button
                onClick={onConfirm}
                disabled={disabled}
                color={
                  type === "publish"
                    ? "success"
                    : type === "delete" || type === "remove"
                    ? "error"
                    : "primary"
                }
              >
                {okButtonProps ? okButtonProps.children : "ONAYLA"}
              </Button>
              <Button
                onClick={() => onClose()}
                variant="outlined"
                color={type ? "secondary" : "primary"}
              >
                {cancelButtonProps ? cancelButtonProps.children : "İPTAL"}
              </Button>
            </Box>
          </div>
        </div>
      </div>
    </CustomAddModal>
  ) : (
    <CustomModal open={open} hideBackdrop>
      <div style={style} className="modal-body">
        <IconButton
          aria-label="close"
          onClick={() => {
            onClose();
          }}
          className="close-modal"
        >
          <CloseOutlinedIcon />
        </IconButton>
        <div className="form-body">
          {alertIcon && (
            <div>
              {type === "remove" ? (
                <CloseOutlinedIcon className="alert-icon remove" />
              ) : type === "publish" ? (
                <CheckCircle className="alert-icon publish" />
              ) : type === "delete" ? (
                <DeleteOutline className="alert-icon delete" />
              ) : (
                ""
              )}
            </div>
          )}
          <div className="header">{header}</div>
          <div className="subheader"> {subheader}</div>
          {children}
          <div className="buttons">
            <Box className="centerButton">
              <Button
                onClick={onConfirm}
                disabled={disabled}
                color={
                  type === "publish"
                    ? "success"
                    : type === "delete" || type === "remove"
                    ? "error"
                    : "primary"
                }
              >
                {okButtonProps ? okButtonProps.children : "ONAYLA"}
              </Button>
              <Button
                onClick={() => onClose()}
                variant="outlined"
                color={type ? "secondary" : "primary"}
              >
                {cancelButtonProps ? cancelButtonProps.children : "İPTAL"}
              </Button>
            </Box>
          </div>
        </div>
      </div>
    </CustomModal>
  );
};
export default Modal;
