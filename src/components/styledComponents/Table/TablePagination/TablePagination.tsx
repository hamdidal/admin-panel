import React from "react";
import { TablePagination, createTheme, ThemeProvider } from "@mui/material";

import { TablePaginationProps } from "./typed";
import { trTR } from "@mui/material/locale";

const theme = createTheme({}, trTR);

const TablePaginationComponent: React.FunctionComponent<
  TablePaginationProps
> = ({ onRowsPerPageChange, result, count, page, onChange }) => {
  return (
    <ThemeProvider theme={theme}>
      <TablePagination
        count={count}
        page={page}
        onPageChange={onChange}
        component="div"
        onRowsPerPageChange={onRowsPerPageChange}
        labelRowsPerPage="Sayfa başı satır:"
        rowsPerPage={result!}
        showFirstButton={page !== 0 && count % result! < result!}
        showLastButton
      ></TablePagination>
    </ThemeProvider>
  );
};
export default TablePaginationComponent;
