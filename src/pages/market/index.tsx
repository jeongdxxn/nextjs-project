import ItemListContainer from "../../components/itemList/itemListContainer";
import SearchFormContainter from "../../components/searchForm/SearchFormContainter";

export default function MarketIndex() {
  return (
    <div className="h-screen w-full bg-slate-200 flex flex-col justify-center items-center">
      <SearchFormContainter />
      <div className="mt-10 w-[950px] h-[300px] bg-slate-600 rounded-lg">
        <ItemListContainer />
      </div>
    </div>
  );
}
