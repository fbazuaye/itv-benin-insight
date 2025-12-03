interface SuggestionCardProps {
  text: string;
  onClick: (text: string) => void;
  disabled?: boolean;
}

export const SuggestionCard = ({ text, onClick, disabled }: SuggestionCardProps) => {
  return (
    <button
      onClick={() => !disabled && onClick(text)}
      disabled={disabled}
      className="w-full text-left px-5 py-4 bg-suggestion border border-suggestion-border rounded-lg transition-all duration-200 hover:bg-suggestion-hover hover:border-primary/30 hover:shadow-card focus:outline-none focus:ring-2 focus:ring-primary/20 disabled:opacity-50 disabled:cursor-not-allowed"
    >
      <span className="text-foreground text-sm md:text-base">{text}</span>
    </button>
  );
};
