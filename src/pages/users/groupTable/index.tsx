import { GridColDef } from "@mui/x-data-grid";
import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/material";
import { Add, Delete, Update, Verified } from "@mui/icons-material";
import { TableBodyRowData } from "../../../components/styledComponents/Table/types";
import Typography from "../../../components/styledComponents/Typography/Typography";
import { colors } from "../../../styles/color";
import Table from "../../../components/styledComponents/Table";
import { CustomCompaniesContainer, CustomTableDiv } from "../index.styled";
import { DataProps } from "../types";
import { ptr } from "../../../utils/helpers";
import { FilterGroup, FilterSection } from "./index.styled";
import SearchInput from "../../../components/styledComponents/Input/SearchInput/SearchInput";
import Button from "../../../components/styledComponents/Buttons/Button/Button";
import GroupCreateModal from "./addGroup/groupCreateModal";
import GroupEditModal from "./addGroup/groupEditModal";
import _debounce from "lodash/debounce";
import {
  useDeleteGroup,
  usePostGroup,
  usePutGroup,
} from "../../../utils/hooks/queries/Groups";
import Fuse from "fuse.js";
import Modal from "../../../components/styledComponents/Modal/Modal";

export const groupsHead: GridColDef[] = [
  { field: "name", headerName: "GRUP İSMİ", width: 230 },
  { field: "telephone", headerName: "TELEFON", width: 130 },
  { field: "role", headerName: "ROL", width: 130 },
  { field: "updateAndDelete", headerName: "", width: 130 },
];

const GroupTable: React.FC<DataProps> = ({
  data,
  isLoading,
  isSuccess,
  refetch,
}) => {
  const [groups, setGroups] = useState<any[]>([]);

  const navigate = useNavigate();

  const [currentPage, setCurrentPage] = useState(0);
  const [rowPerPage, setRowPerPage] = useState(10);
  const [show, setShow] = useState({ mode: "none" } as {
    mode: "none" | "create" | "edit";
  });
  const [filterText, setFilterText] = useState("");
  const [open, setOpen] = useState(false);
  const [selectedGroupId, setSelectedGroupId] = useState(0);

  const { mutate: deleteMutate, isSuccess: deleteSuccess } = useDeleteGroup();
  const { mutate: postMutate, isSuccess: postSuccess } = usePostGroup();
  const { mutate: editMutate, isSuccess: editSuccess } = usePutGroup();

  useEffect(() => {
    if (isSuccess && data) {
      setGroups(data);
    }
  }, [data, isSuccess]);

  const handleFilter = (event: any): void => {
    _debounce(() => {
      setFilterText(event);
    }, 500)();
  };

  const handleToggle = () => {
    setOpen(!open);
  };
  const handleModalConfirm = (id: number) => {
    deleteMutate({ id });
    setOpen(!open);
  };

  const filterData = () => {
    if (groups?.length === 0 || !filterText) {
      return setGroups(data);
    }

    const fuse = new Fuse(groups, {
      keys: Object.keys(groups[0]),
    });

    const results = fuse.search(filterText);
    return setGroups(results.map((result) => result.item));
  };

  useEffect(() => {
    filterData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterText]);

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

  const refetchIfSuccess = useCallback(() => {
    if (deleteSuccess || editSuccess || postSuccess) {
      refetch();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [deleteSuccess, editSuccess, postSuccess]);

  useEffect(() => {
    refetchIfSuccess();
  }, [refetchIfSuccess]);

  const rowData: TableBodyRowData[] =
    groups &&
    groups.map((group) => {
      return {
        name: (
          <Box>
            <Box>
              <Typography
                variant="body-normal-semibold"
                onClick={() => handleTo(group.id as number, "groups")}
              >
                {group.name}
              </Typography>
            </Box>
          </Box>
        ),
        telephone: (
          <Box sx={{ display: "flex", alignItems: "center", gap: ptr(12.75) }}>
            <Typography variant="body-normal-semibold">
              {group.phoneNumber}
            </Typography>
            {group.isPhoneNumberConfirmed && (
              <Verified
                style={{ color: colors.success.successAlternativeDark }}
              />
            )}
          </Box>
        ),
        role: (
          <Box sx={{ display: "flex", alignItems: "center", gap: ptr(12.75) }}>
            <Typography variant="body-normal-semibold">{group.role}</Typography>
            {group.role && (
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
                setSelectedGroupId(group.id);
              }}
              variant="text"
            >
              <Update />
            </Button>

            <Button
              onClick={() => {
                handleToggle();
                setSelectedGroupId(group.id);
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
            placeholder="Grup Ara"
          />
          <Button
            startIcon={<Add />}
            onClick={() => setShow({ mode: "create" })}
            variant="outlined"
            color={"secondary"}
            padding={ptr(16)}
          >
            EKLE
          </Button>
          <GroupCreateModal
            setShow={() => setShow({ mode: "none" })}
            show={show.mode === "create"}
            mutate={postMutate}
          />

          <GroupEditModal
            setShow={() => setShow({ mode: "none" })}
            show={show.mode === "edit"}
            mutate={editMutate}
            group={data?.filter((data: any) => data.id === selectedGroupId)[0]}
          />
        </FilterGroup>
      </FilterSection>
      <CustomTableDiv>
        <Table
          count={groups?.length}
          isLoading={isLoading}
          onRowsPerPageChange={handleChangeRowsPerPage}
          onPageChange={onPageChange}
          head={groupsHead}
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
        onConfirm={() => handleModalConfirm(selectedGroupId!)}
        header={"Grubu Silmek Üzeresiniz"}
        subheader={"Yine de işleme devam etmek istiyor musunuz?"}
      ></Modal>
    </CustomCompaniesContainer>
  );
};

export default GroupTable;
