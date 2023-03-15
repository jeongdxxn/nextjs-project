import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { ReactElement, useContext, useEffect, useState } from "react";
import React from "react";

type TitleProps = {
  title?: string;
};
export default function SearchInput({ title }: TitleProps) {
  const [inputValue, setInputValue] = useState<string>("");

  const handleInputChange = (event: string) => {
    setInputValue(event);
  };

  if (!title) {
    title = "What are you looking for?";
  }

  return (
    <div className="mr-[16px] w-[500px]">
      <div className="mb-[4px]">
        <div>{title}</div>
      </div>
      <SearchInput.IconInputText
        icon={<MagnifyingGlassIcon />}
        placeHolder="Search for name, email, phone number, etc"
        onChange={handleInputChange}
      />
    </div>
  );
}

SearchInput.IconInputText = function ({
  icon,
  widthClassName = "",
  isDisabled = false,
  isReadonly = false,
  placeHolder,
  onChange,
}: Props) {
  const [isFocus, setIsFocus] = useState(false);

  if (icon) {
    icon = React.cloneElement(icon, {
      className: `fill-rp-primary-20 w-[20px] h-[20px] absolute ml-[10px] ${
        isFocus && "hidden"
      }`,
    });
  }

  return (
    <div className={`flex items-center ${widthClassName}`}>
      {icon}
      <input
        type="text"
        name=""
        id=""
        className={`'disable:bg-rp-neutral-20' rounded-[4px] w-full border border-solid border-rp-primary-20 px-[11px] py-[8px] outline-none placeholder:text-rp-n14 placeholder:text-rp-primary-20 focus:placeholder-transparent ${
          !isFocus && "pl-[36px]"
        }`}
        placeholder={placeHolder}
        disabled={isDisabled}
        readOnly={isReadonly}
        onFocus={() => {
          setIsFocus(true);
        }}
        onBlur={() => {
          setIsFocus(false);
        }}
        onChange={(e) => onChange && onChange(e.target.value)}
      />
    </div>
  );
};

interface Props {
  icon: ReactElement;
  widthClassName?: string;
  isDisabled?: boolean;
  isReadonly?: boolean;
  placeHolder?: string;
  onChange?: (event: string) => void;
}
