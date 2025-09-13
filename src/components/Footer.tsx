import { Scale, Twitter, Linkedin, Github, Mail } from "lucide-react";

const footerSections = [
  {
    title: "Product",
    links: [
      { name: "Features", href: "#features" },
      { name: "How it Works", href: "#how-it-works" },
      { name: "Pricing", href: "#pricing" },
      { name: "API Documentation", href: "#api" }
    ]
  },
  {
    title: "Company",
    links: [
      { name: "About Us", href: "#about" },
      { name: "Privacy Policy", href: "#privacy" },
      { name: "Terms of Service", href: "#terms" },
      { name: "Contact", href: "#contact" }
    ]
  },
  {
    title: "Resources",
    links: [
      { name: "Help Center", href: "#help" },
      { name: "Legal Guides", href: "#guides" },
      { name: "Blog", href: "#blog" },
      { name: "Community", href: "#community" }
    ]
  }
];

export const Footer = () => {
  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand section */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-gradient-hero rounded-lg flex items-center justify-center">
                <Scale className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-foreground">LegalAI</span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              Empowering everyone to understand legal documents through the power of generative AI. Making legal clarity accessible to all.
            </p>
            <div className="flex items-center gap-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-background rounded-lg flex items-center justify-center border hover:bg-primary hover:text-primary-foreground transition-smooth"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-background rounded-lg flex items-center justify-center border hover:bg-primary hover:text-primary-foreground transition-smooth"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-background rounded-lg flex items-center justify-center border hover:bg-primary hover:text-primary-foreground transition-smooth"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-background rounded-lg flex items-center justify-center border hover:bg-primary hover:text-primary-foreground transition-smooth"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links sections */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="font-semibold text-foreground mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href={link.href}
                      className="text-muted-foreground hover:text-foreground transition-smooth"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © 2024 LegalAI. All rights reserved.
          </p>
          <div className="flex items-center gap-6 mt-4 md:mt-0">
            <a href="#privacy" className="text-muted-foreground hover:text-foreground text-sm transition-smooth">
              Privacy
            </a>
            <a href="#terms" className="text-muted-foreground hover:text-foreground text-sm transition-smooth">
              Terms
            </a>
            <a href="#cookies" className="text-muted-foreground hover:text-foreground text-sm transition-smooth">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};