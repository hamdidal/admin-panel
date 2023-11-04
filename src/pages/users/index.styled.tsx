import styled from "@emotion/styled";
import { Badge, Box, Button, Paper, TextField } from "@mui/material";
import { ptr } from "../../utils/helpers";
import { colors } from "../../styles/color";

export const CustomBadge = styled(Badge)((props) => ({
  display: "flex",
  alignItems: "center",
  padding: "4px 4px",
  borderRadius: "16px",
  width: "100%",
  textAlign: "center",
}));

export const CustomCompaniesContainer = styled("div")({
  height: "100vh",
  marginTop: ptr(44),
  marginRight: ptr(24),
  marginLeft: ptr(24),
});

export const CustomTableDiv = styled("div")({
  boxShadow: " 0px 2px 10px rgba(76, 78, 100, 0.22)",
  marginBottom: ptr(24),
});

export const CustomCardDiv = styled("div")({
  display: "flex",
  flexDirection: "row",
  width: "100%",
  justifyContent: "space-between",
  gap: "0.5rem",
});

export const CustomSearchInput = styled(TextField)({
  borderColor: colors.primary.primaryMain,
  height: ptr(40),
  "& > div": {
    height: ptr(38),
    fontWeight: "400",
    paddingRight: "12px",
    fontSize: "18px",
    borderColor: colors.primary.primaryMain,
    color: colors.black.default,
  },
  "& .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input": {
    color: colors.black.default,
  },
  "& .Mui-focused": {
    borderColor: colors.primary.primaryMain,
    color: `${colors.primary.primaryMain} !important`,
    "& .MuiOutlinedInput-notchedOutline": {
      border: "2px solid #FFAA00 !important",
    },
  },
});

export const CustomFilterBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "space-around",
  height: ptr(144),
  gap: ptr(16),
  padding: ptr(20),
  background: colors.white.default,
});

export const CustomHeadDiv = styled("div")({
  display: "flex",
  flexDirection: "row",
  width: "100%",
  justifyContent: "space-between",
  textAlign: "center",
  alignItems: "center",
  background: colors.white.default,
  padding: "0px 20px",
});

export const CustomFilterDiv = styled("div")({
  display: "flex",
  flexDirection: "row",
  width: "100%",
  justifyContent: "right",
  gap: ptr(24),
  textAlign: "center",
  alignItems: "center",
});

export const CustomCardBox = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  textAlign: "center",
  alignItems: "center",
  marginBottom: ptr(24),
  gap: ptr(16),
  marginTop: ptr(44),
  marginRight: ptr(24),
  marginLeft: ptr(24),
});

export const CustomBoxColumn = styled(Box)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  textAlign: "center",
  alignItems: "flex-start",
});

export const CustomCardPaper = styled(Paper)({
  display: "flex",
  alignItems: "center",
  padding: "14px 20px",
  justifyContent: "flex-start",
  textAlign: "start",
  width: "100%",
  height: ptr(80),
  background: colors.white.default,
  boxShadow: "0px 2px 10px rgba(76, 78, 100, 0.22)",
  borderRadius: "4px",
  gap: ptr(16),
});

export const AddUserButton = styled(Button)({
  paddingLeft: ptr(22),
  paddingRight: ptr(22),
  width: "100%",
  backgroundColor: colors.primary.primaryMain,
  " &:hover": {
    backgroundColor: colors.primary.primaryContainedHoverBg,
  },
  color: colors.white.default,
});

export const UserNameBox = styled(Box)({
  display: "flex",
  gap: ptr(10),
  justifyContent: "left",
  alignContent: "center",
  alignItems: "center",
});
