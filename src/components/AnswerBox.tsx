import { FileText, Loader2, Send } from "lucide-react";
import { useState, KeyboardEvent } from "react";

interface AnswerBoxProps {
  answer: string | null;
  sources?: string[];
  isLoading: boolean;
  error: string | null;
  onFollowUp?: (query: string) => void;
}

export const AnswerBox = ({ answer, sources, isLoading, error, onFollowUp }: AnswerBoxProps) => {
  const [followUpQuery, setFollowUpQuery] = useState("");

  const handleFollowUp = () => {
    if (followUpQuery.trim() && onFollowUp && !isLoading) {
      onFollowUp(followUpQuery.trim());
      setFollowUpQuery("");
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleFollowUp();
    }
  };

  if (!answer && !isLoading && !error) return null;

  return (
    <div className="w-full max-w-2xl mx-auto mt-8 animate-fade-in">
      <div className="bg-card rounded-xl border border-border shadow-soft p-6">
        {isLoading ? (
          <div className="flex items-center gap-3 text-muted-foreground">
            <Loader2 className="w-5 h-5 animate-spin-slow text-primary" />
            <span className="animate-pulse-soft">Fetching report…</span>
          </div>
        ) : error ? (
          <div className="text-destructive">
            <p className="font-medium">Something went wrong</p>
            <p className="text-sm mt-1 opacity-80">{error}</p>
          </div>
        ) : (
          <>
            <div className="prose prose-sm md:prose-base max-w-none text-foreground">
              <p className="whitespace-pre-wrap leading-relaxed">{answer}</p>
            </div>
            
            {sources && sources.length > 0 && (
              <div className="mt-6 pt-4 border-t border-border">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                  Sources
                </h4>
                <ul className="space-y-2">
                  {sources.map((source, index) => (
                    <li key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <FileText className="w-4 h-4 text-primary" />
                      <span>{source}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Follow-up Question Input */}
            {onFollowUp && (
              <div className="mt-6 pt-4 border-t border-border">
                <div className="flex items-center gap-2 bg-background border border-border rounded-lg overflow-hidden">
                  <input
                    type="text"
                    value={followUpQuery}
                    onChange={(e) => setFollowUpQuery(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Ask a follow-up question..."
                    className="flex-1 py-3 px-4 bg-transparent text-foreground placeholder:text-muted-foreground focus:outline-none text-sm"
                  />
                  <button
                    onClick={handleFollowUp}
                    disabled={!followUpQuery.trim()}
                    className="px-4 py-3 bg-blue-600 text-white hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};