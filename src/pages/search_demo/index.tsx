import { useState } from "react";
import KeywordSearch from "../../components/searchDemo/KeywordSearch";
import DateSearch from "../../components/searchDemo/DateSearch";
import OptionSearch from "../../components/searchDemo/OptionSearch";
import ItemListContainer from "../../components/itemList/ItemListContainer";
import Button from "../../components/searchDemo/Button";
export interface ItemsProps {
  keyword: string;
  date: {
    startDate: Date | null;
    endDate: Date | null;
  };
  option: string;
}

export default function SearchDemoIdx() {
  const [items, setItems] = useState<ItemsProps>({
    keyword: "",
    date: {
      startDate: null,
      endDate: null,
    },
    option: "",
  });
  const [getList, setGetList] = useState<boolean>(false);

  const onSearch = (name: string, value: any) => {
    setItems({
      ...items,
      [name]: value,
    });
  };

  //   keyword: string, date: Date | null, option: string

  const onClickSearch = () => {
    console.log("검색 조건", items);
    setGetList(true);
  };
  return (
    <>
      <KeywordSearch onSearch={onSearch} />
      <DateSearch onSearch={onSearch} />
      <OptionSearch
        options={["Option 1", "Option 2", "Option 3"]}
        onSearch={onSearch}
      />
      <Button onClick={onClickSearch} />
      {/* 아이템 목록을 출력하는 컴포넌트 등을 추가 */}
      <div className="mt-10 w-[950px] h-[300px] bg-slate-600 rounded-lg">
        {getList && <ItemListContainer />}
      </div>
    </>
  );
}
