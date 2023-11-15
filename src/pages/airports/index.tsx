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
import {
  useDeleteAirport,
  useGetAllAirports,
  usePostAirport,
  usePutAirport,
} from "../../utils/hooks/queries/Airports";
import CheckBox from "../../components/styledComponents/Buttons/Checkbox/Checkbox";
import Button from "../../components/styledComponents/Buttons/Button/Button";
import { Add, Delete, Update } from "@mui/icons-material";
import SearchInput from "../../components/styledComponents/Input/SearchInput/SearchInput";
import Fuse from "fuse.js";
import _debounce from "lodash/debounce";
import AirportCreateModal from "./addAirport/airportCreateModal";
import AirportEditModal from "./addAirport/airportEditModal";
import Modal from "../../components/styledComponents/Modal/Modal";

export const airportsHead: GridColDef[] = [
  { field: "airport", headerName: "HAVALİMANI İSMİ", width: 130 },
  { field: "description", headerName: "AÇIKLAMA", width: 130 },
  { field: "isActive", headerName: "AKTİF/PASİF", width: 130 },
  { field: "updateAndDelete", headerName: "", width: 130 },
];

const AirportsPage = () => {
  const [filterText, setFilterText] = useState("");
  const [airports, setAirports] = useState<any[]>([]);
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(0);
  const [rowPerPage, setRowPerPage] = useState(10);
  const [show, setShow] = useState({ mode: "none" } as {
    mode: "none" | "create" | "edit";
  });
  const [open, setOpen] = useState(false);
  const [selectedAirport, setSelectedAirport] = useState(0);

  const { mutate, isSuccess: deleteSuccess } = useDeleteAirport();
  const { mutate: editMutate, isSuccess: editSuccess } = usePutAirport();
  const { mutate: postMutate, isSuccess: postSuccess } = usePostAirport();

  const { data, isSuccess, isLoading, refetch } = useGetAllAirports({
    queryKeys: {},
  });

  useEffect(() => {
    if (isSuccess && data?.data) {
      setAirports(data.data);
    }
  }, [isSuccess, data?.data]);

  const handleFilter = (event: any): void => {
    _debounce(() => {
      setFilterText(event);
    }, 500)();
  };

  const filterData = () => {
    if (airports.length === 0 || !filterText) {
      return setAirports(data?.data);
    }

    const fuse = new Fuse(airports, {
      keys: Object.keys(airports[0]),
    });

    const results = fuse.search(filterText);

    return setAirports(results.map((result) => result.item));
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

  const handleToggle = () => {
    setOpen(!open);
  };
  const handleModalConfirm = async (id: number) => {
    mutate({ id });
    setOpen(!open);
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
    airports &&
    airports.map((airport) => {
      return {
        airport: (
          <Box>
            <UserNameBox>
              <Typography
                variant="body-normal-medium"
                onClick={() => handleTo(airport.id as number, "airports")}
              >
                {airport.name}
              </Typography>
            </UserNameBox>
          </Box>
        ),
        description: (
          <Box sx={{ display: "flex", alignItems: "center", gap: ptr(12.75) }}>
            <Typography variant="body-normal-medium">
              {airport.description}
            </Typography>
          </Box>
        ),
        isActive: (
          <Box sx={{ display: "flex", alignItems: "center", gap: ptr(12.75) }}>
            <CheckBox checked={airport?.isActive} />
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
                setSelectedAirport(airport.id);
              }}
              variant="text"
            >
              <Update />
            </Button>

            <Button
              onClick={() => {
                handleToggle();
                setSelectedAirport(airport.id);
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
          <Typography variant="h4-semibold">Havalimanları</Typography>
        </CustomBoxColumn>
      </CustomCardBox>
      <FilterSection>
        <FilterGroup>
          <SearchInput
            value={filterText}
            onChange={(e) => handleFilter(e)}
            placeholder="Havalimanı Ara"
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
          <AirportCreateModal
            setShow={() => setShow({ mode: "none" })}
            show={show.mode === "create"}
            mutate={postMutate}
          />
          <AirportEditModal
            setShow={() => setShow({ mode: "none" })}
            show={show.mode === "edit"}
            mutate={editMutate}
            airport={
              airports?.filter((data: any) => data.id === selectedAirport)[0]
            }
          />
        </FilterGroup>
      </FilterSection>
      <CustomCompaniesContainer>
        <CustomTableDiv>
          <Table
            count={airports?.length}
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
        onConfirm={() => handleModalConfirm(selectedAirport!)}
        header={"Havalimanını Silmek Üzeresiniz"}
        subheader={"Yine de işleme devam etmek istiyor musunuz?"}
      ></Modal>
    </DashboardLayout>
  );
};

export default AirportsPage;
