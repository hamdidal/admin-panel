import { Box, Button, Container, Paper, styled } from "@mui/material";

export const CustomContainer = styled(Container)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "100vh",
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
