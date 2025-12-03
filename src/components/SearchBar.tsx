import { Search } from "lucide-react";
import { useState, KeyboardEvent } from "react";

interface SearchBarProps {
  onSearch: (query: string) => void;
  isLoading: boolean;
}

export const SearchBar = ({ onSearch, isLoading }: SearchBarProps) => {
  const [query, setQuery] = useState("");

  const handleSubmit = () => {
    if (query.trim() && !isLoading) {
      onSearch(query.trim());
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="relative group">
        <div className="absolute inset-0 rounded-full border-2 border-search-border transition-all duration-300 group-focus-within:border-[3px] group-focus-within:shadow-soft" />
        <div className="relative flex items-center">
          <Search className="absolute left-5 w-5 h-5 text-muted-foreground" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask anything......e.g who won the edo state governorship election 2024"
            disabled={isLoading}
            className="w-full py-4 pl-14 pr-6 bg-transparent rounded-full text-foreground placeholder:text-muted-foreground focus:outline-none text-base md:text-lg disabled:opacity-50"
          />
        </div>
      </div>
    </div>
  );
};
