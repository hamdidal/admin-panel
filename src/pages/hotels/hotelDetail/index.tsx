import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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
import Spinner from "../../../components/Spinner";
import Modal from "../../../components/styledComponents/Modal/Modal";
import {
  useDeleteHotelImage,
  useGetHotel,
  usePostHotelImage,
} from "../../../utils/hooks/queries/Hotels";

const HotelDetail = () => {
  const { id } = useParams();
  const [hotel, setHotel] = useState<any>();
  const [open, setOpen] = useState(false);
  const [link, setlink] = useState("");
  const [selectedImages, setSelectedImages] = useState<any>([]);
  const [selectedImageId, setSelectedImageId] = useState(0);
  const { mutate: postMutate, isSuccess: postSuccess } = usePostHotelImage();
  const { mutate: deleteMutate, isSuccess: deleteSuccess } =
    useDeleteHotelImage();
  const { data, isSuccess, isLoading, refetch } = useGetHotel({
    queryKeys: {
      id: id,
    },
  });

  useEffect(() => {
    if (data?.data && isSuccess) {
      setHotel(data.data);
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

  console.log(hotel);

  return (
    <DashboardLayout>
      {hotel ? (
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
                      Hotel İsmi :
                    </Typography>
                    <Typography
                      color={colors.text.secondaryTextLight}
                      variant="h6-medium"
                    >
                      {hotel?.name}
                    </Typography>
                  </CustomDetailsBox>
                  <Divider orientation="horizontal"></Divider>
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
                      isLineClamp
                      lineClampRow={10}
                    >
                      {hotel?.description}
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
                      {hotel.city.name}
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
              rowHeight={164}
            >
              {hotel.images?.map((item: any) => (
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

export default HotelDetail;
