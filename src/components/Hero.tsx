import { Button } from "@/components/ui/button";
import { ArrowRight, Upload, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-legal-ai.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
      
      {/* Hero content */}
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <div className="text-center lg:text-left space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
            <Sparkles className="w-4 h-4" />
            Powered by Generative AI
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
            Demystify
            <span className="text-transparent bg-gradient-hero bg-clip-text"> Legal Documents</span>
            <br />
            Instantly
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-2xl">
            Transform complex legal jargon into clear, accessible guidance. Our AI-powered solution empowers you to understand contracts, agreements, and terms with confidence.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button variant="hero" size="lg" className="group">
              Get Started Free
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="glass" size="lg" className="group">
              <Upload className="w-5 h-5" />
              Upload Document
            </Button>
          </div>
          
          <div className="flex items-center gap-8 text-sm text-muted-foreground justify-center lg:justify-start">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full" />
              Private & Secure
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full" />
              Instant Analysis
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent rounded-full" />
              Plain English
            </div>
          </div>
        </div>
        
        <div className="relative">
          <div className="relative rounded-2xl overflow-hidden shadow-elegant">
            <img 
              src={heroImage} 
              alt="Legal document transformation from complex to simple"
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent" />
          </div>
          
          {/* Floating cards */}
          <div className="absolute -top-6 -left-6 bg-background/90 backdrop-blur-sm rounded-xl p-4 shadow-elegant border">
            <div className="text-2xl font-bold text-primary">95%</div>
            <div className="text-sm text-muted-foreground">Accuracy Rate</div>
          </div>
          
          <div className="absolute -bottom-6 -right-6 bg-background/90 backdrop-blur-sm rounded-xl p-4 shadow-elegant border">
            <div className="text-2xl font-bold text-accent">&lt; 30s</div>
            <div className="text-sm text-muted-foreground">Analysis Time</div>
          </div>
        </div>
      </div>
    </section>
  );
};