import { ChevronDownIcon } from "@heroicons/react/20/solid";
import React, { useState } from "react";

interface SearchSelectProps {
  label?: string;
  selected: string;
  optionListData: { id?: number; text: string }[];
  onClickList: (option: string) => void;
}

export default function SearchDropdown({
  label,
  selected,
  optionListData,
  onClickList,
}: SearchSelectProps) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggleDropdown = (text: string) => {
    onClickList(text);
    setDropdownOpen(!dropdownOpen);
  };
  return (
    <div>
      <div className="mr-16px flex items-start">
        <label className="mr-8px pt-10px text-rp-m14 text-rp-neutral-80">
          {label && label}
        </label>

        <div
          className={`${
            dropdownOpen && "drop-shadow-xl z-10"
          } w-200px rounded-[4px] border border-solid border-rp-primary-20 bg-white text-rp-neutral-100`}
        >
          <div
            className="flex items-center justify-between px-11px py-8px"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            <span className="flex items-center">
              <div>{selected}</div>
            </span>
            <span>
              <ChevronDownIcon
                className="h-20px w-20px text-rp-neutral-40"
                aria-hidden="true"
              />
            </span>
          </div>

          {dropdownOpen && (
            <div>
              <ul>
                {optionListData.map((option) => {
                  return (
                    <li
                      key={option.id}
                      onClick={() => toggleDropdown(option.text)}
                      className={`${
                        option.text === selected && "bg-rp-primary-10"
                      } py-8px px-11px text-rp-neutral-60 hover:bg-rp-primary-10`}
                    >
                      <div>{option.text}</div>
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
