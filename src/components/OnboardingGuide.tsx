import { useState } from "react";
import { ChevronDown, ChevronUp, Lightbulb, MessageSquare, List, ArrowRight, Compass } from "lucide-react";

export const OnboardingGuide = () => {
  const [isExpanded, setIsExpanded] = useState(true);

  const steps = [
    {
      icon: <MessageSquare className="w-5 h-5" />,
      title: "Ask a Clear Question",
      description: "State what you want to know directly.",
      example: '"What key contributions of Chief Gabriel Igbinedion were highlighted at the Erada Centre event?"',
    },
    {
      icon: <Lightbulb className="w-5 h-5" />,
      title: "Include Relevant Details",
      description: "Add important names or places to refine your question.",
      example: '"What did Senator George Akume say while representing President Tinubu during the book launch?" The Chronicle of a Legend',
    },
    {
      icon: <List className="w-5 h-5" />,
      title: "Use Formats (optional)",
      description: "Request bullet points, timelines, short summaries, lists, explanations, or comparisons.",
      example: '"Give me a bullet list of all the dignitaries who attended the Esama book launch."',
    },
    {
      icon: <ArrowRight className="w-5 h-5" />,
      title: "Ask Follow-up Questions",
      description: "The AI can continue from previous context.",
      example: '"Expand more on the philanthropic achievements mentioned by the book reviewer."',
    },
    {
      icon: <Compass className="w-5 h-5" />,
      title: "Explore Any Topic",
      description: "Your query can relate to politics, entertainment, sports, government, business, or society.",
      example: null,
    },
  ];

  return (
    <div className="w-full max-w-3xl mx-auto mt-8">
      <div className="bg-card border border-border rounded-xl shadow-sm overflow-hidden">
        {/* Header */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full flex items-center justify-between px-6 py-4 bg-blue-600 text-white hover:bg-blue-700 transition-colors"
        >
          <div className="flex items-center gap-3">
            <Lightbulb className="w-5 h-5" />
            <span className="font-semibold text-lg">User Onboarding Guide</span>
          </div>
          {isExpanded ? (
            <ChevronUp className="w-5 h-5" />
          ) : (
            <ChevronDown className="w-5 h-5" />
          )}
        </button>

        {/* Content */}
        {isExpanded && (
          <div className="p-6">
            <p className="text-center text-muted-foreground mb-6">
              Welcome to <span className="font-semibold text-foreground">ITV BENIN Search Engine!</span>
              <br />
              Follow these steps to get the best experience:
            </p>

            <div className="space-y-4">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className="flex gap-4 p-4 bg-muted/50 rounded-lg border border-border/50"
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                    {index + 1}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-blue-600">{step.icon}</span>
                      <h3 className="font-semibold text-foreground">{step.title}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">{step.description}</p>
                    {step.example && (
                      <div className="bg-background border border-border rounded-md px-3 py-2">
                        <span className="text-xs text-muted-foreground font-medium">Example:</span>
                        <p className="text-sm text-foreground italic mt-1">{step.example}</p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
