import React, { useEffect, useState } from "react";
import {
  FormControl,
  RadioGroup,
  TableBody,
  TableCell,
  TableRow,
} from "@mui/material";

import TableSkeleton, { NotFound } from "./TableSkeleton";
import TableHeadComponent from "./TableHead";
import { TableProps } from "./types";
import { CustomTable, TableCustomPaper } from "./Table.styled";
import TablePaginationComponent from "./TablePagination/TablePagination";

const Table: React.FunctionComponent<TableProps> = ({
  page,
  count,
  result,
  onPageChange,
  head,
  rowsData,
  checkBox,
  menu,
  isLoading,
  radioButton,
  pagination = true,
  onChange,
  onSelected = () => {},
  initialRadioButtonValue,
  onRowsPerPageChange,
  onSelectAll,
  selectedIds,
}) => {
  const [selectedRows, setSelectedRows] = useState<Array<string>>([]);

  useEffect(() => {
    if (selectedIds) {
      setSelectedRows([...selectedIds]);
    }
  }, [selectedIds]);

  const selectRows = (id: string) => {
    const indexOf = selectedRows.indexOf(id);

    onSelected(id);

    if (indexOf > -1) {
      setSelectedRows((prev) => {
        prev.splice(indexOf, 1);

        return [...prev];
      });
    } else {
      setSelectedRows((prev) => [...prev, id]);
    }
  };

  return (
    <FormControl sx={{ width: "100%", height: "100%" }}>
      <RadioGroup
        defaultValue="0"
        onChange={(_, value) => {
          if (onChange) {
            onChange(value);
          }
        }}
        sx={{ width: "100%", height: "100%" }}
      >
        <TableCustomPaper sx={{ width: "100%", height: "100%" }}>
          <CustomTable>
            <TableHeadComponent
              onSelectAll={(e: boolean) => {
                var selectedItem: Array<string> = [];
                if (e) {
                  selectedItem = rowsData.map((x, index) =>
                    (x.selectableId || index).toString()
                  );
                }

                setSelectedRows(selectedItem);
                if (onSelectAll) onSelectAll(selectedItem);
              }}
              isAllSelected={rowsData?.length === selectedRows?.length}
              checkbox={checkBox}
              radioButton={radioButton}
              head={head}
              isDetail={!!rowsData?.find((x) => x.detail)}
            />
            <TableBody>
              {rowsData
                ?.slice(page! * result!, page! * result! + result!)
                .map((row: any) => {
                  return (
                    <TableRow hover role="checkbox" tabIndex={-1}>
                      {head.map((column) => {
                        const value = row[column.field];
                        return (
                          <TableCell key={column.field} align={column.align}>
                            {column && typeof value === "number"
                              ? value
                              : value}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
            </TableBody>
          </CustomTable>
          {!isLoading && rowsData?.length === 0 && <NotFound />}
          {isLoading && <TableSkeleton />}
          {!isLoading && rowsData?.length > 0 && pagination && (
            <TablePaginationComponent
              onRowsPerPageChange={onRowsPerPageChange}
              result={result!}
              count={count!}
              onChange={onPageChange!}
              page={page!}
            />
          )}
        </TableCustomPaper>
      </RadioGroup>
    </FormControl>
  );
};

export default Table;
