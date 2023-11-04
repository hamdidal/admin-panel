import React from "react";

import { AvatarProps } from "./types";
import { CustomAvatar } from "./Avatar.styled";
import { colors } from "../../../styles/color";

function stringAvatar(name: string, fontSize: string) {
  name = name.trim().replace(/\s+/g, " ");
  return {
    sx: {
      bgcolor: colors.white.default,
      fontSize: fontSize,
    },
    children: `${
      name.split(" ").length !== 1
        ? name.split(" ")[0][0].toLocaleUpperCase() +
          name.split(" ")[1][0].toLocaleUpperCase()
        : name[0][0].toLocaleUpperCase()
    }`,
  };
}

const Avatar: React.FunctionComponent<AvatarProps> = ({
  src = "",
  width = 30,
  height = 30,
  marginBottom = 0,
  name,
  fontSize,
}) => {
  return src ? (
    <CustomAvatar
      marginBottom={marginBottom}
      width={width}
      height={height}
      src={src}
      alt="Avatar"
    />
  ) : (
    <CustomAvatar
      marginBottom={marginBottom}
      width={width}
      height={height}
      {...stringAvatar(name as string, fontSize as string)}
    />
  );
};

export default Avatar;
