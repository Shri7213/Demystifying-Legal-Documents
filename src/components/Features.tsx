import { Brain, Shield, Zap, MessageSquare, FileText, Users } from "lucide-react";
import legalDocsImage from "@/assets/legal-documents.jpg";

const features = [
  {
    icon: Brain,
    title: "Smart Analysis",
    description: "Advanced AI understands context and nuance in legal language to provide accurate interpretations."
  },
  {
    icon: Shield,
    title: "Privacy First",
    description: "Your documents are processed securely with end-to-end encryption and never stored permanently."
  },
  {
    icon: Zap,
    title: "Instant Results",
    description: "Get comprehensive analysis and summaries in under 30 seconds, no matter the document length."
  },
  {
    icon: MessageSquare,
    title: "Ask Questions",
    description: "Chat with your document to get specific answers about clauses, terms, and implications."
  },
  {
    icon: FileText,
    title: "Multiple Formats",
    description: "Support for contracts, leases, terms of service, privacy policies, and more legal documents."
  },
  {
    icon: Users,
    title: "For Everyone",
    description: "Designed for individuals, small businesses, and organizations without legal expertise."
  }
];

export const Features = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Powerful Features for Legal Clarity
          </h2>
          <p className="text-xl text-muted-foreground">
            Our AI-powered platform provides everything you need to understand and navigate legal documents with confidence.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-elegant">
              <img 
                src={legalDocsImage}
                alt="Various legal documents with AI interface"
                className="w-full h-auto object-cover"
              />
            </div>
            
            {/* Floating feature badge */}
            <div className="absolute top-6 right-6 bg-background/90 backdrop-blur-sm rounded-xl p-4 shadow-elegant border">
              <div className="text-2xl font-bold text-accent">500+</div>
              <div className="text-sm text-muted-foreground">Document Types</div>
            </div>
          </div>
          
          <div className="grid gap-8">
            {features.slice(0, 3).map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="flex gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.slice(3).map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="group">
                <div className="bg-gradient-card rounded-xl p-6 shadow-elegant border hover:shadow-glow transition-smooth h-full">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-smooth">
                    <Icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {feature.description}
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