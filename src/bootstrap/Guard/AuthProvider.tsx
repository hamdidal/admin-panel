import React, { useEffect } from "react";

import { AuthProviderProps } from "./types";
import { useNavigate } from "react-router-dom";
import useUserStore from "../../context/user-store";
import useAuthStore from "../../context/auth-store";

const Auth: React.FunctionComponent<AuthProviderProps> = ({ children }) => {
  const setUser = useUserStore((state) => state.setUser);
  const { accessToken, user } = useAuthStore();
  const navigate = useNavigate();

  const authorization = () => {
    if (user) {
      setUser(user);
    } else navigate("/login");
  };

  useEffect(() => {
    if (accessToken) {
      authorization();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [accessToken]);

  return <div>{children}</div>;
};

export default Auth;
