import { FC, useEffect, useState } from "react";
import Modal from "../../../../components/styledComponents/Modal/Modal";
import { CustomContainer } from "./index.styled";
import Typography from "../../../../components/styledComponents/Typography/Typography";
import { ptr } from "../../../../utils/helpers";
import { Form } from "../../../../components/styledComponents/Form";
import TextField from "../../../../components/styledComponents/Input/TextField/TextField";
import { Autocomplete } from "@mui/material";

interface IActivityCreateModalProps {
  setShow: (param: any) => void;
  show: boolean;
  mutate: any;
  groupId: number;
  claimData: any;
  claimSuccess: boolean;
}

const GroupClaimDeleteModal: FC<IActivityCreateModalProps> = ({
  setShow,
  show,
  mutate,
  groupId,
  claimData,
  claimSuccess,
}) => {
  const [claimOptions, setClaimOptions] = useState<
    { value: string | number; label: string | number }[]
  >([]);
  const [selectedClaim, setSelectedClaim] = useState<number>(0);

  const handleAdd = async () => {
    mutate({
      id: selectedClaim,
      groupId: groupId,
    });
    setShow(!show);
  };

  const handleCancel = () => {
    setShow(!show);
  };

  useEffect(() => {
    if (claimData?.data && claimSuccess) {
      setClaimOptions(
        claimData?.data.map((claim: any) => ({
          value: claim.id,
          label: claim.name,
        }))
      );
    }
  }, [claimData?.data, claimSuccess]);

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
        <Typography variant="h4-semibold">Yetki Sil</Typography>
        <form
          style={{
            width: `calc(100% - ${ptr(24)})`,
            height: `calc(100% - ${ptr(24)})`,
          }}
        >
          <Form gap="large">
            <Autocomplete
              multiple
              options={claimOptions}
              onChange={(e, value: any) => {
                setSelectedClaim(value.map((v: any) => v.value));
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  expand
                  variant="standard"
                  label="Yetki Seç"
                />
              )}
            />
          </Form>
        </form>
      </CustomContainer>
    </Modal>
  );
};

export default GroupClaimDeleteModal;
