import React, { useCallback, useEffect, useState } from "react";
import { IconButton } from "@mui/material";

import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import LogoutIcon from "@mui/icons-material/Logout";

import { HeaderContainer, HeaderMenu } from "./Header.styled";
import { HeaderProps } from "./types";
import PopButton from "../../../components/styledComponents/Buttons/PopButton/PopButton";
import { colors } from "../../../styles/color";
import List from "../../../components/styledComponents/List/List";
import Icon from "../../../components/styledComponents/Icons/Icon";
import ArrowDropDownIcon from "../../../assets/Icons/ArrowDropdownIcon";
import { Password } from "@mui/icons-material";
import ChangePasswordModal from "./changePasswordModal";
import { useChangePassword } from "../../../utils/hooks/queries/Users";
import useAuthStore from "../../../context/auth-store";
import { useNavigate } from "react-router-dom";

const Header: React.FunctionComponent<HeaderProps> = ({ logOut, user }) => {
  const [show, setShow] = useState({ mode: "none" } as {
    mode: "none" | "create" | "edit";
  });
  const navigate = useNavigate();

  const clearAccessToken = useAuthStore((state) => state.clearAccessToken);

  const { mutate: postMutate, isSuccess: postSuccess } = useChangePassword();

  const menuIconsStyles = {
    fontSize: "1.25rem",
    color: colors.text.primaryTextLight,
  };

  const refetchIfSuccess = useCallback(() => {
    if (postSuccess) {
      navigate("/login");
      clearAccessToken();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [postSuccess]);

  useEffect(() => {
    refetchIfSuccess();
  }, [refetchIfSuccess]);

  const adminPanel = [
    { name: `${user.name}` },
    {
      text: "Profil",
      icon: <PersonOutlineOutlinedIcon sx={menuIconsStyles} />,
      path: `/users/${user.id}`,
      divider: true,
    },
    {
      text: "Şifreyi Değiştir",
      icon: <Password sx={menuIconsStyles} />,
      onClick: () => setShow({ mode: "create" }),
      divider: true,
    },

    {
      text: "Çıkış Yap",
      icon: <LogoutIcon sx={menuIconsStyles} />,
      onClick: logOut,
    },
  ];

  return (
    <HeaderContainer>
      <HeaderMenu>
        Merhaba {user.name}
        <PopButton
          button={
            <IconButton sx={{ padding: "0" }}>
              <Icon
                icon={
                  <ArrowDropDownIcon
                    width={17}
                    height={9}
                    color={colors.action.actionActiveLight}
                  />
                }
              />
            </IconButton>
          }
          popArea={
            <List
              listDetails={adminPanel}
              width="230px"
              minWidth="inherit"
              gap="10px"
              listPadding="15px"
              itemButtonPadding="0px"
              ListContainerPadding="0px 10px"
              ListTextPadding="5px 0px"
              backgroundColor={colors.white.default}
              boxShadow="0px 5px 5px -3px #4C4E6424, 0px 8px 10px 1px #4C4E6424, 0px 3px 14px 2px #4C4E6433"
            />
          }
          pos={{ x: -200, y: 25 }}
        />
      </HeaderMenu>
      <ChangePasswordModal
        setShow={() => setShow({ mode: "none" })}
        show={show.mode === "create"}
        mutate={postMutate}
      />
    </HeaderContainer>
  );
};

export default Header;
