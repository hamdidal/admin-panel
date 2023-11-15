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
import { AllActivityModel } from "../../../services/be-api/activities/types";
import Typography from "../../../components/styledComponents/Typography/Typography";

interface IActivityCreateModalProps {
  setShow: (param: any) => void;
  show: boolean;
  city: AllActivityModel;
  mutate: any;
}

const CityEditModal: FC<IActivityCreateModalProps> = ({
  setShow,
  show,
  city,
  mutate,
}) => {
  const [selectedCity, setSelectedCity] = useState(city?.id);

  const schema = yup
    .object()
    .shape({
      id: yup.number().required("Ad alanı zorunludur"),
      name: yup.string().required("Ad alanı zorunludur"),
      isActive: yup.boolean().required("Aktiflik durumu zorunludur"),
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
      id: city?.id,
      name: city?.name,
      isActive: city?.isActive,
    },
  });

  useEffect(() => {
    if (city) {
      reset({
        id: city.id,
        name: city.name,
        isActive: city.isActive,
      });
      setSelectedCity(city?.id);
    }
  }, [city, reset]);

  const handleUpdate = handleSubmit(async (e) => {
    mutate({ data: e });
    setShow(!show);
  });

  const handleCancel = () => {
    setShow(!show);
    reset();
  };

  return city ? (
    <Modal
      open={show!}
      onClose={() => handleCancel()}
      onConfirm={() => handleUpdate()}
      header={undefined}
      subheader={undefined}
      style={{ width: ptr(600), height: ptr(400) }}
      isAdd
    >
      <CustomContainer>
        <Typography variant="h4-semibold">Şehir Düzenle</Typography>

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
                        defaultChecked={city?.isActive}
                      />
                    }
                    label={
                      watch("isActive")
                        ? watch("isActive")
                          ? "Aktif"
                          : "Pasif"
                        : city?.isActive
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

export default CityEditModal;
