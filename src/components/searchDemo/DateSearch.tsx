import { useEffect, useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";
// import "react-datepicker/dist/react-datepicker.css";

interface DateSearchProps {
  onSearch: (
    name: string,
    date: {
      startDate: Date | null;
      endDate: Date | null;
    }
  ) => void;
}

export default function DateSearch({ onSearch }: DateSearchProps) {
  // const [date, setDate] = useState(new Date());
  const [date, setDate] = useState<{
    startDate: Date | null;
    endDate: Date | null;
  }>({
    startDate: null,
    endDate: null,
  });

  const handleSearch = (dateValue: any) => {
    setDate(dateValue);
  };

  useEffect(() => {
    onSearch("date", date);
  }, [date]);

  return (
    <div className="mr-[24px] w-[300px]">
      <Datepicker
        inputClassName="rounded-[4px] pl-[30px] h-[42px] border-[1px]"
        toggleClassName="left-0"
        primaryColor="teal"
        value={date}
        onChange={handleSearch}
        showShortcuts={true}
        placeholder="Search for the date"
      />
    </div>
  );
}
