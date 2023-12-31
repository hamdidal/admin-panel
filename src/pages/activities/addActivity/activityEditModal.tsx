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
import { AllActivityModel } from "../../../services/be-api/activities/types";
import Typography from "../../../components/styledComponents/Typography/Typography";

interface IActivityCreateModalProps {
  setShow: (param: any) => void;
  show: boolean;
  activity: AllActivityModel;
  mutate: any;
}

const ActivityEditModal: FC<IActivityCreateModalProps> = ({
  setShow,
  show,
  activity,
  mutate,
}) => {
  const [cityOptions, setCityOptions] = useState<
    { value: string | number; label: string | number }[]
  >([]);
  const [selectedCity, setSelectedCity] = useState(activity?.city?.id);

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
      name: activity?.name,
      title: activity?.title,
      description: activity?.description,
      id: activity?.id,
      isActive: activity?.isActive,
      cityId: activity?.city?.id,
    },
  });

  useEffect(() => {
    if (activity) {
      reset({
        name: activity.name,
        title: activity.title,
        description: activity.description,
        id: activity.id,
        isActive: activity.isActive,
      });
      setSelectedCity(activity?.city?.id);
    }
  }, [activity, reset]);

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

  return activity ? (
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
        <Typography variant="h4-semibold">Aktivite Düzenle</Typography>

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
                        defaultChecked={activity?.isActive}
                      />
                    }
                    label={
                      watch("isActive")
                        ? watch("isActive")
                          ? "Aktif"
                          : "Pasif"
                        : activity?.isActive
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

export default ActivityEditModal;
