import { Box, Button, Container, Paper, styled } from "@mui/material";
import Switch from "../../../components/styledComponents/Buttons/Switch/Switch";
import { ptr } from "../../../utils/helpers";

export const CustomContainer = styled(Container)({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  height: "100%",
  gap: ptr(50),
  flexDirection: "column",
});

export const CustomPaper = styled(Paper)({
  padding: "46px 28px 48px 28px",
  boxShadow: "0px 2px 10px rgba(76, 78, 100, 0.22);",
  borderRadius: "6px",
  zIndex: "999",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "50%",
  height: "40%",
  gap: "5%",
});
export const CustomTextBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "flex-start",
  marginBottom: "24px",
  marginTop: "10px",
});

export const CustomButton = styled(Button)({
  backgroundColor: "white",
  " &:hover": {
    backgroundColor: "whiteSmoke",
  },
});

export const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

export const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  width: 62,
  height: 34,
  padding: 7,
  "& .MuiSwitch-switchBase": {
    margin: 1,
    padding: 0,
    transform: "translateX(6px)",
    "&.Mui-checked": {
      color: "#fff",
      transform: "translateX(22px)",
      label: "aktif",
      "& .MuiSwitch-thumb:before": {
        text: "aktif",
      },
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
      },
    },
  },
  "& .MuiSwitch-thumb": {
    backgroundColor: theme.palette.mode === "dark" ? "#003892" : "#001e3c",
    width: 32,
    height: 32,
    "&:before": {
      content: "''",
      position: "absolute",
      width: "100%",
      height: "100%",
      left: 0,
      top: 0,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
    },
  },
  "& .MuiSwitch-track": {
    opacity: 1,
    backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
    borderRadius: 20 / 2,
  },
}));

export const BoxOfRow = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  flexDirection: "row",
});
