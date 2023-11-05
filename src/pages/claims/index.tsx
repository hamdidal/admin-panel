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
  useDeleteClaim,
  useGetAllClaim,
} from "../../utils/hooks/queries/Claims";
import Button from "../../components/styledComponents/Buttons/Button/Button";
import { Add, Delete, Update } from "@mui/icons-material";
import ClaimCreateModal from "./addClaims/claimCreateModal";
import CityEditModal from "./addClaims/cityEditModal";
import _debounce from "lodash/debounce";
import Modal from "../../components/styledComponents/Modal/Modal";
import SearchInput from "../../components/styledComponents/Input/SearchInput/SearchInput";
import Fuse from "fuse.js";

export const claimsHead: GridColDef[] = [
  { field: "claims", headerName: "YETKİ İSMİ", width: 130 },
  { field: "updateAndDelete", headerName: "Güncelle/Sil", width: 130 },
];

const ClaimsPage = () => {
  const { data, isSuccess, isLoading, refetch } = useGetAllClaim({
    queryKeys: {},
  });

  const [claims, setClaims] = useState<any[]>([]);
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(0);
  const [rowPerPage, setRowPerPage] = useState(10);
  const [show, setShow] = useState({ mode: "none" } as {
    mode: "none" | "create" | "edit";
  });
  const [open, setOpen] = useState(false);
  const [selectedCityId, setSelectedCityId] = useState(0);
  const [filterText, setFilterText] = useState("");
  const { mutate } = useDeleteClaim();

  useEffect(() => {
    if (isSuccess && data?.data) {
      setClaims(data.data);
    }
  }, [isSuccess, data?.data]);

  const handleTo = (id: number, type: string) => {
    navigate(`/${type}/${id}`);
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
    mutate({ id });
    setOpen(!open);
    refetch();
  };

  useEffect(() => {
    console.log("refetch");
  }, [refetch]);

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowPerPage(parseInt(event.target.value, 10));
    setCurrentPage(0);
  };

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
    if (claims.length === 0 || !filterText) {
      return setClaims(data?.data);
    }

    const fuse = new Fuse(claims, {
      keys: Object.keys(claims[0]),
    });

    const results = fuse.search(filterText);
    return setClaims(results.map((result) => result.item));
  };

  useEffect(() => {
    filterData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterText]);

  const rowData: TableBodyRowData[] =
    claims &&
    claims.map((claim) => {
      return {
        airport: (
          <Box>
            <UserNameBox>
              <Typography
                variant="body-normal-medium"
                onClick={() => handleTo(claim.id as number, "airports")}
              >
                {claim.name}
              </Typography>
            </UserNameBox>
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
                setSelectedCityId(claim.id);
              }}
              variant="text"
            >
              <Update />
            </Button>

            <Button
              onClick={() => {
                handleToggle();
                setSelectedCityId(claim.id);
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
          <Typography variant="h4-semibold">Yetkiler</Typography>
        </CustomBoxColumn>
      </CustomCardBox>
      <FilterSection>
        <FilterGroup>
          <SearchInput
            value={filterText}
            onChange={(e) => handleFilter(e)}
            placeholder="Yetki Ara"
          />
          <Button
            startIcon={<Add />}
            onClick={() => setShow({ mode: "create" })}
            variant="outlined"
            color={"secondary"}
            padding={ptr(16)}
          >
            EKLE
          </Button>
          <ClaimCreateModal
            setShow={() => setShow({ mode: "none" })}
            show={show.mode === "create"}
            onReload={handleReload}
          />
          <CityEditModal
            setShow={() => setShow({ mode: "none" })}
            show={show.mode === "edit"}
            onReload={handleReload}
            city={
              data?.data.filter((data: any) => data.id === selectedCityId)[0]
            }
          />
        </FilterGroup>
      </FilterSection>
      <CustomCompaniesContainer>
        <CustomTableDiv>
          <Table
            count={claims?.length}
            isLoading={isLoading}
            onRowsPerPageChange={handleChangeRowsPerPage}
            onPageChange={onPageChange}
            head={claimsHead}
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
        onConfirm={() => handleModalConfirm(selectedCityId!)}
        header={"Aktiviteyi Silmek Üzeresiniz"}
        subheader={"Yine de işleme devam etmek istiyor musunuz?"}
      ></Modal>
    </DashboardLayout>
  );
};

export default ClaimsPage;
