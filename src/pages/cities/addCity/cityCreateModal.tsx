import { yupResolver } from "@hookform/resolvers/yup";
import { FC } from "react";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { AddCityValues } from "../types";
import { BoxOfRow, CustomContainer, MaterialUISwitch } from "./index.styled";
import Form from "../../../components/styledComponents/Form/Form";
import Modal from "../../../components/styledComponents/Modal/Modal";
import { ptr } from "../../../utils/helpers";
import FormControlLabel from "@mui/material/FormControlLabel/FormControlLabel";
import {
  useCreateCity,
  useGetAllCities,
} from "../../../utils/hooks/queries/Cities";
import TextField from "../../../components/styledComponents/Input/TextField/TextField";
import Typography from "../../../components/styledComponents/Typography/Typography";

interface IActivityCreateModalProps {
  setShow: (param: any) => void;
  show: boolean;
  onReload: () => void;
}

const CityCreateModal: FC<IActivityCreateModalProps> = ({
  setShow,
  show,
  onReload,
}) => {
  const { mutate } = useCreateCity();
  const schema = yup
    .object()
    .shape({
      name: yup.string().required("Ad alanı zorunludur"),
      isActive: yup.boolean().required("Aktiflik durumu zorunludur"),
    })
    .required();

  const {
    handleSubmit,
    control,
    formState: { errors },
    watch,
    reset,
  } = useForm<AddCityValues>({
    resolver: yupResolver(schema),
    defaultValues: {
      name: "",
      isActive: true,
    },
  });

  const handleAdd = handleSubmit(async (e) => {
    mutate({ data: e });
    setShow(!show);
    onReload();
  });

  const handleCancel = () => {
    setShow(!show);
    reset();
  };

  return (
    <Modal
      open={show}
      onClose={() => handleCancel()}
      onConfirm={() => handleAdd()}
      header={undefined}
      subheader={undefined}
      style={{ width: ptr(600), height: ptr(400) }}
      isAdd
    >
      <CustomContainer>
        <Typography variant="h4-semibold">Şehir Ekle</Typography>
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
                  onError={errors.name}
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
                    control={<MaterialUISwitch sx={{ m: 1 }} defaultChecked />}
                    label={watch("isActive") ? "Aktif" : "Pasif"}
                    {...field}
                  />
                )}
              />
            </BoxOfRow>
          </Form>
        </form>
      </CustomContainer>
    </Modal>
  );
};

export default CityCreateModal;
