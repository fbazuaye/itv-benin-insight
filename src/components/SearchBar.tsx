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
    <div className="w-full max-w-3xl mx-auto">
      <div className="flex items-center bg-background border border-border rounded-lg shadow-soft overflow-hidden">
        <div className="flex items-center flex-1 px-4">
          <Search className="w-5 h-5 text-muted-foreground flex-shrink-0" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask anything Sport, Politics, Entertainment...."
            disabled={isLoading}
            className="w-full py-4 px-3 bg-transparent text-foreground placeholder:text-muted-foreground focus:outline-none text-base disabled:opacity-50"
          />
        </div>
        <button
          onClick={handleSubmit}
          disabled={isLoading || !query.trim()}
          className="px-8 py-4 bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Search
        </button>
      </div>
    </div>
  );
};
