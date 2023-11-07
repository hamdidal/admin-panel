import { yupResolver } from "@hookform/resolvers/yup";
import { FC, useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { usePostActivity } from "../../../utils/hooks/queries/Activities";
import { BoxOfRow, CustomContainer, MaterialUISwitch } from "./index.styled";
import Form from "../../../components/styledComponents/Form/Form";
import TextField from "../../../components/styledComponents/Input/TextField/TextField";
import Modal from "../../../components/styledComponents/Modal/Modal";
import { ptr } from "../../../utils/helpers";
import FormControlLabel from "@mui/material/FormControlLabel/FormControlLabel";
import { useGetAllCities } from "../../../utils/hooks/queries/Cities";
import AutocompleteContainer from "../../../components/styledComponents/Input/AutoComplete/Autocomplete";
import Typography from "../../../components/styledComponents/Typography/Typography";
import { usePostTour } from "../../../utils/hooks/queries/Tours";
import { AddAirportValues } from "../types";
import { usePostAirport } from "../../../utils/hooks/queries/Airports";

interface IActivityCreateModalProps {
  setShow: (param: any) => void;
  show: boolean;
  onReload: () => void;
}

const AirportCreateModal: FC<IActivityCreateModalProps> = ({
  setShow,
  show,
  onReload,
}) => {
  const [cityOptions, setCityOptions] = useState<
    { value: string | number; label: string | number }[]
  >([]);
  const [selectedCity, setSelectedCity] = useState(1);

  const { data: cityData, isSuccess: citySuccess } = useGetAllCities({
    queryKeys: {},
  });

  const { mutate, isSuccess } = usePostAirport();
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
  } = useForm<AddAirportValues>({
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
    onReload();
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
        <Typography variant="h4-semibold">Tur Ekle</Typography>
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

export default AirportCreateModal;
