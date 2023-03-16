import { useState } from "react";

interface OptionSearchProps {
  options: string[];
  onSearch: (name: string, option: string) => void;
}

export default function OptionSearch({ options, onSearch }: OptionSearchProps) {
  const [selectedOption, setSelectedOption] = useState("");

  const handleChange = () => {
    onSearch("option", selectedOption);
  };

  return (
    <div>
      <select
        value={selectedOption}
        onChange={(e) => setSelectedOption(e.target.value)}
        onBlur={handleChange}
      >
        {options.map((option) => (
          <option
            key={option}
            value={option}
            className="p-10 bg-black h-10 w-10"
          >
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}
