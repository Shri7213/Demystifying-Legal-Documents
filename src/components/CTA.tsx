import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Zap } from "lucide-react";

export const CTA = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="relative rounded-3xl bg-gradient-hero p-12 lg:p-16 text-center overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJtMzYgMzQgdjItaDItdjJoMnYtMmgydi0yaDJ2LTJoLTJ2LTJoLTJ2MmgtMnYyaC0yem0wLTMwaDJ2LTJoMnYyaDJ2MmgtMnYyaC0ydi0yaC0ydi0yem0tMTYgMzBoMnYtMmgydjJoMnYyaC0ydjJoLTJ2LTJoLTJ2LTJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>
          </div>
          
          <div className="relative z-10 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-6">
              Ready to Demystify Your Legal Documents?
            </h2>
            
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Join thousands of users who have gained legal clarity and confidence. Start analyzing your documents today with our AI-powered platform.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button variant="accent" size="lg" className="group">
                Start Free Analysis
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="glass" size="lg">
                Schedule Demo
              </Button>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-primary-foreground/80">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5" />
                <span>Secure & Private</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5" />
                <span>Instant Results</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-5 h-5 flex items-center justify-center text-xs font-bold border border-primary-foreground/30 rounded">$</span>
                <span>No Credit Card Required</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};