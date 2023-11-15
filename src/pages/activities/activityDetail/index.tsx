import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  useDeleteActivityImage,
  useGetActivity,
  usePostActivityImage,
} from "../../../utils/hooks/queries/Activities";
import {
  CustomCompanyFirstBox,
  CustomCompanyProfileBox,
  CustomCompanyProfileContainer,
  CustomCompanyProfileTableDiv,
  CustomCompanyThirdBox,
  CustomDetailsBox,
  CustomDetailsDiv,
  TextAlignCenterDiv,
} from "./index.styled";
import Typography from "../../../components/styledComponents/Typography/Typography";
import { Box, Button, Divider, ImageList, ImageListItem } from "@mui/material";
import { colors } from "../../../styles/color";
import DashboardLayout from "../../../layouts/Dashboard/DashboardLayout";
import { AllActivityModel } from "../../../services/be-api/activities/types";
import "react-slideshow-image/dist/styles.css";
import Spinner from "../../../components/Spinner";
import Modal from "../../../components/styledComponents/Modal/Modal";

const ActivityDetail = () => {
  const { id } = useParams();
  const [activity, setActivity] = useState<AllActivityModel>();
  const [open, setOpen] = useState(false);
  const [link, setlink] = useState("");
  const [selectedImages, setSelectedImages] = useState<any>([]);
  const [selectedImageId, setSelectedImageId] = useState(0);
  const { mutate: postMutate, isSuccess: postSuccess } = usePostActivityImage();
  const { mutate: deleteMutate, isSuccess: deleteSuccess } =
    useDeleteActivityImage();
  const { data, isSuccess, isLoading, refetch } = useGetActivity({
    queryKeys: {
      id: id,
    },
  });

  useEffect(() => {
    if (data?.data && isSuccess) {
      setActivity(data.data);
    }
  }, [data?.data, isSuccess]);

  const handlePhoto = (link: string) => {
    setOpen(!open);
    setlink(link);
  };

  const handleImageChange = (e: any) => {
    const files = e.target.files;
    setSelectedImages([...selectedImages, ...files]);
  };

  useEffect(() => {
    if (selectedImages.length > 0) {
      postMutate({
        id: Number(id),
        image: selectedImages,
      });
      setSelectedImages("");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedImages]);

  const handleModalConfirm = (id: number) => {
    deleteMutate({ id });
    setOpen(!open);
  };

  const refetchIfSuccess = useCallback(() => {
    if (postSuccess || deleteSuccess) {
      refetch();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [postSuccess, deleteSuccess]);

  useEffect(() => {
    refetchIfSuccess();
  }, [refetchIfSuccess]);

  return (
    <DashboardLayout>
      {activity ? (
        <CustomCompanyProfileContainer>
          <CustomCompanyProfileTableDiv>
            <CustomCompanyProfileBox>
              <CustomCompanyFirstBox>
                <TextAlignCenterDiv>
                  <Button variant="contained" component="label">
                    Fotoğraf Yükle
                    <input
                      type="file"
                      multiple
                      hidden
                      onChange={handleImageChange}
                    />
                  </Button>
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
                </CustomDetailsDiv>
              </CustomCompanyThirdBox>
            </CustomCompanyProfileBox>
          </CustomCompanyProfileTableDiv>
          <Box>
            <ImageList
              sx={{ width: 500, height: 450 }}
              cols={3}
              rowHeight={200}
            >
              {activity.images.map((item) => (
                <ImageListItem key={item.id}>
                  <img
                    srcSet={`http://3.91.46.127/${item.imageUrl}`}
                    src={`http://3.91.46.127/${item.imageUrl}`}
                    alt={""}
                    loading="lazy"
                    onClick={() => {
                      handlePhoto(`http://3.91.46.127/${item.imageUrl}`);
                      setSelectedImageId(Number(item.id));
                    }}
                  />
                </ImageListItem>
              ))}
            </ImageList>
          </Box>
        </CustomCompanyProfileContainer>
      ) : (
        <Spinner open={isLoading} />
      )}

      <Modal
        open={open}
        onClose={() => setOpen(!open)}
        onConfirm={() => handleModalConfirm(selectedImageId)}
        isImg
      >
        <img
          width="100%"
          height="100%"
          src={`${link}`}
          alt={""}
          loading="lazy"
        />
      </Modal>
    </DashboardLayout>
  );
};

export default ActivityDetail;
