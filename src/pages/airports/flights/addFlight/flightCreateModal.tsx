import { yupResolver } from "@hookform/resolvers/yup";
import { FC, useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { AddFlightsValues } from "../types";
import { BoxOfRow, CustomContainer, MaterialUISwitch } from "./index.styled";

import FormControlLabel from "@mui/material/FormControlLabel/FormControlLabel";
import AutocompleteContainer from "../../../../components/styledComponents/Input/AutoComplete/Autocomplete";
import {
  useCreateFlight,
  useGetAllAirports,
} from "../../../../utils/hooks/queries/Airports";
import Typography from "../../../../components/styledComponents/Typography/Typography";
import { ptr } from "../../../../utils/helpers";
import Modal from "../../../../components/styledComponents/Modal/Modal";
import { Form } from "../../../../components/styledComponents/Form";
import TextField from "../../../../components/styledComponents/Input/TextField/TextField";
import {
  DatePicker,
  DateTimePicker,
  LocalizationProvider,
} from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Box } from "@mui/material";
import dayjs from "dayjs";

interface IActivityCreateModalProps {
  setShow: (param: any) => void;
  show: boolean;
  onReload: () => void;
}

const FlightCreateModal: FC<IActivityCreateModalProps> = ({
  setShow,
  show,
  onReload,
}) => {
  const [airportOptions, setAirportOptions] = useState<
    { value: string | number; label: string | number }[]
  >([]);
  const [selectedAirport] = useState(1);
  const { mutate } = useCreateFlight();
  const { data: airportsData, isSuccess: airportsSuccess } = useGetAllAirports({
    queryKeys: {},
  });

  useEffect(() => {
    if (airportsData?.data && airportsSuccess) {
      setAirportOptions(
        airportsData?.data.map((airport: any) => ({
          value: airport.id,
          label: airport.name,
        }))
      );
    }
  }, [airportsData?.data, airportsSuccess]);
  const schema = yup
    .object()
    .shape({
      airportId: yup.number().required("Havalimanı ID alanı zorunludur"),
      startDate: yup.string().required("Başlangıç tarihi alanı zorunludur"),
      endDate: yup.string().required("Bitiş tarihi alanı zorunludur"),
      airplaneCode: yup.string().required("Uçak kodu alanı zorunludur"),
      isActive: yup.boolean().required("Aktiflik durumu alanı zorunludur"),
      travelTime: yup.string().required(),
    })
    .required();

  const {
    handleSubmit,
    control,
    formState: { errors },
    watch,
    reset,
  } = useForm<AddFlightsValues>({
    resolver: yupResolver(schema),
    defaultValues: {
      airportId: 0,
      startDate: "",
      endDate: "",
      airplaneCode: "",
      isActive: true,
      travelTime: "",
    },
  });

  const handleAdd = handleSubmit(async (e) => {
    mutate({
      data: {
        airportId: e.airportId,
        startDate: dayjs(
          dayjs(e.startDate.toString()).format("DD/MM/YYYY 00:00")
        ).toISOString(),
        endDate: dayjs(
          dayjs(e.endDate.toString()).format("DD/MM/YYYY 00:00")
        ).toISOString(),
        airplaneCode: e.airplaneCode,
        isActive: e.isActive,
        travelTime: dayjs(e.travelTime.toString()).format("DD/MM/YYYY HH:mm"),
      },
    });
    setShow(!show);
    onReload();
  });

  const handleCancel = () => {
    setShow(!show);
    reset();
  };

  console.log(dayjs(watch("travelTime").toString()).format("DD/MM/YYYY HH:mm"));

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
        <Typography variant="h4-semibold">Uçuş Ekle</Typography>
        <form
          style={{
            width: `calc(100% - ${ptr(24)})`,
            height: `calc(100% - ${ptr(24)})`,
          }}
        >
          <Form gap="large">
            <Controller
              name="airportId"
              control={control}
              render={({ field }) => (
                <AutocompleteContainer
                  width="100%"
                  {...field}
                  label="Havalimanı Seç"
                  options={airportOptions}
                  selectedValue={
                    airportsData?.data.filter(
                      (airport: any) => airport.id === selectedAirport
                    )[0].name
                  }
                />
              )}
            />
            <Controller
              name="airplaneCode"
              control={control}
              rules={{
                required: true,
                maxLength: 256,
              }}
              render={({ field }) => (
                <TextField
                  expand
                  label="Uçuş Kodu"
                  onError={errors.airplaneCode}
                  {...field}
                />
              )}
            />
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: ptr(10),
                flexDirection: "row",
              }}
            >
              <Controller
                name="startDate"
                control={control}
                rules={{
                  required: true,
                  maxLength: 256,
                }}
                render={({ field }) => (
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                      sx={{ width: "50%" }}
                      label="Başlangıç Günü"
                      {...field}
                    />
                  </LocalizationProvider>
                )}
              />
              <Controller
                name="endDate"
                control={control}
                rules={{
                  required: true,
                  maxLength: 256,
                }}
                render={({ field }) => (
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                      sx={{ width: "50%" }}
                      label="Bitiş Günü"
                      {...field}
                    />
                  </LocalizationProvider>
                )}
              />
            </Box>
            <Controller
              name="travelTime"
              control={control}
              rules={{
                required: true,
                maxLength: 256,
              }}
              render={({ field }) => (
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DateTimePicker
                    sx={{ width: "100%" }}
                    label="Seyahat Zamanı"
                    {...field}
                  />
                </LocalizationProvider>
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

export default FlightCreateModal;
