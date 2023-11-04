import { useEffect, useState } from "react";
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
  TextAlignCenterDiv,
} from "./index.styled";
import Typography from "../../../components/styledComponents/Typography/Typography";
import { Divider } from "@mui/material";
import { colors } from "../../../styles/color";
import Modal from "../../../components/styledComponents/Modal/Modal";
import Button from "../../../components/styledComponents/Buttons/Button/Button";
import DashboardLayout from "../../../layouts/Dashboard/DashboardLayout";
import "react-slideshow-image/dist/styles.css";
import { AllUserModel } from "../../../services/be-api/users/types";
import { useGetUser } from "../../../utils/hooks/queries/Users";
import Avatar from "../../../components/styledComponents/Avatar/Avatar";

const UserDetail = () => {
  const { id } = useParams();
  const [user, setUser] = useState<AllUserModel>();

  const { data, isSuccess, isLoading } = useGetUser({
    queryKeys: {
      id: id,
    },
  });

  useEffect(() => {
    if (data?.data && isSuccess) {
      setUser(data.data);
    }
  }, [data?.data, isSuccess]);

  return (
    <DashboardLayout>
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
              <Button onClick={() => "11"}>DÜZENLE</Button>
              <Button
                onClick={() => "11"}
                variant="outlined"
                colorsx={colors.error.errorMain}
                borderColor={colors.error.errorMain}
              >
                SİL
              </Button>
            </CustomCompanyFourthBox>
          </CustomCompanyProfileBox>
        </CustomCompanyProfileTableDiv>
        <Modal
          open={false}
          onClose={function (): void {
            throw new Error("Function not implemented.");
          }}
          onConfirm={function (): void {
            throw new Error("Function not implemented.");
          }}
          header={undefined}
          subheader={undefined}
        ></Modal>
      </CustomCompanyProfileContainer>
    </DashboardLayout>
  );
};

export default UserDetail;
