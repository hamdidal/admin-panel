import {
  Card,
  CardHeader,
  CardActions,
  CardMedia,
  CardContent,
  styled,
} from "@mui/material";
import { colors } from "../../../styles/color";

export const CustomCard = styled(Card)((props) => ({
  fontSize: "14px",
  "& .MuiTypography-root.MuiTypography-body1.MuiTypography-root": {
    fontSize: "14px",
  },
}));
export const CustomCardHeader = styled(CardHeader)((props) => ({
  fontSize: "14px",
}));
export const CustomCardActions = styled(CardActions)((props) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  "& .MuiButtonBase-root.MuiIconButton-root.MuiIconButton-sizeMedium.MuiButtonBase-root.MuiIconButton-root":
    {
      color: colors.primary.primaryMain,
      fontSize: "14px",
    },
}));
export const CustomCardMedia = styled(CardMedia)((props) => ({
  component: "img",
  fontSize: "14px",
}));
export const CustomCardContent = styled(CardContent)((props) => ({
  fontSize: "14px",
}));
