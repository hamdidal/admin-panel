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
import { useGetAllAirports } from "../../utils/hooks/queries/Airports";
import CheckBox from "../../components/styledComponents/Buttons/Checkbox/Checkbox";
import Button from "../../components/styledComponents/Buttons/Button/Button";
import { Add } from "@mui/icons-material";
import SearchInput from "../../components/styledComponents/Input/SearchInput/SearchInput";
import Fuse from "fuse.js";
import _debounce from "lodash/debounce";

export const airportsHead: GridColDef[] = [
  { field: "airport", headerName: "HAVALİMANI İSMİ", width: 130 },
  { field: "description", headerName: "AÇIKLAMA", width: 130 },
  { field: "isActive", headerName: "AKTİF/PASİF", width: 130 },
];

const AirportsPage = () => {
  const { data, isSuccess, isLoading } = useGetAllAirports({
    queryKeys: {},
  });
  const [filterText, setFilterText] = useState("");
  const [airports, setAirports] = useState<any[]>([]);
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(0);
  const [rowPerPage, setRowPerPage] = useState(10);

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

  // const handleSelectDate = (sDate: string, eDate: string) => {
  //   setStartDate(sDate);
  //   setEndDate(eDate);
  // };

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
            onClick={() => null}
            variant="outlined"
            color={"secondary"}
            padding={ptr(16)}
          >
            EKLE
          </Button>
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
    </DashboardLayout>
  );
};

export default AirportsPage;
