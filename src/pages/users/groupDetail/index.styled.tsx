import { Badge, Box, styled } from "@mui/material";
import { ptr } from "../../../utils/helpers";
import { colors } from "../../../styles/color";

export const CustomBadge = styled(Badge)((props) => ({
  display: "flex",
  alignItems: "center",
  padding: "4px 4px",
  borderRadius: "4px",
  justifyContent: "center",
  width: "100%",
  textAlign: "center",
}));

export const CustomCompanyProfileContainer = styled("div")({
  display: "flex",
  justifyContent: "center",
  marginTop: ptr(44),
  marginRight: ptr(24),
  marginLeft: ptr(24),
  gap: ptr(24),
  width: "100%",
  height: "100%",
  padding: ptr(24),
});

export const CustomCompanyProfileTableDiv = styled("div")({
  boxShadow: " 0px 2px 10px rgba(76, 78, 100, 0.22)",
  marginBottom: ptr(24),
  height: "60vh",
  width: "50%",
});

export const CustomCompanyProfileBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  width: "100%",
  height: "100%",
  padding: "48px 30px 24px 30px",
  gap: ptr(28),
  background: colors.white.default,
});

export const CustomCompanyFirstBox = styled(Box)({
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "center",
  gap: ptr(16),
});
export const CustomCompanySecondBox = styled(Box)({
  marginTop: ptr(4),
  display: "flex",
  justifyContent: "space-between",
  gap: ptr(20),
});
export const CustomCompanyThirdBox = styled(Box)({
  display: "flex",
  justifyContent: "flex-start",
  flexDirection: "column",
  textAlign: "start",
});
export const CustomCompanyFourthBox = styled(Box)({
  display: "flex",
  justifyContent: "center",
  gap: ptr(16),
});

export const CustomDetailsDiv = styled("div")({
  display: "flex",
  justifyContent: "flex-start",
  flexDirection: "column",
  gap: ptr(8),
});
export const CustomDetailsBox = styled(Box)({
  display: "flex",
  justifyContent: "flex-start",
  textAlign: "center",
  alignItems: "center",
  gap: ptr(5),
  width: "100%",
});
export const CustomTableHeadBox = styled(Box)({
  display: "flex",
  justifyContent: "flex-start",
  padding: ptr(20),
  background: colors.white.default,
});
export const CustomRoleDiv = styled("div")((props) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: ptr(5),
  backgroundColor:
    props.color === "green"
      ? colors.success.successMain
      : props.color === "blue"
      ? colors.info.infoMain
      : "",
  background:
    props.color === "green"
      ? `linear-gradient(0deg, rgba(255, 255, 255, 0.88), rgba(255, 255, 255, 0.88)), #72E128`
      : props.color === "blue"
      ? "linear-gradient(0deg, rgba(255, 255, 255, 0.88), rgba(255, 255, 255, 0.88)), #26C6F9"
      : "",
  padding: "3px 5px 3px 4px",
  borderRadius: "4px",
}));
export const CustomArrayDiv = styled("div")({
  display: "flex",
  alignItems: "flex-start",
  flexDirection: "column",
});
export const CoArrayDiv = styled("div")({
  display: "flex",
  justifyContent: "space-between",
});
export const BankAccountDiv = styled("div")({
  display: "flex",
  flexDirection: "column",
  textAlign: "start",
});
export const TextAlignCenterDiv = styled("div")({
  display: "flex",
  flexDirection: "column",
  textAlign: "center",
});
export const RateDiv = styled("div")({
  display: "flex",
  alignItems: "flex-end",
  gap: "10px",
});
export const RatePoint = styled("div")({
  padding: "0px 5px",
  backgroundColor: colors.primary.primaryMain,
  borderRadius: "4px",
  fontSize: ptr(12),
  fontWeight: 500,
  color: colors.white.default,
  height: ptr(20),
  display: "flex",
  alignItems: "center",
});
export const CustomCardContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: ptr(3),
});
export const CustomCardBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  flexDirection: "row",
  textAlign: "center",
  gap: ptr(8),
});
export const BankAcoountsDiv = styled("div")({
  display: "flex",
  gap: ptr(15),
});
export const AvatarImageDiv = styled("div")({
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: 0,
  width: ptr(120),
  height: ptr(120),
  borderRadius: "50%",
});
