import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight } from "lucide-react";
import processImage from "@/assets/process-illustration.jpg";

const benefits = [
  "Transform complex legal jargon into plain English",
  "Identify key terms and potential risks instantly",
  "Get personalized explanations for confusing clauses", 
  "Private and secure document analysis",
  "Save time and legal consultation costs",
  "Make informed decisions with confidence"
];

export const Solution = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6">
              AI-Powered Solution
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Your Legal Document Translator
            </h2>
            
            <p className="text-xl text-muted-foreground mb-8">
              Our generative AI solution acts as your personal legal interpreter, breaking down complex documents into clear, actionable insights that anyone can understand.
            </p>
            
            <div className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{benefit}</span>
                </div>
              ))}
            </div>
            
            <Button variant="hero" size="lg" className="group">
              Try It Now
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
          
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-elegant">
              <img 
                src={processImage}
                alt="AI document analysis process"
                className="w-full h-auto object-cover"
              />
            </div>
            
            {/* Process steps overlay */}
            <div className="absolute top-6 left-6 bg-background/90 backdrop-blur-sm rounded-lg p-3 shadow-elegant border">
              <div className="text-sm font-medium text-primary">Step 1</div>
              <div className="text-xs text-muted-foreground">Upload Document</div>
            </div>
            
            <div className="absolute top-1/2 right-6 bg-background/90 backdrop-blur-sm rounded-lg p-3 shadow-elegant border">
              <div className="text-sm font-medium text-primary">Step 2</div>
              <div className="text-xs text-muted-foreground">AI Analysis</div>
            </div>
            
            <div className="absolute bottom-6 left-6 bg-background/90 backdrop-blur-sm rounded-lg p-3 shadow-elegant border">
              <div className="text-sm font-medium text-primary">Step 3</div>
              <div className="text-xs text-muted-foreground">Clear Summary</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};