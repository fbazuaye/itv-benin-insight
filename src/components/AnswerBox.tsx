import { FileText, Loader2 } from "lucide-react";

interface AnswerBoxProps {
  answer: string | null;
  sources?: string[];
  isLoading: boolean;
  error: string | null;
}

export const AnswerBox = ({ answer, sources, isLoading, error }: AnswerBoxProps) => {
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
          </>
        )}
      </div>
    </div>
  );
};
