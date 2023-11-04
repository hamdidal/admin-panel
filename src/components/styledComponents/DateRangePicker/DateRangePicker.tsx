import React, { useRef, useState } from "react";
import dayjs from "dayjs";
import Flatpickr from "react-flatpickr";
import { DateRangePickerProps } from "./types";
import ClearIcon from "@mui/icons-material/Clear";
import {
  DateRangePicker,
  DateRangePickerContainer,
  IconBox,
} from "./DateRangePicker.styled";
import { Turkish } from "flatpickr/dist/l10n/tr.js";
import { ptr } from "../../../utils/helpers";

const DatePicker: React.FunctionComponent<DateRangePickerProps> = ({
  height,
  setEndDate,
  setStartDate,
  startDate,
  endDate,
  value,
  onSelectDate,
  placeholder,
  width,
  size,
}) => {
  // const [picker, setPicker] = useState<any>(new Date())
  const dateRef = useRef<Flatpickr>(null);
  const [open, setOpen] = useState(false);

  const clearDates = () => {
    dateRef.current?.flatpickr.clear();
    setEndDate!("");
    setStartDate!("");
  };

  return (
    <DateRangePickerContainer>
      <DateRangePicker
        onClick={() => setOpen(!open)}
        ref={dateRef}
        value={value}
        style={{
          width: width,
          border: "0px",
          outline: "black",
          borderRadius: "4px",
          height: height,
          fontSize: size ? ptr(12) : ptr(16),
        }}
        onOpen={() => {}}
        placeholder={placeholder}
        onChange={(date) => {
          if (date.length === 2) {
            onSelectDate({
              startDate: dayjs(date[0]).format("DD-MM-YYYY"),
              endDate: dayjs(date[1]).format("DD-MM-YYYY"),
            });
          }
        }}
        options={{
          mode: "range",
          defaultDate: [],
          dateFormat: "d/m/Y",
          locale: Turkish,
        }}
      />
      <IconBox>
        <ClearIcon
          fontSize="large"
          style={{
            color: "grey",
            display: !startDate && !endDate ? "none" : "block",
          }}
          onClick={() => clearDates()}
        />
      </IconBox>
    </DateRangePickerContainer>
  );
};

export default DatePicker;
