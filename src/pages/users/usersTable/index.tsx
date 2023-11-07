import { GridColDef } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Box } from "@mui/material";
import { Verified } from "@mui/icons-material";
import { TableBodyRowData } from "../../../components/styledComponents/Table/types";
import Typography from "../../../components/styledComponents/Typography/Typography";
import { colors } from "../../../styles/color";
import Table from "../../../components/styledComponents/Table";
import { ptr } from "../../../utils/helpers";
import { DataGrid } from "@mui/x-data-grid";

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

export const usersHead: GridColDef[] = [
  { field: "name", headerName: "KULLANICI", width: 130 },
  { field: "telephone", headerName: "TELEFON", width: 130 },
  { field: "role", headerName: "ROL", width: 130 },
];

const UsersTable: React.FC<DataProps> = ({ data, isLoading, isSuccess }) => {
  const [users, setUsers] = useState<any[]>([]);
  const [filterText, setFilterText] = useState("");

  const navigate = useNavigate();

  const [currentPage, setCurrentPage] = useState(0);
  const [rowPerPage, setRowPerPage] = useState(10);

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

        {/* <DataGrid
          style={{ width: "100%" }}
          rows={users ? users : []}
          columns={usersHead}
          disableRowSelectionOnClick
          paginationMode="client"
          aria-label="Deneme"
          aria-labelledby="Deneme"
        /> */}
      </CustomTableDiv>
    </CustomCompaniesContainer>
  );
};

export default UsersTable;
