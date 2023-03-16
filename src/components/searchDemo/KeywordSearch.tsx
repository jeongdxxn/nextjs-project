import { useState } from "react";

interface KeywordSearchProps {
  onSearch: (name: string, keyword: string) => void;
}

export default function KeywordSearch({ onSearch }: KeywordSearchProps) {
  const [keyword, setKeyword] = useState("");

  function handleSearch() {
    onSearch("keyword", keyword);
  }
  return (
    <div>
      <input
        type="text"
        placeholder="Keyword Search"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        onBlur={handleSearch}
      />
    </div>
  );
}
