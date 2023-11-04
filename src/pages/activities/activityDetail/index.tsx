import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useGetActivity } from "../../../utils/hooks/queries/Activities";
import {
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
import { AllActivityModel } from "../../../services/be-api/activities/types";
import "react-slideshow-image/dist/styles.css";
import Spinner from "../../../components/Spinner";

const ActivityDetail = () => {
  const { id } = useParams();
  const [activity, setActivity] = useState<AllActivityModel>();

  const { data, isSuccess, isLoading } = useGetActivity({
    queryKeys: {
      id: id,
    },
  });

  useEffect(() => {
    if (data?.data && isSuccess) {
      setActivity(data.data);
    }
  }, [data?.data, isSuccess]);

  return isLoading ? (
    <Spinner />
  ) : (
    <DashboardLayout>
      <CustomCompanyProfileContainer>
        <CustomCompanyProfileTableDiv>
          <CustomCompanyProfileBox>
            <CustomCompanyFirstBox>
              <TextAlignCenterDiv>
                <Typography variant="body-normal-default"></Typography>
              </TextAlignCenterDiv>
            </CustomCompanyFirstBox>
            <CustomCompanyThirdBox>
              <CustomDetailsDiv>
                <CustomDetailsBox>
                  <Typography
                    color={colors.text.primaryTextLight}
                    variant="h6-medium"
                  >
                    Aktivite Başlığı :
                  </Typography>
                  <Typography
                    color={colors.text.secondaryTextLight}
                    variant="h6-medium"
                  >
                    {activity?.title}
                  </Typography>
                </CustomDetailsBox>
                <Divider orientation="horizontal"></Divider>
                <CustomDetailsBox>
                  <Typography
                    color={colors.text.primaryTextLight}
                    variant="body-small-medium"
                  >
                    İsmi :
                  </Typography>
                  <Typography
                    color={colors.text.secondaryTextLight}
                    variant="body-small-default"
                  >
                    {activity?.name}
                  </Typography>
                </CustomDetailsBox>
                <CustomDetailsBox>
                  <Typography
                    color={colors.text.primaryTextLight}
                    variant="body-small-medium"
                  >
                    Açıklama :
                  </Typography>
                  <Typography
                    color={colors.text.secondaryTextLight}
                    variant="body-small-default"
                  >
                    {activity?.description}
                  </Typography>
                </CustomDetailsBox>
                <CustomDetailsBox>
                  <Typography
                    color={colors.text.primaryTextLight}
                    variant="body-small-medium"
                  >
                    Şehir :
                  </Typography>
                  <Typography
                    color={colors.text.secondaryTextLight}
                    variant="body-small-default"
                  >
                    {activity?.city.name}
                  </Typography>
                </CustomDetailsBox>{" "}
                <Divider orientation="horizontal"></Divider>
                {/* <CustomDetailsBox>
                {activity?.images.map((image) => (
                  <Slide>
                    <div
                      style={{ backgroundImage: `url(${image.imageUrl})` }}
                      className="each-slide-effect"
                    ></div>
                  </Slide>
                ))}
              </CustomDetailsBox>{" "} */}
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

export default ActivityDetail;
