import { Modal, styled } from "@mui/material";
import { colors } from "../../../styles/color";
import { ptr } from "../../../utils/helpers";

export const CustomModal = styled(Modal)(() => ({
  background: "#4C4E6480",
  "& .modal-body": {
    position: "absolute",
    top: "calc(50% - 282px/2)",
    left: "calc(50% - 517px/2 + 0.5px)",
    borderRadius: "10px",
    boxShadow: "0px 0px 20px rgba(76, 78, 100, 0.4)",
    backgroundColor: colors.white.default,
    width: ptr(517),
    height: ptr(370),
    padding: "10px 24px",
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  ".close-modal": {
    position: "absolute",
    top: "20px",
    right: "20px",
  },
  ".form-body": {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    width: "100%",
  },
  ".header": {
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    color: colors.text.primaryTextLight,
    fontSize: ptr(24),
    fontWeight: 500,
    marginTop: ptr(18),
  },
  ".subheader": {
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    color: colors.text.secondaryTextLight,
    fontSize: ptr(14),
    fontWeight: 400,
    marginTop: ptr(10),
  },
  ".alert-icon": {
    fontSize: "64px",
    color: colors.primary.primaryMain,
    "&.publish": {
      color: colors.success.successMain,
    },
    "&.remove": {
      color: colors.error.errorMain,
    },
    "&.delete": {
      color: colors.error.errorMain,
    },
  },
  ".buttons": {
    marginTop: ptr(20),
  },
  ".centerButton": {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
  },
  "& .css-wzfrg3-MuiButtonBase-root-MuiButton-root": {
    color: colors.secondary.secondaryMain,
    borderColor: colors.secondary.secondaryOutlinedRestingBg,
  },
}));

export const CustomModalImg = styled(Modal)(() => ({
  background: "#4C4E6480",
  "& .modal-body": {
    position: "absolute",
    top: "calc(50% - 282px/2)",
    left: "calc(50% - 517px/2 + 0.5px)",
    borderRadius: "10px",
    boxShadow: "0px 0px 20px rgba(76, 78, 100, 0.4)",
    backgroundColor: colors.white.default,
    width: ptr(517),
    height: ptr(370),
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  ".close-modal": {
    position: "absolute",
    top: "10px",
    right: "10px",
    color: "white",
    zIndex: "99",
  },
  ".delete-modal": {
    position: "absolute",
    top: "10px",
    left: "10px",
    color: "white",
    zIndex: "99",
  },
  ".form-body": {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    width: "100%",
  },
  ".header": {
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    color: colors.text.primaryTextLight,
    fontSize: ptr(24),
    fontWeight: 500,
    marginTop: ptr(18),
  },
  ".subheader": {
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    color: colors.text.secondaryTextLight,
    fontSize: ptr(14),
    fontWeight: 400,
    marginTop: ptr(10),
  },
  ".alert-icon": {
    fontSize: "64px",
    color: colors.primary.primaryMain,
    "&.publish": {
      color: colors.success.successMain,
    },
    "&.remove": {
      color: colors.error.errorMain,
    },
    "&.delete": {
      color: colors.error.errorMain,
    },
  },
  ".buttons": {
    marginTop: ptr(20),
  },
  ".centerButton": {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
  },
  "& .css-wzfrg3-MuiButtonBase-root-MuiButton-root": {
    color: colors.secondary.secondaryMain,
    borderColor: colors.secondary.secondaryOutlinedRestingBg,
  },
}));

export const CustomAddModal = styled(Modal)(() => ({
  background: "#4C4E6480",
  "& .modal-body": {
    position: "absolute",
    top: "calc(30% - 282px/2)",
    left: "calc(46% - 517px/2 + 0.5px)",
    borderRadius: "10px",
    boxShadow: "0px 0px 20px rgba(76, 78, 100, 0.4)",
    backgroundColor: colors.white.default,
    width: ptr(517),
    height: ptr(370),
    padding: "10px 24px",
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  ".close-modal": {
    position: "absolute",
    top: "20px",
    right: "20px",
  },
  ".form-body": {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    width: "100%",
  },
  ".header": {
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    color: colors.text.primaryTextLight,
    fontSize: ptr(24),
    fontWeight: 500,
    marginTop: ptr(18),
  },
  ".subheader": {
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    color: colors.text.secondaryTextLight,
    fontSize: ptr(14),
    fontWeight: 400,
    marginTop: ptr(10),
  },
  ".alert-icon": {
    fontSize: "64px",
    color: colors.primary.primaryMain,
    "&.publish": {
      color: colors.success.successMain,
    },
    "&.remove": {
      color: colors.error.errorMain,
    },
    "&.delete": {
      color: colors.error.errorMain,
    },
  },
  ".buttons": {
    marginTop: ptr(20),
  },
  ".centerButton": {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
  },
  "& .css-wzfrg3-MuiButtonBase-root-MuiButton-root": {
    color: colors.secondary.secondaryMain,
    borderColor: colors.secondary.secondaryOutlinedRestingBg,
  },
}));
