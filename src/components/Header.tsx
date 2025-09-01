import { HeroButton } from "@/components/ui/hero-button";
import { Menu, X, Play } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-ai-blue/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-button-gradient flex items-center justify-center">
              <Play className="w-4 h-4 text-white" />
            </div>
            <span className="text-xl font-bold text-foreground">Pixwith.ai</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/blog" className="text-muted-foreground hover:text-ai-blue transition-colors">
              Blog
            </Link>
            <a href="#features" className="text-muted-foreground hover:text-ai-blue transition-colors">
              Features
            </a>
            <a href="#how-it-works" className="text-muted-foreground hover:text-ai-blue transition-colors">
              How It Works
            </a>
            <a href="#pricing" className="text-muted-foreground hover:text-ai-blue transition-colors">
              Pricing
            </a>
            <a href="#faq" className="text-muted-foreground hover:text-ai-blue transition-colors">
              FAQ
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <HeroButton variant="primary" size="default" asChild>
              <a href="https://pixwith.ai/" target="_blank" rel="noopener noreferrer">
                Start Creating
              </a>
            </HeroButton>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-ai-blue/10">
            <nav className="flex flex-col gap-4">
              <Link to="/blog" className="text-muted-foreground hover:text-ai-blue transition-colors">
                Blog
              </Link>
              <a href="#features" className="text-muted-foreground hover:text-ai-blue transition-colors">
                Features
              </a>
              <a href="#how-it-works" className="text-muted-foreground hover:text-ai-blue transition-colors">
                How It Works
              </a>
              <a href="#pricing" className="text-muted-foreground hover:text-ai-blue transition-colors">
                Pricing
              </a>
              <a href="#faq" className="text-muted-foreground hover:text-ai-blue transition-colors">
                FAQ
              </a>
              <HeroButton variant="primary" size="default" className="mt-4 w-full" asChild>
                <a href="https://pixwith.ai/" target="_blank" rel="noopener noreferrer">
                  Start Creating
                </a>
              </HeroButton>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;