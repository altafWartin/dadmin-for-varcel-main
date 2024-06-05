// DateRangePickerComponent.js

import React from "react";

import DateRangePicker from "rsuite/DateRangePicker";
import format from "date-fns/format";

import "rsuite/DateRangePicker/styles/index.css";

const CustomDateRangePicker = ({ onChange, isDropdownOpen }) => {
  console.log("navbar", onChange, isDropdownOpen);
  return (
    <div
      className={`flex w-[200px] flex-row items-start justify-start gap-[0.25rem] ${
        isDropdownOpen ? "invisible" : ""
      }`}
    >
      <div class="rounded-lg bg-white flex flex-row items-center justify-start py-[0.25rem] pr-[0.56rem] pl-[0.5rem] gap-[0.38rem] ">
        <div class="font-medium">
          <DateRangePicker
            onChange={onChange}
            editable={false}
            placement="bottomEnd"
            direction="vertical"
            zIndex="0"
            placeholder="Select Date"
            renderValue={([start, end]) => {
              return format(start, "MMM d") + " - " + format(end, "MMM d");
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default CustomDateRangePicker;
