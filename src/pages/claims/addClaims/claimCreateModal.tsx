import { yupResolver } from "@hookform/resolvers/yup";
import { FC } from "react";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { AddClaimValues } from "../types";
import { BoxOfRow, CustomContainer, MaterialUISwitch } from "./index.styled";
import Form from "../../../components/styledComponents/Form/Form";
import Modal from "../../../components/styledComponents/Modal/Modal";
import { ptr } from "../../../utils/helpers";
import FormControlLabel from "@mui/material/FormControlLabel/FormControlLabel";
import {
  useCreateClaim,
  useGetAllClaim,
} from "../../../utils/hooks/queries/Claims";
import TextField from "../../../components/styledComponents/Input/TextField/TextField";
import Typography from "../../../components/styledComponents/Typography/Typography";

interface IActivityCreateModalProps {
  setShow: (param: any) => void;
  show: boolean;
  onReload: () => void;
}

const ClaimCreateModal: FC<IActivityCreateModalProps> = ({
  setShow,
  show,
  onReload,
}) => {
  const { mutate } = useCreateClaim();
  const schema = yup
    .object()
    .shape({
      name: yup.string().required("Yeki ismi zorunludur"),
      
    })
    .required();

  const {
    handleSubmit,
    control,
    formState: { errors },
    watch,
    reset,
  } = useForm<AddClaimValues>({
    resolver: yupResolver(schema),
    defaultValues: {
      name: "",
    },
  });

  const handleAdd = handleSubmit(async (e) => {
    mutate(e);
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
        <Typography variant="h4-semibold">Yetki Ekle</Typography>
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
            
          </Form>
        </form>
      </CustomContainer>
    </Modal>
  );
};

export default ClaimCreateModal;
