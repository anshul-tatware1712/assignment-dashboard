import React from "react";
import { Search } from "lucide-react";
interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({
  value,
  onChange,
  placeholder = "Search orders, products...",
}) => {
  return (
    <div className="relative">
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg leading-5 bg-white placeholder-gray-500 focus:outline-none sm:text-sm"
        placeholder={placeholder}
      />

      <button
        onClick={() => onChange("")}
        className="absolute inset-y-0 right-0 pr-3 flex items-center"
      >
        <Search className="h-5 w-5 text-gray-400" />
      </button>
    </div>
  );
};

export default SearchBar;
