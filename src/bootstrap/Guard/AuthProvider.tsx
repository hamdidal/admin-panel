import React, { useEffect } from "react";

import { AuthProviderProps } from "./types";
import { useNavigate } from "react-router-dom";
import useUserStore from "../../context/user-store";
import useAuthStore from "../../context/auth-store";
import { useGetUserClaim } from "../../utils/hooks/queries/Users";

const Auth: React.FunctionComponent<AuthProviderProps> = ({ children }) => {
  const { setUser, setRole } = useUserStore();
  const { accessToken, user } = useAuthStore();
  const navigate = useNavigate();
  const { data: claimData } = useGetUserClaim({
    queryKeys: {
      id: user?.id,
    },
  });

  const authorization = () => {
    if (user) {
      setUser(user);
    } else navigate("/login");
  };

  useEffect(() => {
    if (claimData) {
      setRole(claimData?.data);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [claimData]);

  useEffect(() => {
    if (accessToken) {
      authorization();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [accessToken]);

  return <div>{children}</div>;
};

export default Auth;
