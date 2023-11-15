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
import { useGetAllCities } from "../../../utils/hooks/queries/Cities";
import AutocompleteContainer from "../../../components/styledComponents/Input/AutoComplete/Autocomplete";
import Typography from "../../../components/styledComponents/Typography/Typography";
import { AddTerminalValues } from "../types";

interface IActivityCreateModalProps {
  setShow: (param: any) => void;
  show: boolean;
  mutate: any;
}

const TerminalCreateModal: FC<IActivityCreateModalProps> = ({
  setShow,
  show,
  mutate,
}) => {
  const [cityOptions, setCityOptions] = useState<
    { value: string | number; label: string | number }[]
  >([]);
  const [selectedCity] = useState(1);

  const { data: cityData, isSuccess: citySuccess } = useGetAllCities({
    queryKeys: {},
  });

  const schema = yup
    .object()
    .shape({
      name: yup.string().required("Ad alanı zorunludur"),
      description: yup.string().required("Açıklama alanı zorunludur"),
      isActive: yup.boolean().required("Aktiflik durumu zorunludur"),
      cityId: yup.number().required("Şehir ID alanı zorunludur"),
    })
    .required();

  const {
    handleSubmit,
    control,
    formState: { errors },
    watch,
    reset,
  } = useForm<AddTerminalValues>({
    resolver: yupResolver(schema),
    defaultValues: {
      name: "",
      description: "",
      isActive: true,
      cityId: 1,
    },
  });

  const handleAdd = handleSubmit(async (e) => {
    mutate({ data: e });
    setShow(!show);
  });

  useEffect(() => {
    if (cityData?.data && citySuccess) {
      setCityOptions(
        cityData?.data.map((city: any) => ({
          value: city.id,
          label: city.name,
        }))
      );
    }
  }, [cityData?.data, citySuccess]);

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
      style={{ width: ptr(600), height: ptr(600) }}
      isAdd
    >
      <CustomContainer>
        <Typography variant="h4-semibold">Terminal Ekle</Typography>
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
            <Controller
              name="description"
              control={control}
              rules={{
                required: true,
                maxLength: 256,
              }}
              render={({ field }) => (
                <TextField
                  expand
                  label="Açıklama"
                  onError={errors.description}
                  {...field}
                />
              )}
            />
            <Controller
              name="cityId"
              control={control}
              render={({ field }) => (
                <AutocompleteContainer
                  width="100%"
                  {...field}
                  label="Şehir Seç"
                  options={cityOptions}
                  selectedValue={
                    cityData?.data.filter(
                      (city: any) => city.id === selectedCity
                    )[0].name
                  }
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

export default TerminalCreateModal;
