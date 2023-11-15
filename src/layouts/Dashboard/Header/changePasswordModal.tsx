import { yupResolver } from "@hookform/resolvers/yup";
import { FC } from "react";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import Form from "../../../components/styledComponents/Form/Form";
import Modal from "../../../components/styledComponents/Modal/Modal";
import { ptr } from "../../../utils/helpers";
import Typography from "../../../components/styledComponents/Typography/Typography";
import { ChangePasswordValue } from "./types";
import { CustomContainer } from "../../../pages/activities/addActivity/index.styled";
import PasswordInput from "../../../components/styledComponents/Input/PasswordInput/PasswordInput";

interface IActivityCreateModalProps {
  setShow: (param: any) => void;
  show: boolean;
  mutate: any;
}

const ChangePasswordModal: FC<IActivityCreateModalProps> = ({
  setShow,
  show,
  mutate,
}) => {
  const schema = yup
    .object()
    .shape({
      oldPassword: yup
        .string()
        .required("Eski şifre zorunludur")
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]{6,}$/
        ),
      newPassword: yup
        .string()
        .required("Yeni şifre zorunludur")
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]{6,}$/
        ),
    })
    .required();

  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm<ChangePasswordValue>({
    resolver: yupResolver(schema),
    defaultValues: {
      newPassword: "",
      oldPassword: "",
    },
  });

  const handleAdd = handleSubmit(async (e) => {
    mutate({
      data: {
        oldPassword: e.oldPassword,
        newPassword: e.newPassword,
      },
    });
    setShow(!show);
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
      style={{ width: ptr(600), height: ptr(600) }}
      isAdd
    >
      <CustomContainer>
        <Typography variant="h4-semibold">Şifreyi Değiştir</Typography>
        <form
          style={{
            width: `calc(100% - ${ptr(24)})`,
            height: `calc(100% - ${ptr(24)})`,
          }}
        >
          <Form gap="large">
            <Controller
              name="newPassword"
              control={control}
              rules={{
                required: true,
                maxLength: 64,
              }}
              render={({ field }) => (
                <PasswordInput
                  expand
                  label="Yeni Şifre"
                  onError={errors.newPassword}
                  {...field}
                />
              )}
            />
            <Controller
              name="oldPassword"
              control={control}
              rules={{
                required: true,
                maxLength: 64,
              }}
              render={({ field }) => (
                <PasswordInput
                  expand
                  label="Eski Şifre"
                  onError={errors.oldPassword}
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

export default ChangePasswordModal;
