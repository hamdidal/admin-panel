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
  useDeleteTour,
  useGetAllTours,
  usePostTour,
  usePutTour,
} from "../../utils/hooks/queries/Tours";
import Button from "../../components/styledComponents/Buttons/Button/Button";
import { Add, Delete, Update } from "@mui/icons-material";
import Fuse from "fuse.js";
import _debounce from "lodash/debounce";
import SearchInput from "../../components/styledComponents/Input/SearchInput/SearchInput";
import Modal from "../../components/styledComponents/Modal/Modal";
import TourCreateModal from "./addTour/tourCreateModal";
import TourEditModal from "./addTour/tourEditModal";
import { useGetAllCities } from "../../utils/hooks/queries/Cities";

export const toursHead: GridColDef[] = [
  { field: "name", headerName: "TUR İSMİ", width: 130 },
  { field: "title", headerName: "BAŞLIK", width: 130 },
  { field: "description", headerName: "AÇIKLAMA", width: 130 },
  { field: "city", headerName: "ŞEHİR", width: 130 },
  { field: "isActive", headerName: "AKTİF/PASİF", width: 130 },
  { field: "updateAndDelete", headerName: "", width: 130 },
];

const ToursPage = () => {
  const { data, isSuccess, isLoading, refetch } = useGetAllTours({
    queryKeys: {},
  });

  const [tours, setTours] = useState<any[]>([]);
  const [city, setCity] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [rowPerPage, setRowPerPage] = useState(10);
  const [show, setShow] = useState({ mode: "none" } as {
    mode: "none" | "create" | "edit";
  });
  const [open, setOpen] = useState(false);
  const [filterText, setFilterText] = useState("");
  const [selectedTourId, setSelectedTourId] = useState(0);
  const navigate = useNavigate();
  const { mutate: deleteMutate, isSuccess: deleteSuccess } = useDeleteTour();
  const { mutate: postMutate, isSuccess: postSuccess } = usePostTour();
  const { mutate: editMutate, isSuccess: editSuccess } = usePutTour();
  const {
    data: cityData,
    isSuccess: citySuccess,
  } = useGetAllCities({
    queryKeys: {},
  });

  useEffect(() => {
    if (isSuccess && data?.data.data) {
      setTours(data.data.data);
    }
  }, [isSuccess, data?.data.data]);

  useEffect(() => {
    if (citySuccess && cityData?.data) {
      setCity(cityData.data);
    }
  }, [cityData?.data, citySuccess]);

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
    if (tours?.length === 0 || !filterText) {
      return setTours(data?.data.data);
    }

    const fuse = new Fuse(tours, {
      keys: Object.keys(tours[0]),
    });

    const results = fuse.search(filterText);
    return setTours(results.map((result) => result.item));
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
    tours && tours.length > 0
      ? tours?.map((tour) => {
          return {
            name: (
              <Box>
                <UserNameBox>
                  <Typography
                    variant="body-normal-medium"
                    onClick={() => handleTo(tour.id as number, "tours")}
                  >
                    {tour.name}
                  </Typography>
                </UserNameBox>
              </Box>
            ),
            title: (
              <Box
                sx={{ display: "flex", alignItems: "center", gap: ptr(12.75) }}
              >
                <Typography variant="body-normal-medium">
                  {tour.title}
                </Typography>
              </Box>
            ),
            description: (
              <Box
                sx={{ display: "flex", alignItems: "center", gap: ptr(12.75) }}
              >
                <Typography variant="body-normal-medium">
                  {tour.description}
                </Typography>
              </Box>
            ),
            city: (
              <Box
                sx={{ display: "flex", alignItems: "center", gap: ptr(12.75) }}
              >
                <Typography variant="body-normal-medium">
                  {city
                    .filter((c) => c.id === tour.cityId)
                    .map((filteredCity) => (
                      <div key={filteredCity.id}>
                        <span>{filteredCity.name}</span>
                      </div>
                    ))}{" "}
                </Typography>
              </Box>
            ),
            isActive: (
              <Box
                sx={{ display: "flex", alignItems: "center", gap: ptr(12.75) }}
              >
                <CheckBox checked={tour?.isActive} />
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
                    setSelectedTourId(tour.id);
                  }}
                  variant="text"
                >
                  <Update />
                </Button>

                <Button
                  onClick={() => {
                    handleToggle();
                    setSelectedTourId(tour.id);
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
        })
      : [];

  return (
    <DashboardLayout>
      <CustomCardBox>
        <CustomBoxColumn>
          <Typography variant="h4-semibold">Turlar</Typography>
        </CustomBoxColumn>
      </CustomCardBox>
      <FilterSection>
        <FilterGroup>
          <SearchInput
            value={filterText}
            onChange={(e) => handleFilter(e)}
            placeholder="Tur Ara"
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
          <TourCreateModal
            setShow={() => setShow({ mode: "none" })}
            show={show.mode === "create"}
            mutate={postMutate}
          />
          <TourEditModal
            setShow={() => setShow({ mode: "none" })}
            show={show.mode === "edit"}
            mutate={editMutate}
            tour={
              tours?.length > 0
                ? tours?.filter((data: any) => data.id === selectedTourId)[0]
                : ([] as any)
            }
          />
        </FilterGroup>
      </FilterSection>
      <CustomCompaniesContainer>
        <CustomTableDiv>
          <Table
            count={tours?.length}
            isLoading={isLoading}
            onRowsPerPageChange={handleChangeRowsPerPage}
            onPageChange={onPageChange}
            head={toursHead}
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
        onConfirm={() => handleModalConfirm(selectedTourId!)}
        header={"Turu Silmek Üzeresiniz"}
        subheader={"Yine de işleme devam etmek istiyor musunuz?"}
      ></Modal>
    </DashboardLayout>
  );
};

export default ToursPage;
