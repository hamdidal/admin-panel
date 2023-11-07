import React from "react";

import { CustomTypography } from "./Typography.styled";
import { TypographyProps } from "./types";
import { sizes, weights } from "./constants";
import { colors } from "../../../styles/color";
import { ptr } from "../../../utils/helpers";

const Typography: React.FunctionComponent<TypographyProps> = ({
  disabled,
  onClick,
  size,
  weight,
  children,
  color = colors.text.primaryTextLight,
  width = "fit-content",
  text,
  variant,
  isLineClamp,
  lineClampRow,
  pointer = false,
}) => {
  let calculatedSize = size ?? sizes.normal;
  let calculatedWeight = weight ?? weights.default;

  const variants = variant?.split("-") || "";
  if (variants.length === 3) {
    calculatedSize = sizes[variants[1]];
    calculatedWeight = weights[variants[2]];
  } else if (variants.length === 2) {
    calculatedSize = sizes[variants[0]];
    calculatedWeight = weights[variants[1]];
  }

  if (size) {
    calculatedSize = ptr(size);
  }

  return (
    <CustomTypography
      sx={{
        cursor: onClick || pointer ? "pointer" : "default",
        minWidth: ptr(30),
        minHeight: ptr(30),
        display: "flex",
        alignItems: "center",
      }}
      onClick={onClick}
      size={calculatedSize}
      weight={calculatedWeight}
      color={color}
      width={width}
      isLineClamp={isLineClamp}
      lineClampRow={lineClampRow}
    >
      {text || children}
    </CustomTypography>
  );
};

export default Typography;
