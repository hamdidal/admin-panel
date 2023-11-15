import { FC, useEffect, useState } from "react";
import Modal from "../../../../components/styledComponents/Modal/Modal";
import { CustomContainer } from "./index.styled";
import Typography from "../../../../components/styledComponents/Typography/Typography";
import { ptr } from "../../../../utils/helpers";
import { Form } from "../../../../components/styledComponents/Form";
import TextField from "../../../../components/styledComponents/Input/TextField/TextField";
import { useGetAllClaim } from "../../../../utils/hooks/queries/Claims";
import { Autocomplete } from "@mui/material";

interface IActivityCreateModalProps {
  setShow: (param: any) => void;
  show: boolean;
  mutate: any;
  groupId: number;
  claimData: any;
  claimSuccess: boolean;
}

const GroupClaimModal: FC<IActivityCreateModalProps> = ({
  setShow,
  show,
  mutate,
  groupId,
  claimData,
  claimSuccess,
}) => {
  const { data, isSuccess } = useGetAllClaim({
    queryKeys: {},
  });

  const [claimOptions, setClaimOptions] = useState<
    { value: string | number; label: string | number }[]
  >([]);
  const [selectedClaim, setSelectedClaim] = useState<number[]>([]);

  const handleAdd = async () => {
    mutate({
      data: {
        claimId: selectedClaim,
        groupId: groupId,
      },
    });
    setShow(!show);
  };

  const handleCancel = () => {
    setShow(!show);
  };

  const claimIds = new Set(claimData?.data.map((y: any) => y.id));

  useEffect(() => {
    if (data?.data && isSuccess) {
      if (claimData?.data && claimSuccess) {
        setClaimOptions(
          data?.data
            .filter((x: any) => !claimIds.has(x.id))
            .map((claims: any) => ({
              value: claims.id,
              label: claims.name,
            }))
        );
      } else {
        setClaimOptions(
          data?.data.map((claim: any) => ({
            value: claim.id,
            label: claim.name,
          }))
        );
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [claimData?.data, claimSuccess, data?.data, isSuccess]);

  return (
    <Modal
      open={show}
      onClose={() => handleCancel()}
      onConfirm={() => handleAdd()}
      header={undefined}
      subheader={undefined}
      disabled={selectedClaim.length < 1}
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

export default GroupClaimModal;
