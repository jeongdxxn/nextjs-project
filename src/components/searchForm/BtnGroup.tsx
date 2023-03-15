import { ChevronDoubleDownIcon } from "@heroicons/react/20/solid";
import { useContext } from "react";

export default function BtnGroup({ onClickOpenSearchBox }: BtnGroupsProps) {
  // 검색 api 호출 -> res 값을 받으면 -> settlement list 가 새로 출력되게 변경

  return (
    <div className="items-center flex">
      <div
        className="mr-[8px] flex h-[42px] w-[42px] cursor-pointer items-center justify-center rounded border border-solid"
        onClick={onClickOpenSearchBox}
      >
        <ChevronDoubleDownIcon className="h-[18px] w-[18px]" />
      </div>
      {/* 여기서 데이터를  */}
      <button
        type="button"
        className="border-none rounded-[4px] bg-slate-800 text-white p-2"
      >
        SEARCH
      </button>
    </div>
  );
}

interface BtnGroupsProps {
  onClickOpenSearchBox: () => void;
}
