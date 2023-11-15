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
import Spinner from "../../../components/Spinner";
import Typography from "../../../components/styledComponents/Typography/Typography";
import { AllTourModel } from "../../../services/be-api/tours/types";

interface IActivityCreateModalProps {
  setShow: (param: any) => void;
  show: boolean;
  tour: AllTourModel;
  mutate: any;
}

const TourEditModal: FC<IActivityCreateModalProps> = ({
  setShow,
  show,
  tour,
  mutate,
}) => {
  const [cityOptions, setCityOptions] = useState<
    { value: string | number; label: string | number }[]
  >([]);
  const [selectedCity, setSelectedCity] = useState(tour?.cityId);

  const schema = yup
    .object()
    .shape({
      id: yup.number().required("Ad alanı zorunludur"),
      name: yup.string().required("Ad alanı zorunludur"),
      title: yup.string().required("Başlık alanı zorunludur"),
      description: yup.string().required("Açıklama alanı zorunludur"),
      isActive: yup.boolean().required("Aktiflik durumu zorunludur"),
      cityId: yup.number().required("Şehir ID alanı zorunludur"),
    })
    .required();

  const { data: cityData, isSuccess: citySuccess } = useGetAllCities({
    queryKeys: {},
  });

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
      name: tour?.name,
      title: tour?.title,
      description: tour?.description,
      id: tour?.id,
      isActive: tour?.isActive,
      cityId: tour?.cityId,
    },
  });

  useEffect(() => {
    if (tour) {
      reset({
        name: tour.name,
        title: tour.title,
        description: tour.description,
        id: tour.id,
        isActive: tour.isActive,
        cityId: tour?.cityId,
      });
      setSelectedCity(tour?.cityId);
    }
  }, [tour, reset]);

  const handleUpdate = handleSubmit(async (e) => {
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

  return tour ? (
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
        <Typography variant="h4-semibold">Turu Düzenle</Typography>

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
              name="title"
              control={control}
              rules={{
                required: true,
                maxLength: 256,
              }}
              render={({ field }) => (
                <TextField
                  expand
                  label="Başlık"
                  onError={errors.title as any}
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
            <Controller
              name="cityId"
              control={control}
              render={({ field }) => (
                <AutocompleteContainer
                  width="100%"
                  {...field}
                  label="Şehir Seç"
                  options={cityOptions}
                  isOptionEqual={(option: any, value: any) =>
                    option.label.toLowerCase() === value.toLowerCase()
                  }
                  selectedValue={
                    cityData?.data.filter(
                      (city: any) => city.id === selectedCity
                    )[0]?.name
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
                    control={
                      <MaterialUISwitch
                        sx={{ m: 1 }}
                        defaultChecked={tour?.isActive}
                      />
                    }
                    label={
                      watch("isActive")
                        ? watch("isActive")
                          ? "Aktif"
                          : "Pasif"
                        : tour?.isActive
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

export default TourEditModal;
