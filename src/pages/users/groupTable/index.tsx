import { GridColDef } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Box } from "@mui/material";
import { Verified } from "@mui/icons-material";
import { TableBodyRowData } from "../../../components/styledComponents/Table/types";
import Typography from "../../../components/styledComponents/Typography/Typography";
import { colors } from "../../../styles/color";
import Table from "../../../components/styledComponents/Table";
import { CustomCompaniesContainer, CustomTableDiv } from "../index.styled";
import { DataProps } from "../types";
import { ptr } from "../../../utils/helpers";

export const groupsHead: GridColDef[] = [
  { field: "group", headerName: "GRUP İSMİ", width: 130 },
  { field: "telephone", headerName: "TELEFON", width: 130 },
  { field: "role", headerName: "ROL", width: 130 },
];

const GroupTable: React.FC<DataProps> = ({ data, isLoading, isSuccess }) => {
  const [groups, setGroups] = useState<any[]>([]);

  const navigate = useNavigate();

  const [currentPage, setCurrentPage] = useState(0);
  const [rowPerPage, setRowPerPage] = useState(10);
  // Filter State

  useEffect(() => {
    if (isSuccess && data) {
      setGroups(data);
    }
  }, [data, isSuccess]);

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
    groups &&
    groups.map((group) => {
      return {
        user: (
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
      };
    });

  return (
    <CustomCompaniesContainer>
      <CustomTableDiv>
        <Table
          count={groups.length}
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
    </CustomCompaniesContainer>
  );
};

export default GroupTable;
