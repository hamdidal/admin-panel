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
import {
  useDeleteActivity,
  useGetAllActivities,
} from "../../utils/hooks/queries/Activities";
import DashboardLayout from "../../layouts/Dashboard/DashboardLayout";
import Button from "../../components/styledComponents/Buttons/Button/Button";
import { Add, Delete, Update } from "@mui/icons-material";
import ActivityCreateModal from "./addActivity/activityCreateModal";
import Fuse from "fuse.js";
import _debounce from "lodash/debounce";
import SearchInput from "../../components/styledComponents/Input/SearchInput/SearchInput";
import CheckBox from "../../components/styledComponents/Buttons/Checkbox/Checkbox";
import ActivityEditModal from "./addActivity/activityEditModal";
import Modal from "../../components/styledComponents/Modal/Modal";

export const activitiesHead: GridColDef[] = [
  { field: "activity", headerName: "AKTİVİTE İSMİ", width: 130 },
  { field: "title", headerName: "BAŞLIK", width: 130 },
  { field: "description", headerName: "AÇIKLAMA", width: 130 },
  { field: "city", headerName: "ŞEHİR", width: 130 },
  { field: "isActive", headerName: "AKTİF/PASİF", width: 130 },
  { field: "updateAndDelete", headerName: "", width: 130 },
];

const ActivitiesPage = () => {
  const { data, isSuccess, isLoading, refetch } = useGetAllActivities({
    queryKeys: {},
  });
  const [activities, setActivities] = useState<any[]>([]);
  const [filterText, setFilterText] = useState("");
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(0);
  const [rowPerPage, setRowPerPage] = useState(10);
  const [show, setShow] = useState({ mode: "none" } as {
    mode: "none" | "create" | "edit";
  });
  const [open, setOpen] = useState(false);
  const [selectedActivityId, setSelectedActivityId] = useState(0);
  const { mutate } = useDeleteActivity();

  useEffect(() => {
    if (isSuccess && data?.data) {
      setActivities(data.data);
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
    if (activities.length === 0 || !filterText) {
      return setActivities(data?.data);
    }

    const fuse = new Fuse(activities, {
      keys: Object.keys(activities[0]),
    });

    const results = fuse.search(filterText);
    return setActivities(results.map((result) => result.item));
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
    activities &&
    activities.map((activity) => {
      return {
        activity: (
          <Box>
            <UserNameBox>
              <Typography
                variant="body-normal-medium"
                onClick={() =>
                  handleTo(activity?.id?.toString() as number, "activities")
                }
              >
                {activity?.name?.toString()}
              </Typography>
            </UserNameBox>
          </Box>
        ),
        title: (
          <Box sx={{ display: "flex", alignItems: "center", gap: ptr(12.75) }}>
            <Typography variant="body-normal-medium">
              {activity?.title?.toString()}
            </Typography>
          </Box>
        ),
        description: (
          <Box sx={{ display: "flex", alignItems: "center", gap: ptr(12.75) }}>
            <Typography variant="body-normal-medium">
              {activity?.description?.toString()}
            </Typography>
          </Box>
        ),
        city: (
          <Box sx={{ display: "flex", alignItems: "center", gap: ptr(12.75) }}>
            <Typography variant="body-normal-medium">
              {activity?.city?.name.toString()}
            </Typography>
          </Box>
        ),
        isActive: (
          <Box sx={{ display: "flex", alignItems: "center", gap: ptr(12.75) }}>
            <CheckBox checked={activity.isActive} />
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
                setSelectedActivityId(activity.id);
              }}
              variant="text"
            >
              <Update />
            </Button>

            <Button
              onClick={() => {
                handleToggle();
                setSelectedActivityId(activity.id);
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
          <Typography variant="h4-semibold">Aktiviteler</Typography>
        </CustomBoxColumn>
      </CustomCardBox>
      <FilterSection>
        <FilterGroup>
          <SearchInput
            value={filterText}
            onChange={(e) => handleFilter(e)}
            placeholder="Aktivite Ara"
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
          <ActivityCreateModal
            setShow={() => setShow({ mode: "none" })}
            show={show.mode === "create"}
            onReload={handleReload}
          />
          <ActivityEditModal
            setShow={() => setShow({ mode: "none" })}
            show={show.mode === "edit"}
            onReload={handleReload}
            activity={
              data?.data.filter(
                (data: any) => data.id === selectedActivityId
              )[0]
            }
          />
        </FilterGroup>
      </FilterSection>
      <CustomCompaniesContainer>
        <CustomTableDiv>
          <Table
            count={activities?.length}
            isLoading={isLoading}
            onRowsPerPageChange={handleChangeRowsPerPage}
            onPageChange={onPageChange}
            head={activitiesHead}
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
        onConfirm={() => handleModalConfirm(selectedActivityId!)}
        header={"Aktiviteyi Silmek Üzeresiniz"}
        subheader={"Yine de işleme devam etmek istiyor musunuz?"}
      ></Modal>
    </DashboardLayout>
  );
};

export default ActivitiesPage;
