import { AlertTriangle, DollarSign, Scale, Users } from "lucide-react";

const problems = [
  {
    icon: AlertTriangle,
    title: "Information Asymmetry",
    description: "Complex legal jargon creates an unfair advantage, leaving individuals vulnerable to unfavorable terms they don't understand."
  },
  {
    icon: DollarSign,
    title: "Financial Risks",
    description: "Hidden clauses and unclear terms can lead to unexpected costs, penalties, and financial obligations."
  },
  {
    icon: Scale,
    title: "Legal Exposure",
    description: "Misunderstanding legal documents can result in serious legal consequences and loss of rights."
  },
  {
    icon: Users,
    title: "Accessibility Barrier",
    description: "Legal literacy shouldn't be a privilege. Everyone deserves to understand the documents they sign."
  }
];

export const Problem = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            The Legal Document Challenge
          </h2>
          <p className="text-xl text-muted-foreground">
            Legal documents are filled with impenetrable jargon that creates significant barriers for everyday people, small businesses, and organizations trying to make informed decisions.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <div key={index} className="group">
                <div className="bg-gradient-card rounded-xl p-6 shadow-elegant border hover:shadow-glow transition-smooth h-full">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-smooth">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    {problem.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {problem.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};