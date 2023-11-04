import { yupResolver } from "@hookform/resolvers/yup";
import { FC, useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { BoxOfRow, CustomContainer, MaterialUISwitch } from "./index.styled";
import Form from "../../../components/styledComponents/Form/Form";
import TextField from "../../../components/styledComponents/Input/TextField/TextField";
import Modal from "../../../components/styledComponents/Modal/Modal";
import { ptr } from "../../../utils/helpers";
import FormControlLabel from "@mui/material/FormControlLabel/FormControlLabel";
import Spinner from "../../../components/Spinner";
import Typography from "../../../components/styledComponents/Typography/Typography";
import { usePutHotel } from "../../../utils/hooks/queries/Hotels";

interface IActivityCreateModalProps {
  setShow: (param: any) => void;
  show: boolean;
  hotel: any;
  onReload: () => void;
}

const HotelEditModal: FC<IActivityCreateModalProps> = ({
  setShow,
  show,
  hotel,
  onReload,
}) => {
  const [selectedCity, setSelectedCity] = useState(hotel?.id);

  const schema = yup
    .object()
    .shape({
      id: yup.number().required("Ad alanı zorunludur"),
      name: yup.string().required("Ad alanı zorunludur"),
      isActive: yup.boolean().required("Aktiflik durumu zorunludur"),
      description: yup.string().required("Açıklama alanı zorunludur"),
    })
    .required();

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
    watch,
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
    defaultValues: {
      id: hotel?.id,
      name: hotel?.name,
      isActive: hotel?.isActive,
      description: hotel?.description,
    },
  });

  useEffect(() => {
    if (hotel) {
      reset({
        id: hotel.id,
        name: hotel.name,
        isActive: hotel.isActive,
        description: hotel.description,
      });
      setSelectedCity(hotel?.id);
    }
  }, [hotel, reset]);

  const { mutate, isSuccess } = usePutHotel();

  const handleUpdate = handleSubmit(async (e) => {
    mutate({ data: e });
    onReload();
    setShow(!show);
  });

  const handleCancel = () => {
    setShow(!show);
    reset();
  };

  return hotel ? (
    <Modal
      open={show!}
      onClose={() => handleCancel()}
      onConfirm={() => handleUpdate()}
      header={undefined}
      subheader={undefined}
      style={{ width: ptr(600), height: ptr(600) }}
      isAdd
    >
      <CustomContainer>
        <Typography variant="h4-semibold">Hotel Düzenle</Typography>

        <form
          style={{
            width: `calc(100% - ${ptr(24)})`,
            height: `calc(100% - ${ptr(24)})`,
          }}
        >
          <Form gap="large">
            <Controller
              name="name"
              control={control}
              rules={{
                required: true,
                maxLength: 256,
              }}
              render={({ field }) => (
                <TextField
                  expand
                  label="İsim"
                  onError={errors.name as any}
                  {...field}
                />
              )}
            />
            <Controller
              name="description"
              control={control}
              rules={{
                required: true,
                maxLength: 256,
              }}
              render={({ field }) => (
                <TextField
                  {...field}
                  expand
                  label="Açıklama"
                  onError={errors.description as any}
                />
              )}
            />
            <BoxOfRow>
              <Controller
                name="isActive"
                control={control}
                rules={{}}
                render={({ field }) => (
                  <FormControlLabel
                    control={
                      <MaterialUISwitch
                        sx={{ m: 1 }}
                        defaultChecked={hotel?.isActive}
                      />
                    }
                    label={
                      watch("isActive")
                        ? watch("isActive")
                          ? "Aktif"
                          : "Pasif"
                        : hotel?.isActive
                        ? "Aktif"
                        : "Pasif"
                    }
                    {...field}
                  />
                )}
              />
            </BoxOfRow>
          </Form>
        </form>
      </CustomContainer>
    </Modal>
  ) : (
    <Spinner />
  );
};

export default HotelEditModal;
