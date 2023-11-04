import React, { useEffect, useState } from "react";
import { FormControl, RadioGroup, TableBody } from "@mui/material";

import TableSkeleton, { NotFound } from "./TableSkeleton";
import TableHeadComponent from "./TableHead";
import ExpandableTableRow from "./ExpandableTableRow";
import TableRowMenu from "./TableMenu";
import { TableBodyRowData, TableProps } from "./types";

import { CustomTable, CustomTableCell, TableCustomPaper } from "./Table.styled";
import TablePaginationComponent from "./TablePagination/TablePagination";
import Typography from "../Typography/Typography";
import { objectWithoutKeys } from "../../../utils/helpers";
import { colors } from "../../../styles/color";

const TableBodyCellCreator: React.FunctionComponent<{
  data: TableBodyRowData;
}> = ({ data }) => {
  return (
    <>
      {Object.entries(data).map(([key, value]) => (
        <CustomTableCell
          key={key}
          align="left"
          padding={key === "icon" ? "checkbox" : "normal"}
          sx={{ paddingLeft: key === "icon" ? "20px" : "none" }}
        >
          {typeof value === typeof String() ? (
            <Typography
              variant="body-small-medium"
              color={colors.black.default}
            >
              {value}
            </Typography>
          ) : (
            value
          )}
        </CustomTableCell>
      ))}
    </>
  );
};

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
              {rowsData?.length > 0 &&
                rowsData.map((row, index) => (
                  <ExpandableTableRow
                    id={row.selectableId || index}
                    key={Math.random()}
                    expandComponent={
                      row.detail && (
                        <CustomTableCell
                          scope="row"
                          colSpan={rowsData?.length + 100}
                        >
                          {row.detail}
                        </CustomTableCell>
                      )
                    }
                    onSelectRows={selectRows}
                    selectedCheckBox={selectedRows}
                    checkBox={checkBox}
                    radioButton={radioButton}
                    initialRadioButtonValue={initialRadioButtonValue}
                    isRowColorful={row.isRowColorful}
                    rowColor={row.rowColor}
                  >
                    <TableBodyCellCreator
                      data={objectWithoutKeys(row, [
                        "detail",
                        "menu",
                        "selectableId",
                        "isRowColorful",
                        "rowColor",
                      ])}
                    />
                    {menu && <TableRowMenu menu={row.menu} />}
                  </ExpandableTableRow>
                ))}
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
