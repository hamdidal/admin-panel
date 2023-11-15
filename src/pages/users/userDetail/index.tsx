import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  AvatarImageDiv,
  CustomCompanyFirstBox,
  CustomCompanyFourthBox,
  CustomCompanyProfileBox,
  CustomCompanyProfileContainer,
  CustomCompanyProfileTableDiv,
  CustomCompanyThirdBox,
  CustomDetailsBox,
  CustomDetailsDiv,
} from "./index.styled";
import Typography from "../../../components/styledComponents/Typography/Typography";
import { Divider } from "@mui/material";
import { colors } from "../../../styles/color";
import Button from "../../../components/styledComponents/Buttons/Button/Button";
import DashboardLayout from "../../../layouts/Dashboard/DashboardLayout";
import "react-slideshow-image/dist/styles.css";
import { AllUserModel } from "../../../services/be-api/users/types";
import {
  useDeleteUserClaim,
  useGetUser,
  useGetUserClaim,
  usePostUserClaim,
  usePutUser,
} from "../../../utils/hooks/queries/Users";
import Avatar from "../../../components/styledComponents/Avatar/Avatar";
import useAuthStore from "../../../context/auth-store";
import useUserStore from "../../../context/user-store";
import UserClaimAddModal from "./addClaim/userAddClaimModal";
import UserClaimDeleteModal from "./addClaim/userDeleteClaimModal";
import Spinner from "../../../components/Spinner";
import UserEditModal from "../usersTable/addGroup/userEditModal";

const UserDetail = () => {
  const { id } = useParams();
  const [user, setUser] = useState<AllUserModel>();
  const [show, setShow] = useState({ mode: "none" } as {
    mode: "none" | "claim" | "add" | "delete" | "edit";
  });
  const { user: currentUser } = useAuthStore();
  const { role } = useUserStore();

  const {
    data: claimData,
    isSuccess: claimSuccess,
    refetch: claimRefetch,
  } = useGetUserClaim({
    queryKeys: {
      id: id,
    },
  });

  const { mutate: postClaimMutate, isSuccess: postClaimSuccess } =
    usePostUserClaim();
  const { mutate: deleteClaimMutate, isSuccess: deletClaimSuccess } =
    useDeleteUserClaim();
  const { mutate: updateUserMutate, isSuccess: updateUserSuccess } =
    usePutUser();

  const { data, isSuccess, isLoading, refetch } = useGetUser({
    queryKeys: {
      id: id,
    },
  });

  useEffect(() => {
    if (data?.data && isSuccess) {
      setUser(data.data);
    }
  }, [data?.data, isSuccess]);

  const refetchIfSuccess = useCallback(() => {
    if (deletClaimSuccess || postClaimSuccess || updateUserSuccess) {
      refetch();
      claimRefetch();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [claimRefetch, deletClaimSuccess, postClaimSuccess, updateUserSuccess]);

  useEffect(() => {
    refetchIfSuccess();
  }, [refetchIfSuccess]);

  return (
    <DashboardLayout>
      {user ? (
        <CustomCompanyProfileContainer>
          <CustomCompanyProfileTableDiv>
            <CustomCompanyProfileBox>
              <CustomCompanyFirstBox>
                {!user?.imageUrl ? (
                  user?.name && (
                    <Avatar
                      name={user?.name}
                      width={120}
                      height={120}
                      fontSize={"18px"}
                    ></Avatar>
                  )
                ) : (
                  <AvatarImageDiv
                    style={{ backgroundImage: `url(${user.imageUrl})` }}
                  />
                )}
              </CustomCompanyFirstBox>
              <CustomCompanyThirdBox>
                <CustomDetailsDiv>
                  <CustomDetailsBox>
                    <Typography
                      color={colors.text.primaryTextLight}
                      variant="h6-medium"
                    >
                      Kullanıcı İsmi :
                    </Typography>
                    <Typography
                      color={colors.text.secondaryTextLight}
                      variant="h6-medium"
                    >
                      {user?.name}
                    </Typography>
                  </CustomDetailsBox>
                  <Divider orientation="horizontal"></Divider>
                  <CustomDetailsBox>
                    <Typography
                      color={colors.text.primaryTextLight}
                      variant="body-small-medium"
                    >
                      E-mail :
                    </Typography>
                    <Typography
                      color={colors.text.secondaryTextLight}
                      variant="body-small-default"
                    >
                      {user?.email}
                    </Typography>
                  </CustomDetailsBox>
                </CustomDetailsDiv>
              </CustomCompanyThirdBox>
              <CustomCompanyFourthBox>
                {role.id !== 0
                  ? role?.map((roro: any) => roro.name.includes("Admin")) && (
                      <>
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
                      </>
                    )
                  : ""}
                {currentUser.id === Number(id) && (
                  <Button onClick={() => setShow({ mode: "edit" })}>
                    DÜZENLE
                  </Button>
                )}
                <UserClaimAddModal
                  setShow={() => setShow({ mode: "none" })}
                  show={show.mode === "claim"}
                  userId={Number(id)}
                  mutate={postClaimMutate}
                  claimData={claimData}
                  claimSuccess={claimSuccess}
                />
                <UserClaimDeleteModal
                  setShow={() => setShow({ mode: "none" })}
                  show={show.mode === "delete"}
                  userId={Number(id)}
                  mutate={deleteClaimMutate}
                  claimData={claimData}
                  claimSuccess={claimSuccess}
                />
                <UserEditModal
                  setShow={() => setShow({ mode: "none" })}
                  show={show.mode === "edit"}
                  mutate={updateUserMutate}
                  user={user}
                />
              </CustomCompanyFourthBox>
            </CustomCompanyProfileBox>
          </CustomCompanyProfileTableDiv>
        </CustomCompanyProfileContainer>
      ) : (
        <Spinner open={isLoading} />
      )}
    </DashboardLayout>
  );
};

export default UserDetail;
