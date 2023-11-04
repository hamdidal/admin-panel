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
import AutocompleteContainer from "../../components/styledComponents/Input/AutoComplete/Autocomplete";
import { useGetAllCities } from "../../utils/hooks/queries/Cities";
import { useDeleteHotel, useGetHotels } from "../../utils/hooks/queries/Hotels";
import Button from "../../components/styledComponents/Buttons/Button/Button";
import { Add, Delete, Update } from "@mui/icons-material";
import SearchInput from "../../components/styledComponents/Input/SearchInput/SearchInput";
import HotelEditModal from "./addHotel/hotelEditModal";
import HotelCreateModal from "./addHotel/hotelCreateModal";
import Fuse from "fuse.js";
import _debounce from "lodash/debounce";
import Modal from "../../components/styledComponents/Modal/Modal";

export const busStationsHead: GridColDef[] = [
  { field: "hotels", headerName: "HOTEL İSMİ", width: 130 },
  { field: "description", headerName: "AÇIKLAMA", width: 130 },
  { field: "isActive", headerName: "AKTİF/PASİF", width: 130 },
  { field: "updateAndDelete", headerName: "", width: 130 },
];

const HotelsPage = () => {
  const [hotels, setHotels] = useState<any[]>([]);
  const [cityOptions, setCityOptions] = useState<
    { value: string | number; label: string | number }[]
  >([]);
  const [selectedCity, setSelectedCity] = useState(1);
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(0);
  const [rowPerPage, setRowPerPage] = useState(10);
  const [selectedHotelId, setSelectedHotelId] = useState(0);
  const [filterText, setFilterText] = useState("");
  const [show, setShow] = useState({ mode: "none" } as {
    mode: "none" | "create" | "edit";
  });
  const [open, setOpen] = useState(false);

  const { data, isSuccess, isLoading, refetch } = useGetHotels({
    queryKeys: {
      id: selectedCity,
    },
  });
  const { data: cityData, isSuccess: citySuccess } = useGetAllCities({
    queryKeys: {},
  });
  const { mutate } = useDeleteHotel();

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
      setHotels(data.data);
    }
  }, [isSuccess, data?.data]);

  const handleTo = (id: number, type: string) => {
    navigate(`/${type}/${id}`);
  };

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
  const handleModalConfirm = (hotelId: number) => {
    console.log(hotelId, "hh");

    mutate({
      hotelId: hotelId,
      cityId: selectedCity,
    });

    setOpen(!open);
    refetch();
  };

  useEffect(() => {
    console.log("refetch");
  }, [refetch]);

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
    if (hotels?.length === 0 || !filterText) {
      return setHotels(data?.data);
    }

    const fuse = new Fuse(hotels, {
      keys: Object.keys(hotels[0]),
    });

    const results = fuse.search(filterText);
    return setHotels(results.map((result) => result.item));
  };

  useEffect(() => {
    filterData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterText]);

  const rowData: TableBodyRowData[] =
    hotels &&
    hotels.map((hotel) => {
      return {
        airport: (
          <Box>
            <UserNameBox>
              <Typography
                variant="body-normal-medium"
                onClick={() => handleTo(hotel.id as number, "airports")}
              >
                {hotel.name}
              </Typography>
            </UserNameBox>
          </Box>
        ),
        description: (
          <Box sx={{ display: "flex", alignItems: "center", gap: ptr(12.75) }}>
            <Typography variant="body-normal-medium">
              {hotel.description}
            </Typography>
          </Box>
        ),
        isActive: (
          <Box sx={{ display: "flex", alignItems: "center", gap: ptr(12.75) }}>
            <CheckBox checked={hotel?.isActive} />
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
                setSelectedHotelId(hotel.id);
              }}
              variant="text"
            >
              <Update />
            </Button>

            <Button
              onClick={() => {
                handleToggle();
                setSelectedHotelId(hotel?.id);
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
          <Typography variant="h4-semibold">Hoteller</Typography>
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
              label="Şehir Seç"
              options={cityOptions}
              onChange={(e) => {
                setSelectedCity(e as any);
                if (currentPage !== 0) setCurrentPage(0);
              }}
              selectedValue={
                cityData?.data.filter(
                  (city: any) => city.id === selectedCity
                )[0].name
              }
            />
            <SearchInput
              value={filterText}
              onChange={(e) => handleFilter(e)}
              placeholder="Hotel Ara"
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
          <HotelCreateModal
            setShow={() => setShow({ mode: "none" })}
            show={show.mode === "create"}
            onReload={handleReload}
          />
          <HotelEditModal
            setShow={() => setShow({ mode: "none" })}
            show={show.mode === "edit"}
            onReload={handleReload}
            hotel={
              data?.data.filter((data: any) => data.id === selectedHotelId)[0]
            }
          />
        </FilterGroup>
      </FilterSection>
      <CustomCompaniesContainer>
        <CustomTableDiv>
          <Table
            count={hotels?.length}
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
        onConfirm={() => handleModalConfirm(selectedHotelId)}
        header={"Hoteli Silmek Üzeresiniz"}
        subheader={"Yine de işleme devam etmek istiyor musunuz?"}
      ></Modal>
    </DashboardLayout>
  );
};

export default HotelsPage;
