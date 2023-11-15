import { FC, useEffect, useState } from "react";
import { AllUserModel } from "../../../../services/be-api/groups/types";
import { CustomContainer } from "./index.styled";
import Modal from "../../../../components/styledComponents/Modal/Modal";
import { ptr } from "../../../../utils/helpers";
import Typography from "../../../../components/styledComponents/Typography/Typography";
import Form from "../../../../components/styledComponents/Form/Form";
import TextField from "../../../../components/styledComponents/Input/TextField/TextField";
import { useGetAllUsers } from "../../../../utils/hooks/queries/Users";
import { Autocomplete } from "@mui/material";

interface IActivityCreateModalProps {
  setShow: (param: any) => void;
  show: boolean;
  user: AllUserModel[];
  groupId: number;
  mutate: any;
}

const GroupAddUserModal: FC<IActivityCreateModalProps> = ({
  setShow,
  show,
  user,
  mutate,
  groupId,
}) => {
  const { data: usersData, isSuccess: isGetAllUsersSuccess } = useGetAllUsers({
    queryKeys: {},
  });

  const [userOptions, setUserOptions] = useState<
    { value: string | number; label: string | number }[]
  >([]);

  const [selectedUser, setSelectedUser] = useState<number[]>([]);

  const handleAdd = async () => {
    mutate({
      data: {
        userId: selectedUser,
        groupId: groupId,
      },
    });
    setShow(!show);
  };

  const handleCancel = () => {
    setShow(!show);
  };

  const userIds = new Set(user?.map((y: any) => y.id));

  useEffect(() => {
    if (usersData?.data && isGetAllUsersSuccess) {
      if (user) {
        setUserOptions(
          usersData?.data
            .filter((x: any) => !userIds.has(x.id))
            .map((claims: any) => ({
              value: claims.id,
              label: claims.name,
            }))
        );
      } else {
        setUserOptions(
          usersData?.data.map((claim: any) => ({
            value: claim.id,
            label: claim.name,
          }))
        );
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isGetAllUsersSuccess, user, usersData?.data]);

  return (
    <Modal
      open={show}
      onClose={() => handleCancel()}
      onConfirm={() => handleAdd()}
      header={undefined}
      subheader={undefined}
      disabled={selectedUser.length < 1}
      style={{ width: ptr(600), height: ptr(400) }}
      isAdd
    >
      <CustomContainer>
        <Typography variant="h4-semibold">Üye Ekle</Typography>
        <form
          style={{
            width: `calc(100% - ${ptr(24)})`,
            height: `calc(100% - ${ptr(24)})`,
          }}
        >
          <Form gap="large">
            <Autocomplete
              multiple
              options={userOptions}
              onChange={(e, value: any) => {
                setSelectedUser(value.map((v: any) => v.value));
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  expand
                  variant="standard"
                  label="Üye Seç"
                />
              )}
            />
          </Form>
        </form>
      </CustomContainer>
    </Modal>
  );
};

export default GroupAddUserModal;
