import { GridColDef } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
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
  useDeleteTerminal,
  useGetBusStations,
} from "../../utils/hooks/queries/BusStations";
import AutocompleteContainer from "../../components/styledComponents/Input/AutoComplete/Autocomplete";
import { useGetAllCities } from "../../utils/hooks/queries/Cities";
import Button from "../../components/styledComponents/Buttons/Button/Button";
import { Add, Delete, Update } from "@mui/icons-material";
import TerminalCreateModal from "./addTerminal/terminalCreateModal";
import TerminalEditModal from "./addTerminal/terminalEditModal";
import SearchInput from "../../components/styledComponents/Input/SearchInput/SearchInput";
import Fuse from "fuse.js";
import _debounce from "lodash/debounce";
import Modal from "../../components/styledComponents/Modal/Modal";

export const busStationsHead: GridColDef[] = [
  { field: "busStation", headerName: "TERMİNAL İSMİ", width: 130 },
  { field: "description", headerName: "AÇIKLAMA", width: 130 },
  { field: "isActive", headerName: "AKTİF/PASİF", width: 130 },
  { field: "updateAndDelete", headerName: "", width: 130 },
];

const BusStationsPage = () => {
  const [stations, setStations] = useState<any[]>([]);
  const [cityOptions, setCityOptions] = useState<
    { value: string | number; label: string | number }[]
  >([]);
  const [selectedCity, setSelectedCity] = useState(1);
  const navigate = useNavigate();
  const [show, setShow] = useState({ mode: "none" } as {
    mode: "none" | "create" | "edit";
  });
  const [selectedStation, setSelectedStation] = useState(0);
  const [filterText, setFilterText] = useState("");
  const [open, setOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [rowPerPage, setRowPerPage] = useState(10);
  const { data, isSuccess, isLoading, refetch } = useGetBusStations({
    queryKeys: {
      id: selectedCity,
    },
  });

  const { data: cityData, isSuccess: citySuccess } = useGetAllCities({
    queryKeys: {},
  });

  const { mutate } = useDeleteTerminal();

  useEffect(() => {
    if (cityData?.data && citySuccess) {
      setCityOptions(
        cityData?.data.map((city: any) => ({
          value: city.id,
          label: city.name,
        }))
      );
    }
  }, [cityData?.data, citySuccess]);

  useEffect(() => {
    if (isSuccess && data?.data) {
      setStations(data.data);
    }
  }, [isSuccess, data?.data]);

  useEffect(() => {
    refetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data?.data]);

  const handleFilter = (event: any): void => {
    _debounce(() => {
      setFilterText(event);
    }, 500)();
  };

  const handleToggle = () => {
    setOpen(!open);
  };

  const handleModalConfirm = (id: number) => {
    mutate({ id });
    setOpen(!open);
  };

  const filterData = () => {
    if (stations?.length === 0 || !filterText) {
      return setStations(data?.data);
    }

    const fuse = new Fuse(stations, {
      keys: Object.keys(stations[0]),
    });

    const results = fuse.search(filterText);
    return setStations(results.map((result) => result.item));
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

  const handleReload = async () => {
    await refetch();
  };

  const rowData: TableBodyRowData[] =
    stations &&
    stations.map((station) => {
      return {
        airport: (
          <Box>
            <UserNameBox>
              <Typography
                variant="body-normal-medium"
                onClick={() => handleTo(station.id as number, "airports")}
              >
                {station?.name}
              </Typography>
            </UserNameBox>
          </Box>
        ),
        description: (
          <Box sx={{ display: "flex", alignItems: "center", gap: ptr(12.75) }}>
            <Typography variant="body-normal-medium">
              {station.description}
            </Typography>
          </Box>
        ),
        isActive: (
          <Box sx={{ display: "flex", alignItems: "center", gap: ptr(12.75) }}>
            <CheckBox checked={station?.isActive} />
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
                setSelectedStation(station.id);
              }}
              variant="text"
            >
              <Update />
            </Button>

            <Button
              onClick={() => {
                handleToggle();
                setSelectedStation(station.id);
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
          <Typography variant="h4-semibold">Otobüs Terminalleri</Typography>
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
            <AutocompleteContainer
              width="50%"
              label="Şehir Seç"
              options={cityOptions}
              onChange={(e) => {
                setSelectedCity(e as any);
                if (currentPage !== 0) setCurrentPage(0);
              }}
              selectedValue={
                cityData?.data.filter(
                  (city: any) => city.id === selectedCity
                )[0]?.name
              }
            />
            <SearchInput
              value={filterText}
              onChange={(e) => handleFilter(e)}
              placeholder="Terminal Ara"
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
          <TerminalCreateModal
            setShow={() => setShow({ mode: "none" })}
            show={show.mode === "create"}
            onReload={handleReload}
          />
          <TerminalEditModal
            setShow={() => setShow({ mode: "none" })}
            show={show.mode === "edit"}
            onReload={handleReload}
            terminal={
              data?.data.filter((data: any) => data.id === selectedStation)[0]
            }
          />
        </FilterGroup>
      </FilterSection>
      <CustomCompaniesContainer>
        <CustomTableDiv>
          <Table
            count={stations?.length}
            isLoading={isLoading}
            onRowsPerPageChange={handleChangeRowsPerPage}
            onPageChange={onPageChange}
            head={busStationsHead}
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
        onConfirm={() => handleModalConfirm(selectedStation!)}
        header={"Terminali Silmek Üzeresiniz"}
        subheader={"Yine de işleme devam etmek istiyor musunuz?"}
      ></Modal>
    </DashboardLayout>
  );
};

export default BusStationsPage;
