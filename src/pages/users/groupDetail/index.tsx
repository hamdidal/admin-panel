import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  CustomCompanyFourthBox,
  CustomCompanyProfileBox,
  CustomCompanyProfileContainer,
  CustomCompanyProfileTableDiv,
  CustomCompanyThirdBox,
  CustomDetailsBox,
  CustomDetailsDiv,
} from "./index.styled";
import Typography from "../../../components/styledComponents/Typography/Typography";
import { Box, Divider } from "@mui/material";
import { colors } from "../../../styles/color";
import Modal from "../../../components/styledComponents/Modal/Modal";
import Button from "../../../components/styledComponents/Buttons/Button/Button";
import DashboardLayout from "../../../layouts/Dashboard/DashboardLayout";
import "react-slideshow-image/dist/styles.css";
import { AllUserModel } from "../../../services/be-api/users/types";
import {
  useDeleteGroupClaim,
  useDeleteGroupUser,
  useGetGroup,
  useGetGroupClaim,
  useGetGroupUser,
  usePostGroupClaim,
  usePostGroupUser,
} from "../../../utils/hooks/queries/Groups";
import Table from "../../../components/styledComponents/Table";
import { GridColDef } from "@mui/x-data-grid";
import { TableBodyRowData } from "../../../components/styledComponents/Table/types";
import { ptr } from "../../../utils/helpers";
import { Delete } from "@mui/icons-material";
import GroupClaimModal from "./addUserAndClaim/groupAddClaimModal";
import GroupAddUserModal from "./addUserAndClaim/groupAddUserModal";
import Spinner from "../../../components/Spinner";
import GroupClaimDeleteModal from "./addUserAndClaim/groupDeleteClaim";

export const groupUserHead: GridColDef[] = [
  { field: "name", headerName: "ÜYE İSMİ", width: 130 },
  { field: "email", headerName: "ÜYE MAİLİ", width: 130 },
  { field: "updateAndDelete", headerName: "", width: 130 },
];

