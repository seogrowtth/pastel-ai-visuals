import { HeroButton } from "@/components/ui/hero-button";
import { Card } from "@/components/ui/card";
import { Sparkles, Zap, Image, Wand2 } from "lucide-react";

// Import AI example images
import aiExample1 from "@/assets/ai-example-1.jpg";
import aiExample2 from "@/assets/ai-example-2.jpg";
import aiExample3 from "@/assets/ai-example-3.jpg";
import aiExample4 from "@/assets/ai-example-4.jpg";
import aiExample5 from "@/assets/ai-example-5.jpg";
import aiExample6 from "@/assets/ai-example-6.jpg";
import heroBg from "@/assets/hero-bg.jpg";

const aiExamples = [
  { id: 1, src: aiExample1, alt: "AI-generated professional portrait", category: "Portrait" },
  { id: 2, src: aiExample2, alt: "AI-generated architectural visualization", category: "Architecture" },
  { id: 3, src: aiExample3, alt: "AI-generated abstract digital art", category: "Abstract" },
  { id: 4, src: aiExample4, alt: "AI-generated futuristic cityscape", category: "Landscape" },
  { id: 5, src: aiExample5, alt: "AI-generated nature scene", category: "Nature" },
  { id: 6, src: aiExample6, alt: "AI-generated product design", category: "Product" },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-hero-gradient">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url(${heroBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="relative container mx-auto px-4 py-20 lg:py-32 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-center mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-ai-blue/10 border border-ai-blue/20 backdrop-blur-sm">
                <Sparkles className="w-4 h-4 text-ai-blue" />
                <span className="text-sm font-medium text-foreground">Powered by Advanced AI</span>
              </div>
            </div>
            
            <h1 className="text-4xl lg:text-6xl xl:text-7xl font-bold text-foreground mb-6 leading-tight">
              AI-Powered Image Generation
            </h1>
            
            <p className="text-lg lg:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
              Create stunning visuals instantly with AI
            </p>
            
            <div className="flex justify-center">
              <HeroButton variant="primary" size="lg" className="group">
                <Zap className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                Generate Your Image
              </HeroButton>
            </div>
          </div>
        </div>
      </section>

      {/* Sample Images Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {aiExamples.map((example) => (
              <div 
                key={example.id} 
                className="group overflow-hidden rounded-2xl shadow-card hover:shadow-glow transition-all duration-300 hover:scale-105 bg-card/80 backdrop-blur-sm"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={example.src}
                    alt={example.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Minimal Footer */}
      <footer className="py-8 border-t border-ai-blue/10 bg-background/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 text-center">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-6">
              <a href="mailto:hello@aivisuals.ai" className="hover:text-ai-blue transition-colors">
                hello@aivisuals.ai
              </a>
              <a href="#" className="hover:text-ai-blue transition-colors">Privacy</a>
              <a href="#" className="hover:text-ai-blue transition-colors">Terms</a>
            </div>
            <p>© 2024 AI Visuals. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;