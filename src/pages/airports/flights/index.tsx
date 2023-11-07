import { GridColDef } from "@mui/x-data-grid";
import { useEffect, useState } from "react";

import { Box } from "@mui/material";
import { TableBodyRowData } from "../../../components/styledComponents/Table/types";
import {
  CustomBoxColumn,
  CustomCardBox,
  CustomCompaniesContainer,
  CustomTableDiv,
  UserNameBox,
} from "../index.styled";
import Typography from "../../../components/styledComponents/Typography/Typography";
import DashboardLayout from "../../../layouts/Dashboard/DashboardLayout";
import { FilterGroup, FilterSection } from "./index.styled";
import AutocompleteContainer from "../../../components/styledComponents/Input/AutoComplete/Autocomplete";
import Table from "../../../components/styledComponents/Table";
import {
  dateFormatEndDate,
  dateFormatStartDate,
  ptr,
} from "../../../utils/helpers";
import {
  useDeleteFlight,
  useGetAllAirports,
  useGetAllFlights,
} from "../../../utils/hooks/queries/Airports";
import Button from "../../../components/styledComponents/Buttons/Button/Button";
import { Add, Delete } from "@mui/icons-material";
import FlightCreateModal from "./addFlight/flightCreateModal";
import SearchInput from "../../../components/styledComponents/Input/SearchInput/SearchInput";
import Fuse from "fuse.js";
import _debounce from "lodash/debounce";
import Modal from "../../../components/styledComponents/Modal/Modal";

export const flightsHead: GridColDef[] = [
  { field: "airPlaneCode", headerName: "UÇAK KODU", width: 130 },
  { field: "travelTime", headerName: "SEYAHAT ZAMANI", width: 130 },
  { field: "startDate", headerName: "BAŞLANGIÇ ZAMANI", width: 130 },
  { field: "endDate", headerName: "BİTİŞ ZAMANI", width: 130 },
  { field: "delete", headerName: "", width: 130 },
];

const FlightsPage = () => {
  const [flights, setFlights] = useState<any[]>([]);
  const [airportOptions, setAirportOptions] = useState<
    { value: string | number; label: string | number }[]
  >([]);
  const [selectedFlightsId, setSelectedFlightsId] = useState(0);
  const [selectedAirport, setSelectedAirport] = useState(1);
  const [currentPage, setCurrentPage] = useState(0);
  const [rowPerPage, setRowPerPage] = useState(10);
  const [filterText, setFilterText] = useState("");
  const [show, setShow] = useState({ mode: "none" } as {
    mode: "none" | "create" | "edit";
  });
  const [open, setOpen] = useState(false);
  const { data, isSuccess, isLoading } = useGetAllFlights({
    queryKeys: {
      airportId: selectedAirport,
    },
  });
  const { mutate } = useDeleteFlight();

  const {
    data: airportsData,
    isSuccess: airportsSuccess,
    refetch,
  } = useGetAllAirports({
    queryKeys: {},
  });

  useEffect(() => {
    if (airportsData?.data && airportsSuccess) {
      setAirportOptions(
        airportsData?.data.map((airport: any) => ({
          value: airport.id,
          label: airport.name,
        }))
      );
    }
  }, [airportsData?.data, airportsSuccess]);

  useEffect(() => {
    if (isSuccess && data?.data) {
      setFlights(data.data);
    }
  }, [isSuccess, data?.data]);

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowPerPage(parseInt(event.target.value, 10));
    setCurrentPage(0);
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
    mutate({
      airportId: selectedAirport,
      airportFlightsId: id,
    });

    setOpen(!open);
    refetch();
  };

  useEffect(() => {}, [refetch]);

  const handleReload = async () => {
    await refetch();
  };

  const onPageChange = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setCurrentPage(newPage);
  };

  const filterData = () => {
    if (flights?.length === 0 || !filterText) {
      return setFlights(data?.data);
    }

    const fuse = new Fuse(flights, {
      keys: Object.keys(flights[0]),
    });

    const results = fuse.search(filterText);
    return setFlights(results.map((result) => result.item));
  };

  useEffect(() => {
    filterData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterText]);

  const rowData: TableBodyRowData[] =
    flights &&
    flights.map((flight) => {
      return {
        airPlaneCode: (
          <Box>
            <UserNameBox>
              <Typography variant="body-normal-medium">
                {flight.airplaneCode}
              </Typography>
            </UserNameBox>
          </Box>
        ),
        travelTime: (
          <Box sx={{ display: "flex", alignItems: "center", gap: ptr(12.75) }}>
            <Typography variant="body-normal-medium">
              {flight.travelTime}
            </Typography>
          </Box>
        ),
        startDate: (
          <Box sx={{ display: "flex", alignItems: "center", gap: ptr(12.75) }}>
            <Typography variant="body-normal-medium">
              {dateFormatStartDate(flight.startDate)}
            </Typography>{" "}
          </Box>
        ),
        endDate: (
          <Box sx={{ display: "flex", alignItems: "center", gap: ptr(12.75) }}>
            <Typography variant="body-normal-medium">
              {dateFormatEndDate(flight.endDate)}
            </Typography>{" "}
          </Box>
        ),
        delete: (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "row",
            }}
          >
            <Button
              onClick={() => {
                handleToggle();
                setSelectedFlightsId(flight?.id);
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
          <Typography variant="h4-semibold">Uçuşlar</Typography>
        </CustomBoxColumn>
      </CustomCardBox>
      <FilterSection>
        <FilterGroup>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: ptr(10),
              flexDirection: "row",
            }}
          >
            {" "}
            <AutocompleteContainer
              width="50%"
              label="Havalimanı Seç"
              options={airportOptions}
              onChange={(e) => {
                setSelectedAirport(e as any);
                if (currentPage !== 0) setCurrentPage(0);
              }}
              selectedValue={
                airportsData?.data.filter(
                  (city: any) => city.id === selectedAirport
                )[0]?.name
              }
            />
            <SearchInput
              value={filterText}
              onChange={(e) => handleFilter(e)}
              placeholder="Uçuş Ara"
            />
          </Box>

          <Button
            startIcon={<Add />}
            onClick={() => setShow({ mode: "create" })}
            variant="outlined"
            color={"secondary"}
            padding={ptr(16)}
          >
            EKLE
          </Button>
          <FlightCreateModal
            setShow={() => setShow({ mode: "none" })}
            show={show.mode === "create"}
            onReload={handleReload}
          />
        </FilterGroup>
      </FilterSection>
      <CustomCompaniesContainer>
        <CustomTableDiv>
          <Table
            count={flights?.length}
            isLoading={isLoading}
            onRowsPerPageChange={handleChangeRowsPerPage}
            onPageChange={onPageChange}
            head={flightsHead}
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
        onConfirm={() => handleModalConfirm(selectedFlightsId)}
        header={"Uçuşu Silmek Üzeresiniz"}
        subheader={"Yine de işleme devam etmek istiyor musunuz?"}
      ></Modal>
    </DashboardLayout>
  );
};

export default FlightsPage;
