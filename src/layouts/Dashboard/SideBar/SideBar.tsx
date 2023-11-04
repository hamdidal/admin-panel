import React from "react";

import SupervisedUserCircleRoundedIcon from "@mui/icons-material/SupervisedUserCircleRounded";

import { SideBarContainer } from "./SideBar.styled";
import { SideBarProps } from "./types";
import Logo from "../Logo/Logo";
import List from "../../../components/styledComponents/List/List";
import {
  Airlines,
  AirportShuttle,
  DirectionsBus,
  FlightTakeoff,
  Hotel,
  LocalActivity,
  LocationCity,
} from "@mui/icons-material";

const SideBar: React.FunctionComponent<SideBarProps> = () => {
  const menuIconsStyles = {
    fontSize: "1.25rem",
  };

  const menuItems = [
    {
      subheader: "KİŞİLER",
      id: "users",
      text: "Kullanıcılar",
      icon: <SupervisedUserCircleRoundedIcon sx={menuIconsStyles} />,
      path: "/users",
    },
    {
      text: "Aktiviteler",
      id: "activities",
      icon: <LocalActivity sx={menuIconsStyles} />,
      path: "/activities",
    },

    {
      subheader: "ULAŞIM VE TURLAR",
      id: "airports",
      text: "Havalimanları",
      icon: <Airlines sx={menuIconsStyles} />,
      path: "/airports",
    },
    {
      text: "Otobüs Terminalleri",
      id: "busStation",
      icon: <DirectionsBus sx={menuIconsStyles} />,
      path: "/busStations",
    },
    {
      text: "Uçuşlar",
      id: "flights",
      icon: <FlightTakeoff sx={menuIconsStyles} />,
      path: "/flights",
    },
    {
      text: "Turlar",
      id: "tours",
      icon: <AirportShuttle sx={menuIconsStyles} />,
      path: "/tours",
    },

    {
      subheader: "HOTELLER VE ŞEHİRLER",
      id: "hotels",
      text: "Hoteller",
      icon: <Hotel sx={menuIconsStyles} />,
      path: "/hotels",
    },
    {
      text: "Şehirler",
      id: "cities",
      icon: <LocationCity sx={menuIconsStyles} />,
      path: "/cities",
    },
  ];

  return (
    <SideBarContainer>
      <Logo> Admin Panel </Logo>
      <List
        listDetails={menuItems}
        width="248px"
        minWidth="inherit"
        listPadding="0px 0px 6px 12px"
        itemButtonPadding="0px 0px 0px 17px"
        gap="10px"
      />
    </SideBarContainer>
  );
};

export default SideBar;
