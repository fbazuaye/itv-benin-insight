import { useState } from "react";
import { SearchBar } from "@/components/SearchBar";
import { SuggestionCard } from "@/components/SuggestionCard";
import { AnswerBox } from "@/components/AnswerBox";
import { Footer } from "@/components/Footer";

const SUGGESTIONS = [
  "Latest political news",
  "Sports updates",
  "Entertainment stories",
  "ITV Benin weekend headlines",
];

const API_URL = "https://srv1174892.hstgr.cloud/api/v1/prediction/33767a00-1830-481a-b728-452e352a9007";

interface ApiResponse {
  text?: string;
  answer?: string;
  sources?: string[];
}

const Index = () => {
  const [answer, setAnswer] = useState<string | null>(null);
  const [sources, setSources] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async (query: string) => {
    setIsLoading(true);
    setError(null);
    setAnswer(null);
    setSources([]);

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ question: query }),
      });

      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }

      const data: ApiResponse = await response.json();
      
      // Handle different possible response formats
      const answerText = data.text || data.answer || "No answer available.";
      setAnswer(answerText);
      
      if (data.sources) {
        setSources(data.sources);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "An unexpected error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-12 md:py-20">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="font-display text-3xl md:text-5xl font-bold text-primary mb-3">
            ITV Benin AI Search Engine
          </h1>
          <p className="text-muted-foreground text-base md:text-lg">
            Ask anything about politics, sports, entertainment, and more.
          </p>
        </div>

        {/* Search Bar */}
        <SearchBar onSearch={handleSearch} isLoading={isLoading} />

        {/* Suggestion Cards */}
        <div className="w-full max-w-2xl mx-auto mt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {SUGGESTIONS.map((suggestion) => (
              <SuggestionCard
                key={suggestion}
                text={suggestion}
                onClick={handleSearch}
                disabled={isLoading}
              />
            ))}
          </div>
        </div>

        {/* Answer Box */}
        <AnswerBox
          answer={answer}
          sources={sources}
          isLoading={isLoading}
          error={error}
        />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
