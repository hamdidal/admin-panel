import { GridColDef } from "@mui/x-data-grid";
import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Box } from "@mui/material";
import { TableBodyRowData } from "../../components/styledComponents/Table/types";
import {
  CustomBoxColumn,
  CustomCardBox,
  CustomCompaniesContainer,
  CustomTableDiv,
  FilterGroup,
  FilterSection,
  UserNameBox,
} from "./index.styled";
import Typography from "../../components/styledComponents/Typography/Typography";
import Table from "../../components/styledComponents/Table";
import { ptr } from "../../utils/helpers";
import DashboardLayout from "../../layouts/Dashboard/DashboardLayout";
import CheckBox from "../../components/styledComponents/Buttons/Checkbox/Checkbox";
import {
  useCreateCity,
  useDeleteCity,
  useGetAllCities,
  usePutCity,
} from "../../utils/hooks/queries/Cities";
import Button from "../../components/styledComponents/Buttons/Button/Button";
import { Add, Delete, Update } from "@mui/icons-material";
import CityCreateModal from "./addCity/cityCreateModal";
import CityEditModal from "./addCity/cityEditModal";
import _debounce from "lodash/debounce";
import Modal from "../../components/styledComponents/Modal/Modal";
import SearchInput from "../../components/styledComponents/Input/SearchInput/SearchInput";
import Fuse from "fuse.js";

export const airportsHead: GridColDef[] = [
  { field: "name", headerName: "ŞEHİR İSMİ", width: 130 },
  { field: "isActive", headerName: "AKTİF/PASİF", width: 130 },
  { field: "updateAndDelete", headerName: "", width: 130 },
];

const CitiesPage = () => {
  const { data, isSuccess, isLoading, refetch } = useGetAllCities({
    queryKeys: {},
  });

  const [cities, setCities] = useState<any[]>([]);
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(0);
  const [rowPerPage, setRowPerPage] = useState(10);
  const [show, setShow] = useState({ mode: "none" } as {
    mode: "none" | "create" | "edit";
  });
  const [open, setOpen] = useState(false);
  const [selectedCityId, setSelectedCityId] = useState(0);
  const [filterText, setFilterText] = useState("");
  const { mutate: deleteMutate, isSuccess: deleteSuccess } = useDeleteCity();
  const { mutate: postMutate, isSuccess: postSuccess } = useCreateCity();
  const { mutate: editMutate, isSuccess: editSuccess } = usePutCity();

  useEffect(() => {
    if (isSuccess && data?.data) {
      setCities(data.data);
    }
  }, [isSuccess, data?.data]);

  const handleTo = (id: number, type: string) => {
    navigate(`/${type}/${id}`);
  };

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
    if (cities.length === 0 || !filterText) {
      return setCities(data?.data);
    }

    const fuse = new Fuse(cities, {
      keys: Object.keys(cities[0]),
    });

    const results = fuse.search(filterText);
    return setCities(results.map((result) => result.item));
  };

  useEffect(() => {
    filterData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterText]);
  
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
    cities &&
    cities.map((city) => {
      return {
        name: (
          <Box>
            <UserNameBox>
              <Typography
                variant="body-normal-medium"
                onClick={() => handleTo(city.id as number, "airports")}
              >
                {city.name}
              </Typography>
            </UserNameBox>
          </Box>
        ),
        isActive: (
          <Box sx={{ display: "flex", alignItems: "center", gap: ptr(12.75) }}>
            <CheckBox checked={city?.isActive} />
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
                setSelectedCityId(city.id);
              }}
              variant="text"
            >
              <Update />
            </Button>

            <Button
              onClick={() => {
                handleToggle();
                setSelectedCityId(city.id);
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
    <DashboardLayout>
      <CustomCardBox>
        <CustomBoxColumn>
          <Typography variant="h4-semibold">Şehirler</Typography>
        </CustomBoxColumn>
      </CustomCardBox>
      <FilterSection>
        <FilterGroup>
          <SearchInput
            value={filterText}
            onChange={(e) => handleFilter(e)}
            placeholder="Şehir Ara"
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
          <CityCreateModal
            setShow={() => setShow({ mode: "none" })}
            show={show.mode === "create"}
            mutate={postMutate}
          />
          <CityEditModal
            setShow={() => setShow({ mode: "none" })}
            show={show.mode === "edit"}
            mutate={editMutate}
            city={
              data?.data.filter((data: any) => data.id === selectedCityId)[0]
            }
          />
        </FilterGroup>
      </FilterSection>
      <CustomCompaniesContainer>
        <CustomTableDiv>
          <Table
            count={cities?.length}
            isLoading={isLoading}
            onRowsPerPageChange={handleChangeRowsPerPage}
            onPageChange={onPageChange}
            head={airportsHead}
            result={rowPerPage}
            rowsData={rowData}
            isClickable={false}
            page={currentPage}
          ></Table>
        </CustomTableDiv>
      </CustomCompaniesContainer>
      <Modal
        type="delete"
        open={open}
        onClose={() => handleToggle()}
        onConfirm={() => handleModalConfirm(selectedCityId!)}
        header={"Aktiviteyi Silmek Üzeresiniz"}
        subheader={"Yine de işleme devam etmek istiyor musunuz?"}
      ></Modal>
    </DashboardLayout>
  );
};

export default CitiesPage;
