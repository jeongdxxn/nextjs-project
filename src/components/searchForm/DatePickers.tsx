import React, { useContext, useEffect } from "react";
import { useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";

// import "react-datepicker/dist/react-datepicker.css";

export default function DatePickers() {
  // const [startDate, setStartDate] = useState<Date | null>(null);
  // const [endDate, setEndDate] = useState<Date | null>(null);
  const [value, setValue] = useState<{
    startDate: Date | null;
    endDate: Date | null;
  }>({
    startDate: null,
    endDate: null,
  });

  const handleValueChange = (newValue: any) => {
    setValue(newValue);
  };

  return (
    <div className="mr-24px w-full max-w-[345px]">
      <div>Start Date</div>
      <div className="w-full mt-4px">
        <Datepicker
          inputClassName="rounded-4px pl-40px"
          toggleClassName="left-0"
          primaryColor="teal"
          value={value}
          onChange={handleValueChange}
          showShortcuts={true}
          placeholder="Search for the date"
        />
      </div>
      {/* <Flex className="gap-[25px]">
        <div className="w-full max-w-[160px]">
          <div className="mb-4px">
            <Text variant="subTitle2">Start Date</Text>
          </div>
          <DatePicker
            selected={startDate}
            selectsStart
            startDate={startDate}
            endDate={endDate}
            maxDate={new Date()}
            onChange={handleStartDateChange}
            placeholderText="Search for the date"
            customInput={React.createElement(React.forwardRef(CustomInput))}
          />
        </div>
        <div className="w-full max-w-[160px]">
          <div className="mb-4px">
            <Text variant="subTitle2">End Date</Text>
          </div>
          <DatePicker
            selected={endDate}
            selectsEnd
            startDate={startDate}
            endDate={endDate}
            maxDate={new Date()}
            onChange={handleendDateChange}
            placeholderText="Search for the date"
            customInput={React.createElement(React.forwardRef(CustomInput))}
          />
        </div>
      </Flex> */}
    </div>
  );
}

// const CustomInput = (
//   props: React.HTMLProps<HTMLInputElement>,
//   ref: React.Ref<HTMLInputElement>,
// ) => {
//   return (
//     <div className="datepickerInputCont relative">
//       <CalendarDaysIcon className="absolute top-[14px] left-[8px] h-[18px] w-[18px] text-[#CCDADD]" />
//       <input
//         {...props}
//         className="h-[40px] w-full rounded border border-solid border-[#CCDADD] py-[11px] px-[8px] pl-[30px] text-[12px] placeholder-[#CCDADD] outline-0"
//       />
//     </div>
//   );
// };
