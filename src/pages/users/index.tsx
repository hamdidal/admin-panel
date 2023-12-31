import Badge from "@mui/material/Badge";
import DashboardLayout from "../../layouts/Dashboard/DashboardLayout";
import { useGetAllGroups } from "../../utils/hooks/queries/Groups";
import { useGetAllUsers } from "../../utils/hooks/queries/Users";
import GroupTable from "./groupTable";
import {
  CustomBoxColumn,
  CustomCardBox,
  CustomCardPaper,
} from "./index.styled";
import UsersTable from "./usersTable";
import { colors } from "../../styles/color";
import { PermIdentity } from "@mui/icons-material";
import Typography from "../../components/styledComponents/Typography/Typography";
import { ptr } from "../../utils/helpers";
import { Box } from "@mui/material";

const UsersPage = () => {
  const {
    data: usersData,
    isSuccess: isGetAllUsersSuccess,
    isLoading: isGetAllUsersLoading,
    refetch: userRefetch,
  } = useGetAllUsers({
    queryKeys: {},
  });

  const {
    data: groupsData,
    isSuccess: isGetAllGroupsSuccess,
    isLoading: isGetAllGroupsLoading,
    refetch: groupRefetch,
  } = useGetAllGroups({
    queryKeys: {},
  });

  return (
    <DashboardLayout>
      <CustomCardBox>
        <CustomBoxColumn>
          <Typography variant="h4-semibold">Kullanıcılar</Typography>
        </CustomBoxColumn>
      </CustomCardBox>
      <CustomCardBox>
        <CustomCardPaper>
          <Badge
            sx={{
              background: colors.white.greyLight,
              color: colors.white.grey,
              borderRadius: "8px",
              height: ptr(40),
              width: ptr(40),
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <PermIdentity fontSize="medium" />
          </Badge>
          <CustomBoxColumn>
            <Typography
              color={colors.text.secondaryTextLight}
              variant="body-small-default"
            >
              Toplam Kullanıcı
            </Typography>
            <Typography variant="h6-medium">
              {usersData?.data.length}
            </Typography>
          </CustomBoxColumn>
        </CustomCardPaper>
        <CustomCardPaper>
          <Badge
            sx={{
              background: colors.white.greyLight,
              color: colors.white.grey,
              borderRadius: "8px",
              height: ptr(40),
              width: ptr(40),
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <PermIdentity fontSize="medium" />
          </Badge>
          <CustomBoxColumn>
            <Typography
              color={colors.text.secondaryTextLight}
              variant="body-small-default"
            >
              Toplam Grup Sayısı
            </Typography>
            <Typography variant="h6-medium">
              {groupsData?.data.length}
            </Typography>
          </CustomBoxColumn>
        </CustomCardPaper>
      </CustomCardBox>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "row",
        }}
      >
        {" "}
        <UsersTable
          data={usersData?.data}
          isLoading={isGetAllUsersLoading}
          isSuccess={isGetAllUsersSuccess}
          refetch={userRefetch}
        />
        <GroupTable
          data={groupsData?.data}
          isLoading={isGetAllGroupsLoading}
          isSuccess={isGetAllGroupsSuccess}
          refetch={groupRefetch}
        />
      </Box>
    </DashboardLayout>
  );
};

export default UsersPage;
