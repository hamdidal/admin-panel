import { yupResolver } from "@hookform/resolvers/yup";
import { FC } from "react";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { usePostGroup } from "../../../../utils/hooks/queries/Groups";
import Modal from "../../../../components/styledComponents/Modal/Modal";
import { CustomContainer } from "./index.styled";
import Typography from "../../../../components/styledComponents/Typography/Typography";
import { ptr } from "../../../../utils/helpers";
import { Form } from "../../../../components/styledComponents/Form";
import TextField from "../../../../components/styledComponents/Input/TextField/TextField";
import { AddGroupValues } from "../../types";

interface IActivityCreateModalProps {
  setShow: (param: any) => void;
  show: boolean;
  onReload: () => void;
}

const GroupCreateModal: FC<IActivityCreateModalProps> = ({
  setShow,
  show,
  onReload,
}) => {
  const { mutate } = usePostGroup();
  const schema = yup
    .object()
    .shape({
      name: yup.string().required("Ad alanı zorunludur"),
    })
    .required();

  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm<AddGroupValues>({
    resolver: yupResolver(schema),
    defaultValues: {
      name: "",
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
        <Typography variant="h4-semibold">Grup Ekle</Typography>
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

export default GroupCreateModal;
