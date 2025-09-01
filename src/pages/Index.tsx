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
              Create Stunning Visuals with
              <span className="block bg-gradient-to-r from-ai-blue to-ai-purple bg-clip-text text-transparent">
                Artificial Intelligence
              </span>
            </h1>
            
            <p className="text-lg lg:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
              Transform your ideas into breathtaking images with our cutting-edge AI technology. 
              Fast, professional, and limitlessly creative.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <HeroButton variant="primary" size="lg" className="group">
                <Zap className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                Start Creating Now
              </HeroButton>
              <HeroButton variant="secondary" size="lg">
                <Image className="w-5 h-5 mr-2" />
                View Examples
              </HeroButton>
            </div>
          </div>
        </div>
      </section>

      {/* AI Examples Grid */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-ai-purple/10 border border-ai-purple/20 backdrop-blur-sm mb-6">
              <Wand2 className="w-4 h-4 text-ai-purple" />
              <span className="text-sm font-medium text-foreground">AI Gallery</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              See What's Possible
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore stunning examples of AI-generated content across different categories and styles.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiExamples.map((example, index) => (
              <Card 
                key={example.id} 
                className="group overflow-hidden border-0 shadow-card hover:shadow-glow transition-all duration-500 hover:scale-105 bg-card/50 backdrop-blur-sm"
                style={{
                  animationDelay: `${index * 100}ms`
                }}
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={example.src}
                    alt={example.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-ai-blue/10 border border-ai-blue/20 text-xs font-medium text-ai-blue mb-3">
                    {example.category}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {example.alt}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;