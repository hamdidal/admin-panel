import React from "react";

import { LogoContainer, LogoLink } from "./Logo.styled";
import { LogoProps } from "./types";

const Logo: React.FunctionComponent<LogoProps> = ({ children }) => {
  return (
    <LogoContainer>
      <LogoLink to="/activities">{children}</LogoLink>
    </LogoContainer>
  );
};

export default Logo;
