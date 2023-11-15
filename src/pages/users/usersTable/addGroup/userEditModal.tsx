import { yupResolver } from "@hookform/resolvers/yup";
import { FC, useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { AllUserModel } from "../../../../services/be-api/groups/types";
import { CustomContainer } from "./index.styled";
import Modal from "../../../../components/styledComponents/Modal/Modal";
import { ptr } from "../../../../utils/helpers";
import Typography from "../../../../components/styledComponents/Typography/Typography";
import Form from "../../../../components/styledComponents/Form/Form";
import TextField from "../../../../components/styledComponents/Input/TextField/TextField";
import Spinner from "../../../../components/Spinner";

interface IActivityCreateModalProps {
  setShow: (param: any) => void;
  show: boolean;
  user: AllUserModel;
  mutate: any;
}

const UserEditModal: FC<IActivityCreateModalProps> = ({
  setShow,
  show,
  user,
  mutate,
}) => {
  const schema = yup
    .object()
    .shape({
      id: yup.number().required("Id alanı zorunludur"),
      name: yup.string().required("Ad alanı zorunludur"),
      email: yup.string().required("E-mail alanı zorunludur"),
    })
    .required();

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
    defaultValues: {
      name: user?.name,
      id: user?.id,
      email: user?.email,
    },
  });

  useEffect(() => {
    if (user) {
      reset({
        name: user.name,
        id: user.id,
        email: user.email,
      });
    }
  }, [user, reset]);

  const handleUpdate = handleSubmit(async (e) => {
    mutate({ data: e });
    setShow(!show);
  });

  const handleCancel = () => {
    setShow(!show);
    reset();
  };

  return user ? (
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
        <Typography variant="h4-semibold">Grubu Düzenle</Typography>

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
              name="email"
              control={control}
              rules={{
                required: true,
                maxLength: 256,
              }}
              render={({ field }) => (
                <TextField
                  expand
                  label="E-mail Adresi"
                  onError={errors.name as any}
                  {...field}
                />
              )}
            />
          </Form>
        </form>
      </CustomContainer>
    </Modal>
  ) : (
    <Spinner />
  );
};

export default UserEditModal;
