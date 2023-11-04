import React from "react";
import { Link, useLocation } from "react-router-dom";

import { ListProps } from "./types";
import {
  CustomList,
  CustomListItemAvatar,
  CustomListItemButton,
  CustomListItemIcon,
  CustomListItemText,
  CustomListSubheader,
  ListActionItem,
  ListContainer,
  UserInfoContainer,
} from "./List.styled";
import Typography from "../Typography/Typography";
import { colors } from "../../../styles/color";
import Avatar from "../Avatar/Avatar";

const List: React.FunctionComponent<ListProps> = ({
  listDetails,
  display,
  listPadding,
  itemButtonPadding,
  ListContainerPadding,
  ListTextPadding,
  gap,
  width,
  minWidth,
  backgroundColor,
  boxShadow,
  isTableActions,
}) => {
  const location = useLocation();
  return (
    <CustomList
      sx={{ backgroundColor, boxShadow, width, padding: listPadding }}
    >
      {listDetails.map((detail, index) => (
        <ListContainer key={index} sx={{ padding: ListContainerPadding }}>
          {isTableActions ? (
            <>
              {detail.disabled ? (
                <ListActionItem
                  sx={{
                    "&:hover": {
                      backgroundColor: detail.disabled
                        ? "transparent"
                        : colors.action.actionHoverLight,
                    },
                  }}
                >
                  {detail.icon}
                  <Typography
                    pointer={!detail.disabled}
                    size={14}
                    disabled={detail.disabled}
                  >
                    {detail.name}
                  </Typography>
                </ListActionItem>
              ) : (
                <ListActionItem
                  sx={{ cursor: "pointer" }}
                  onClick={detail.onClick}
                >
                  {detail.icon}
                  <Typography pointer={!detail.disabled} size={14}>
                    {detail.name}
                  </Typography>
                </ListActionItem>
              )}
            </>
          ) : (
            <>
              {detail.name && (
                <UserInfoContainer>
                  <Typography
                    pointer={!detail.disabled}
                    color={colors.text.primaryTextLight}
                    variant="body-small-semibold"
                  >
                    {detail.name}
                  </Typography>
                  <Typography
                    color={colors.text.disabledTextLight}
                    variant="body-smaller-default"
                  >
                    {detail.role}
                  </Typography>
                </UserInfoContainer>
              )}
              {detail.subheader && (
                <CustomListSubheader>
                  <Typography
                    color={colors.text.disabledTextLight}
                    variant="body-smaller-default"
                  >
                    {detail.subheader}
                  </Typography>
                </CustomListSubheader>
              )}
              <Link
                to={detail.path === undefined ? "#" : detail.path}
                style={{ textDecoration: "none" }}
              >
                <CustomListItemButton
                  selected={
                    detail.id !== undefined &&
                    ((location.pathname === "/" ||
                      location.pathname.includes("dashboard")) &&
                    detail.id === "#"
                      ? true
                      : location.pathname.includes(detail.id))
                  }
                  disableTouchRipple
                  divider={detail.divider}
                  onClick={detail.onClick}
                  sx={{ gap, padding: itemButtonPadding }}
                >
                  {detail.icon && (
                    <CustomListItemIcon
                      sx={{
                        color:
                          detail.id !== undefined
                            ? (location.pathname === "/" ||
                                location.pathname.includes("dashboard")) &&
                              detail.id === "#"
                              ? colors.text.dark.primaryTextLight
                              : location.pathname.includes(detail.id)
                              ? colors.text.dark.primaryTextLight
                              : colors.text.primaryTextLight
                            : "",
                        display,
                        minWidth,
                      }}
                    >
                      {detail.icon}
                    </CustomListItemIcon>
                  )}
                  {detail.avatar && (
                    <CustomListItemAvatar>
                      <Avatar name={detail.avatar}></Avatar>
                    </CustomListItemAvatar>
                  )}

                  {detail.text && (
                    <CustomListItemText sx={{ padding: ListTextPadding }}>
                      <Typography
                        pointer
                        color={
                          detail.id !== undefined
                            ? (location.pathname === "/" ||
                                location.pathname.includes("dashboard")) &&
                              detail.id === "#"
                              ? colors.text.dark.primaryTextLight
                              : location.pathname.includes(detail.id)
                              ? colors.text.dark.primaryTextLight
                              : colors.text.primaryTextLight
                            : ""
                        }
                        variant="body-normal-default"
                      >
                        {detail.text}
                      </Typography>
                    </CustomListItemText>
                  )}
                </CustomListItemButton>
              </Link>
            </>
          )}
        </ListContainer>
      ))}
    </CustomList>
  );
};
export default List;
