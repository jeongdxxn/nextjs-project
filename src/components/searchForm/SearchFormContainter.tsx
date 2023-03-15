import { Transition } from "@headlessui/react";
import React, { useContext, useEffect, useState } from "react";
import { items } from "../../data/marketItems";
import BtnGroup from "./BtnGroup";
import DatePickers from "./DatePickers";
import SearchDropdown from "./SearchDropDown";
import SearchInput from "./SearchInput";

export default function SearchFormContainter() {
  const [openSearchBox, setOpenSearchBox] = useState<boolean>(false);
  const [selectedStatus, setSelectedStatus] = useState<string>("Select All");
  const [selectedService, setSelectedService] = useState<string>("Select All");

  const onClickOpenSearchBox = () => {
    setOpenSearchBox(!openSearchBox);
  };
  const onClickSelectStatus = (text: string) => {
    setSelectedStatus(text);
  };
  const onClickSelectService = (text: string) => {
    setSelectedService(text);
  };

  return (
    <div className="w-full h-full flex justify-center bg-slate-200">
      <div
        className={`${
          !openSearchBox ? "h-[98px]" : "h-[162px]"
        } mb-[24px] rounded-[16px] bg-white	 duration-300 ease-in-out border-2 w-[950px]`}
      >
        <div className="w-full px-[24px] py-[16px] flex">
          <form>
            <div className="flex">
              <SearchInput />
              <DatePickers />
              <BtnGroup onClickOpenSearchBox={onClickOpenSearchBox} />
            </div>
            <Transition
              show={openSearchBox}
              enter="transition-opacity duration-200"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="mt-[20px] flex items-center">
                <SearchDropdown
                  label="Status"
                  selected={selectedStatus}
                  optionListData={items.status}
                  onClickList={onClickSelectStatus}
                />
                <SearchDropdown
                  label="Service"
                  selected={selectedService}
                  optionListData={items.service}
                  onClickList={onClickSelectService}
                />
              </div>
            </Transition>
          </form>
        </div>
      </div>
    </div>
  );
}
