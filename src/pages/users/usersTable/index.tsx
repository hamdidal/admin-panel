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

import { DataProps } from "../types";
import {
  CustomCompaniesContainer,
  CustomTableDiv,
  UserNameBox,
} from "../index.styled";
import Avatar from "../../../components/styledComponents/Avatar/Avatar";

export const usersHead: GridColDef[] = [
  { field: "user", headerName: "KULLANICI", width: 130 },
  { field: "telephone", headerName: "TELEFON", width: 130 },
  { field: "role", headerName: "ROL", width: 130 },
];

const UsersTable: React.FC<DataProps> = ({ data, isLoading, isSuccess }) => {
  const [users, setUsers] = useState<any[]>([]);

  const navigate = useNavigate();

  const [currentPage, setCurrentPage] = useState(0);
  const [rowPerPage, setRowPerPage] = useState(10);
  // Filter State

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

  // const handleSelectDate = (sDate: string, eDate: string) => {
  //   setStartDate(sDate);
  //   setEndDate(eDate);
  // };

  const rowData: TableBodyRowData[] =
    users &&
    users.map((user) => {
      return {
        user: (
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
      <CustomTableDiv>
        <Table
          count={users.length}
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
    </CustomCompaniesContainer>
  );
};

export default UsersTable;
