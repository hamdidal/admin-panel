import { GridColDef } from "@mui/x-data-grid";
import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Box } from "@mui/material";
import { Delete, Update, Verified } from "@mui/icons-material";
import { TableBodyRowData } from "../../../components/styledComponents/Table/types";
import Typography from "../../../components/styledComponents/Typography/Typography";
import { colors } from "../../../styles/color";
import Table from "../../../components/styledComponents/Table";
import { ptr } from "../../../utils/helpers";

import { DataProps } from "../types";
import {
  CustomCompaniesContainer,
  CustomTableDiv,
  UserNameBox,
} from "../index.styled";
import Avatar from "../../../components/styledComponents/Avatar/Avatar";
import { FilterGroup, FilterSection } from "../groupTable/index.styled";
import SearchInput from "../../../components/styledComponents/Input/SearchInput/SearchInput";
import Fuse from "fuse.js";
import _debounce from "lodash/debounce";
import Button from "../../../components/styledComponents/Buttons/Button/Button";
import UserEditModal from "./addGroup/userEditModal";
import Modal from "../../../components/styledComponents/Modal/Modal";
import {
  useDeleteUser,
  usePutUserByAdmin,
} from "../../../utils/hooks/queries/Users";

export const usersHead: GridColDef[] = [
  { field: "name", headerName: "KULLANICI İSMİ", width: 230 },
  { field: "telephone", headerName: "TELEFON", width: 130 },
  { field: "role", headerName: "ROL", width: 130 },
  { field: "updateAndDelete", headerName: "", width: 130 },
];

const UsersTable: React.FC<DataProps> = ({
  data,
  isLoading,
  isSuccess,
  refetch,
}) => {
  const [users, setUsers] = useState<any[]>([]);
  const [filterText, setFilterText] = useState("");
  const [show, setShow] = useState({ mode: "none" } as {
    mode: "none" | "create" | "edit";
  });
  const [open, setOpen] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState(0);
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(0);
  const [rowPerPage, setRowPerPage] = useState(10);

  const { mutate: deleteMutate, isSuccess: deleteSuccess } = useDeleteUser();
  const { mutate: editMutate, isSuccess: editSuccess } = usePutUserByAdmin();

  useEffect(() => {
    if (isSuccess && data) {
      setUsers(data);
    }
  }, [isSuccess, data]);

  const handleTo = (id: number, type: string) => {
    navigate(`/${type}/${id}`);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowPerPage(parseInt(event.target.value, 10));
    setCurrentPage(0);
  };

  const onPageChange = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setCurrentPage(newPage);
  };

  const filterData = () => {
    if (users?.length === 0 || !filterText) {
      return setUsers(data);
    }
    const fuse = new Fuse(users, {
      keys: Object.keys(users[0]),
    });

    const results = fuse.search(filterText);
    return setUsers(results.map((result) => result.item));
  };

  const handleFilter = (event: any): void => {
    _debounce(() => {
      setFilterText(event);
    }, 500)();
  };

  useEffect(() => {
    filterData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterText]);

  const handleToggle = () => {
    setOpen(!open);
  };
  const handleModalConfirm = (id: number) => {
    deleteMutate({ id });
    setOpen(!open);
  };

  const refetchIfSuccess = useCallback(() => {
    if (deleteSuccess || editSuccess) {
      refetch();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [deleteSuccess, editSuccess]);

  useEffect(() => {
    refetchIfSuccess();
  }, [refetchIfSuccess]);

  const rowData: TableBodyRowData[] =
    users &&
    users.map((user) => {
      return {
        name: (
          <Box>
            <UserNameBox>
              <Typography>
                {user.imageUrl ? (
                  <Avatar src={user.imageUrl} />
                ) : (
                  <Avatar name={user?.name} />
                )}
              </Typography>
              <Typography
                variant="body-normal-semibold"
                onClick={() => handleTo(user.id as number, "users")}
              >
                {user.name} {user.surname}
              </Typography>
            </UserNameBox>
          </Box>
        ),
        telephone: (
          <Box sx={{ display: "flex", alignItems: "center", gap: ptr(12.75) }}>
            <Typography variant="body-normal-semibold">
              {user.phoneNumber}
            </Typography>
            {user.isPhoneNumberConfirmed && (
              <Verified
                style={{ color: colors.success.successAlternativeDark }}
              />
            )}
          </Box>
        ),
        role: (
          <Box sx={{ display: "flex", alignItems: "center", gap: ptr(12.75) }}>
            <Typography variant="body-normal-semibold">{user.role}</Typography>
            {user.role && (
              <Verified
                style={{ color: colors.success.successAlternativeDark }}
              />
            )}
          </Box>
        ),
        updateAndDelete: (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "row",
            }}
          >
            <Button
              size="small"
              onClick={() => {
                setShow({ mode: "edit" });
                setSelectedUserId(user.id);
              }}
              variant="text"
            >
              <Update />
            </Button>

            <Button
              onClick={() => {
                handleToggle();
                setSelectedUserId(user.id);
              }}
              size="small"
              variant="text"
              colorsx="red"
            >
              <Delete />
            </Button>
          </Box>
        ),
      };
    });

  return (
    <CustomCompaniesContainer>
      <FilterSection>
        <FilterGroup>
          <SearchInput
            value={filterText}
            onChange={(e) => handleFilter(e)}
            placeholder="Kullanıcı Ara"
          />
          <UserEditModal
            setShow={() => setShow({ mode: "none" })}
            show={show.mode === "edit"}
            mutate={editMutate}
            user={data?.filter((data: any) => data.id === selectedUserId)[0]}
          />
        </FilterGroup>
      </FilterSection>
      <CustomTableDiv>
        <Table
          count={users?.length}
          isLoading={isLoading}
          onRowsPerPageChange={handleChangeRowsPerPage}
          onPageChange={onPageChange}
          head={usersHead}
          result={rowPerPage}
          rowsData={rowData}
          isClickable={false}
          page={currentPage}
        ></Table>
      </CustomTableDiv>
      <Modal
        type="delete"
        open={open}
        onClose={() => handleToggle()}
        onConfirm={() => handleModalConfirm(selectedUserId!)}
        header={"Kullanıcıyı Silmek Üzeresiniz"}
        subheader={"Yine de işleme devam etmek istiyor musunuz?"}
      ></Modal>
    </CustomCompaniesContainer>
  );
};

export default UsersTable;