const GroupDetail = () => {
  const { id: groupId } = useParams();
  const [group, setGroup] = useState<AllUserModel>();
  const [user, setUser] = useState<AllUserModel[]>([]);
  const [selectedUserId, setselectedUserId] = useState(0);
  const [open, setOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [rowPerPage, setRowPerPage] = useState(10);
  const [show, setShow] = useState({ mode: "none" } as {
    mode: "none" | "claim" | "add" | "delete";
  });

  const {
    data: claimData,
    isSuccess: claimSuccess,
    refetch: claimRefetch,
  } = useGetGroupClaim({
    queryKeys: {
      id: groupId,
    },
  });

  const { mutate: deleteMutate, isSuccess: deleteSuccess } =
    useDeleteGroupUser();
  const { mutate: postClaimMutate, isSuccess: postClaimSuccess } =
    usePostGroupClaim();
  const { mutate: postGroupMutate, isSuccess: postGroupSuccess } =
    usePostGroupUser();
  const { mutate: deleteGroupMutate, isSuccess: deleteGroupSuccess } =
    useDeleteGroupClaim();

  const { data, isSuccess, refetch, isLoading } = useGetGroup({
    queryKeys: {
      id: groupId,
    },
  });

  const {
    data: userData,
    isSuccess: userSuccess,
    isLoading: userLoading,
    refetch: userRefetch,
  } = useGetGroupUser({
    queryKeys: {
      id: groupId,
    },
  });

  useEffect(() => {
    if (data?.data && isSuccess) {
      setGroup(data.data);
    }
  }, [data?.data, isSuccess]);

  useEffect(() => {
    if (userData?.data && userSuccess) {
      setUser(userData.data);
    }
  }, [userData?.data, userSuccess]);

  const handleToggle = () => {
    setOpen(!open);
  };
  const handleModalConfirm = (id: number) => {
    deleteMutate({ groupId: Number(groupId), id: id });
    setOpen(!open);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowPerPage(parseInt(event.target.value, 10));
    setCurrentPage(0);
  };

  const onPageChange = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setCurrentPage(newPage);
  };

  const refetchIfSuccess = useCallback(() => {
    if (
      deleteSuccess ||
      deleteGroupSuccess ||
      postClaimSuccess ||
      postGroupSuccess
    ) {
      refetch();
      userRefetch();
      claimRefetch();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [deleteSuccess, deleteGroupSuccess, postClaimSuccess, postGroupSuccess]);

  useEffect(() => {
    refetchIfSuccess();
  }, [refetchIfSuccess]);

  const rowData: TableBodyRowData[] =
    user &&
    user.map((group) => {
      return {
        name: (
          <Box>
            <Box>
              <Typography variant="body-normal-semibold">
                {group.name}
              </Typography>
            </Box>
          </Box>
        ),

        email: (
          <Box sx={{ display: "flex", alignItems: "center", gap: ptr(12.75) }}>
            <Typography variant="body-normal-semibold">
              {group.email}
            </Typography>
          </Box>
        ),
        updateAndDelete: (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "row",
            }}
          >
            <Button
              onClick={() => {
                handleToggle();
                setselectedUserId(group.id);
              }}
              size="small"
              variant="text"
              colorsx="red"
            >
              <Delete />
            </Button>
          </Box>
        ),
      };
    });

  return (
    <DashboardLayout>
      {group ? (
        <CustomCompanyProfileContainer>
          <CustomCompanyProfileTableDiv>
            <CustomCompanyProfileBox>
              <CustomCompanyThirdBox>
                <CustomDetailsDiv>
                  <CustomDetailsBox>
                    <Typography
                      color={colors.text.primaryTextLight}
                      variant="h6-medium"
                    >
                      Grup İsmi :
                    </Typography>
                    <Typography
                      color={colors.text.secondaryTextLight}
                      variant="h6-medium"
                    >
                      {group?.name}
                    </Typography>
                  </CustomDetailsBox>
                  <Divider orientation="horizontal"></Divider>
                  <CustomDetailsBox>
                    <Table
                      head={groupUserHead}
                      rowsData={rowData}
                      isLoading={userLoading}
                      count={user?.length}
                      onRowsPerPageChange={handleChangeRowsPerPage}
                      onPageChange={onPageChange}
                      result={rowPerPage}
                      isClickable={false}
                      page={currentPage}
                    />
                  </CustomDetailsBox>
                </CustomDetailsDiv>
              </CustomCompanyThirdBox>
              <CustomCompanyFourthBox>
                {claimData?.data.length > 0 && (
                  <Button
                    variant="outlined"
                    colorsx="red"
                    onClick={() => setShow({ mode: "delete" })}
                  >
                    YETKİ SİL
                  </Button>
                )}
                <Button
                  variant="outlined"
                  onClick={() => setShow({ mode: "claim" })}
                >
                  YETKİ VER
                </Button>
                <Button
                  onClick={() => {
                    setShow({ mode: "add" });
                  }}
                >
                  ÜYE EKLE
                </Button>

                <GroupClaimModal
                  setShow={() => setShow({ mode: "none" })}
                  show={show.mode === "claim"}
                  groupId={Number(groupId)}
                  mutate={postClaimMutate}
                  claimData={claimData}
                  claimSuccess={claimSuccess}
                />
                <GroupAddUserModal
                  setShow={() => setShow({ mode: "none" })}
                  show={show.mode === "add"}
                  mutate={postGroupMutate}
                  user={user}
                  groupId={Number(groupId)}
                />
                <GroupClaimDeleteModal
                  setShow={() => setShow({ mode: "none" })}
                  show={show.mode === "delete"}
                  groupId={Number(groupId)}
                  mutate={deleteGroupMutate}
                  claimData={claimData}
                  claimSuccess={claimSuccess}
                />
              </CustomCompanyFourthBox>
            </CustomCompanyProfileBox>
          </CustomCompanyProfileTableDiv>
          <Modal
            type="delete"
            open={open}
            onClose={() => handleToggle()}
            onConfirm={() => handleModalConfirm(selectedUserId)}
            header={"Üyeyi Silmek Üzeresiniz"}
            subheader={"Yine de işleme devam etmek istiyor musunuz?"}
          ></Modal>
        </CustomCompanyProfileContainer>
      ) : (
        <Spinner open={isLoading} />
      )}
    </DashboardLayout>
  );
};

export default GroupDetail;
