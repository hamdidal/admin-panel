import { yupResolver } from "@hookform/resolvers/yup";
import { FC, useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { CustomContainer } from "./index.styled";
import Form from "../../../components/styledComponents/Form/Form";
import TextField from "../../../components/styledComponents/Input/TextField/TextField";
import Modal from "../../../components/styledComponents/Modal/Modal";
import { ptr } from "../../../utils/helpers";
import Spinner from "../../../components/Spinner";
import { AllClaimModel } from "../../../services/be-api/claims/types";
import Typography from "../../../components/styledComponents/Typography/Typography";

interface IClaimUpdateModalProps {
  setShow: (param: any) => void;
  show: boolean;
  claim: AllClaimModel;
  mutate: any;
}

const ClaimEditModal: FC<IClaimUpdateModalProps> = ({
  setShow,
  show,
  claim,
  mutate,
}) => {
  const [selectedClaim, setSelectedClaim] = useState(claim?.id);

  const schema = yup
    .object()
    .shape({
      id: yup.number().required("Lütfen düzenlenecek kaydı seçin."),
      name: yup.string().required("Yetki ismi zorunludur."),
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
      id: claim?.id,
      name: claim?.name,
    },
  });

  useEffect(() => {
    if (claim) {
      reset({
        id: claim.id,
        name: claim.name,
      });
      setSelectedClaim(claim?.id);
    }
  }, [claim, reset]);

  const handleUpdate = handleSubmit(async (e) => {
    mutate(e);
    setShow(!show);
  });

  const handleCancel = () => {
    setShow(!show);
    reset();
  };

  return claim ? (
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
        <Typography variant="h4-semibold">Yetki Düzenle</Typography>

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
          </Form>
        </form>
      </CustomContainer>
    </Modal>
  ) : (
    <Spinner />
  );
};

export default ClaimEditModal;
