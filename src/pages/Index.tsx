import { HeroButton } from "@/components/ui/hero-button";
import { Card } from "@/components/ui/card";
import Header from "@/components/Header";
import { 
  Sparkles, 
  Zap, 
  Play, 
  Clock, 
  Shield, 
  Palette, 
  Wand2,
  CheckCircle,
  DollarSign,
  Users,
  Video,
  Image as ImageIcon
} from "lucide-react";

// Import AI example images
import aiExample1 from "@/assets/ai-example-1.jpg";
import aiExample2 from "@/assets/ai-example-2.jpg";
import aiExample3 from "@/assets/ai-example-3.jpg";
import aiExample4 from "@/assets/ai-example-4.jpg";
import aiExample5 from "@/assets/ai-example-5.jpg";
import aiExample6 from "@/assets/ai-example-6.jpg";
import heroBg from "@/assets/hero-bg.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-hero-gradient">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-16">
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url(${heroBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="relative container mx-auto px-4 py-20 lg:py-32 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-center mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-ai-blue/10 border border-ai-blue/20 backdrop-blur-sm">
                <Play className="w-4 h-4 text-ai-blue" />
                <span className="text-sm font-medium text-foreground">Revolutionary Image to Video AI</span>
              </div>
            </div>
            
            <h1 className="text-4xl lg:text-6xl xl:text-7xl font-bold text-foreground mb-6 leading-tight">
              Transform Static Images into
              <span className="block bg-gradient-to-r from-ai-blue to-ai-purple bg-clip-text text-transparent">
                Dynamic Video Content
              </span>
            </h1>
            
            <p className="text-lg lg:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
              Bring your images to life with Pixwith.ai&apos;s cutting-edge Image to Video AI technology. Create stunning animations from any static image in seconds.
            </p>
            
            <div className="flex justify-center">
              <HeroButton variant="primary" size="lg" className="group" asChild>
                <a href="https://pixwith.ai/" target="_blank" rel="noopener noreferrer">
                  <Zap className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                  Start Creating Videos
                </a>
              </HeroButton>
            </div>
          </div>
        </div>
      </section>

      {/* AI Generated Examples Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">AI Generated Examples</h2>
            <p className="text-muted-foreground text-lg">Stunning AI-generated images showcasing the power of artificial intelligence</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="group overflow-hidden rounded-2xl shadow-card hover:shadow-glow transition-all duration-300 hover:scale-105 bg-card/80 backdrop-blur-sm border border-border">
              <div className="aspect-square overflow-hidden relative">
                <img
                  src="/lovable-uploads/a580120b-b2a1-41b4-bfa4-71d424b1636b.png"
                  alt="AI Generated Beauty Product with Roses"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <h3 className="text-white font-semibold text-sm">Beauty & Lifestyle</h3>
                  <p className="text-white/80 text-xs">Elegant product photography</p>
                </div>
              </div>
            </div>
            <div className="group overflow-hidden rounded-2xl shadow-card hover:shadow-glow transition-all duration-300 hover:scale-105 bg-card/80 backdrop-blur-sm border border-border">
              <div className="aspect-square overflow-hidden relative">
                <img
                  src="/lovable-uploads/79e44702-268e-466b-9f94-588ed9bca666.png"
                  alt="AI Generated 3D Letter B in Classroom"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <h3 className="text-white font-semibold text-sm">Education & 3D</h3>
                  <p className="text-white/80 text-xs">Interactive learning content</p>
                </div>
              </div>
            </div>
            <div className="group overflow-hidden rounded-2xl shadow-card hover:shadow-glow transition-all duration-300 hover:scale-105 bg-card/80 backdrop-blur-sm border border-border">
              <div className="aspect-square overflow-hidden relative">
                <img
                  src="/lovable-uploads/54b13250-ef7b-4b39-86d6-498995e5602e.png"
                  alt="AI Generated Orange Slice Being Cut"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <h3 className="text-white font-semibold text-sm">Food & Cooking</h3>
                  <p className="text-white/80 text-xs">Dynamic culinary visuals</p>
                </div>
              </div>
            </div>
            <div className="group overflow-hidden rounded-2xl shadow-card hover:shadow-glow transition-all duration-300 hover:scale-105 bg-card/80 backdrop-blur-sm border border-border">
              <div className="aspect-square overflow-hidden relative">
                <img
                  src="/lovable-uploads/b4d2733a-8764-4520-89f8-af1b0403939f.png"
                  alt="AI Generated Fashion Photography"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <h3 className="text-white font-semibold text-sm">Fashion & Style</h3>
                  <p className="text-white/80 text-xs">Professional modeling shots</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Article */}
      <section className="py-16 lg:py-24 bg-background/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 max-w-4xl">
          <article className="prose prose-lg max-w-none">
            
            {/* What Is Image to Video AI? */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                <Video className="w-8 h-8 text-ai-blue" />
                What Is Image to Video AI?
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Image to Video AI is a revolutionary technology that transforms static images into dynamic, animated video content using artificial intelligence. This cutting-edge approach leverages advanced machine learning algorithms to analyze the visual elements, depth, and context within a single image, then generates realistic motion and animation that brings the scene to life.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Unlike traditional video creation methods that require extensive footage or complex animation software, Image to Video AI can create compelling video content from just one photograph. The technology understands object relationships, predicts natural movement patterns, and generates smooth transitions that maintain the original image&apos;s quality and artistic intent.
              </p>
            </div>

            {/* Why Image to Video Matters in 2025 */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                <Sparkles className="w-8 h-8 text-ai-purple" />
                Why Image to Video Matters in 2025
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                In 2025, visual content consumption has reached unprecedented levels, with video content generating 1200% more shares than text and images combined. Social media platforms prioritize video content in their algorithms, making it essential for businesses, creators, and marketers to adapt quickly. However, creating high-quality video content traditionally requires significant time, resources, and technical expertise.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Image to Video AI democratizes video creation, enabling anyone to transform their existing visual assets into engaging video content. This technology is particularly crucial for e-commerce businesses showcasing products, real estate professionals bringing property photos to life, and content creators looking to maximize their reach with minimal production overhead.
              </p>
            </div>

            {/* Introducing Pixwith.ai's Image to Video AI */}
            <div className="mb-16" id="features">
              <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                <Wand2 className="w-8 h-8 text-ai-blue" />
                Introducing Pixwith.ai&apos;s Image to Video AI
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Pixwith.ai represents the next generation of Image to Video AI technology, combining state-of-the-art neural networks with intuitive user experience design. Our platform utilizes advanced diffusion models and temporal consistency algorithms to ensure that generated videos maintain high visual fidelity while producing smooth, realistic motion.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                What sets Pixwith.ai apart is our focus on preserving the artistic integrity of the original image while adding meaningful motion that enhances the viewer&apos;s experience. Our AI understands context, depth, and natural physics to create animations that feel authentic and purposeful rather than generic or artificial.
              </p>
            </div>

            {/* How Pixwith.ai Works */}
            <div className="mb-16" id="how-it-works">
              <h2 className="text-3xl font-bold text-foreground mb-6">How Pixwith.ai Works (Step-by-Step)</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="p-6 bg-card/50 backdrop-blur-sm border-ai-blue/20">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded-full bg-ai-blue/20 flex items-center justify-center text-ai-blue font-bold">1</div>
                    <h3 className="text-xl font-semibold text-foreground">Upload Your Image</h3>
                  </div>
                  <p className="text-muted-foreground">Simply drag and drop or select any image from your device. Our AI supports all major formats including JPEG, PNG, and WebP.</p>
                </Card>
                <Card className="p-6 bg-card/50 backdrop-blur-sm border-ai-purple/20">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded-full bg-ai-purple/20 flex items-center justify-center text-ai-purple font-bold">2</div>
                    <h3 className="text-xl font-semibold text-foreground">Choose Motion Style</h3>
                  </div>
                  <p className="text-muted-foreground">Select from various motion styles including subtle ambient movement, dramatic cinematic effects, or custom animation preferences.</p>
                </Card>
                <Card className="p-6 bg-card/50 backdrop-blur-sm border-ai-blue/20">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded-full bg-ai-blue/20 flex items-center justify-center text-ai-blue font-bold">3</div>
                    <h3 className="text-xl font-semibold text-foreground">AI Processing</h3>
                  </div>
                  <p className="text-muted-foreground">Our advanced AI analyzes your image, identifies key elements, and generates smooth, realistic motion in just 30-60 seconds.</p>
                </Card>
                <Card className="p-6 bg-card/50 backdrop-blur-sm border-ai-purple/20">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded-full bg-ai-purple/20 flex items-center justify-center text-ai-purple font-bold">4</div>
                    <h3 className="text-xl font-semibold text-foreground">Download & Share</h3>
                  </div>
                  <p className="text-muted-foreground">Instantly download your high-quality video in multiple formats, ready for social media, presentations, or any other use case.</p>
                </Card>
              </div>
            </div>

            {/* Key Specifications */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-foreground mb-6">Key Specifications</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <Clock className="w-12 h-12 text-ai-blue mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-foreground mb-2">Lightning Fast</h3>
                  <p className="text-muted-foreground">30-60 second processing time</p>
                </div>
                <div className="text-center">
                  <ImageIcon className="w-12 h-12 text-ai-purple mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-foreground mb-2">High Resolution</h3>
                  <p className="text-muted-foreground">Up to 4K video output</p>
                </div>
                <div className="text-center">
                  <Palette className="w-12 h-12 text-ai-blue mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-foreground mb-2">Multiple Formats</h3>
                  <p className="text-muted-foreground">MP4, WebM, GIF export options</p>
                </div>
              </div>
            </div>

            {/* Use Cases */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-foreground mb-6">Use Cases for Image to Video AI</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Pixwith.ai&apos;s Image to Video technology serves diverse industries and creative applications. E-commerce businesses use it to create engaging product demonstrations, real estate agents bring property listings to life, and social media marketers increase engagement rates by up to 300%. Content creators, digital artists, and marketing professionals leverage our platform to transform static portfolios into dynamic showcases that capture audience attention and drive conversions.
              </p>
            </div>

            {/* Motion Styles */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-foreground mb-6">Motion Styles You Can Try</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our platform offers various motion styles including Subtle Ambient (gentle, natural movement), Cinematic Drama (bold camera movements and dynamic effects), Parallax Depth (3D-like layered motion), and Custom Animation (user-defined motion parameters). Each style is optimized for different content types and viewing contexts.
              </p>
            </div>

            {/* Trust & Safety */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                <Shield className="w-8 h-8 text-ai-blue" />
                Trust, Safety & Rights
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Pixwith.ai prioritizes user privacy and content security. All uploaded images are processed securely and automatically deleted after 24 hours. We maintain strict data protection protocols and ensure that users retain full rights to their original content and generated videos. Our platform includes built-in content filtering to prevent misuse and maintains compliance with international privacy regulations.
              </p>
            </div>

            {/* Pricing */}
            <div className="mb-16" id="pricing">
              <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                <DollarSign className="w-8 h-8 text-ai-purple" />
                Pricing Plans
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="p-6 bg-card/50 backdrop-blur-sm">
                  <h3 className="text-xl font-semibold text-foreground mb-2">Starter</h3>
                  <p className="text-3xl font-bold text-ai-blue mb-4">$9<span className="text-sm text-muted-foreground">/month</span></p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> 50 video generations</li>
                    <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> HD quality output</li>
                    <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> Basic motion styles</li>
                  </ul>
                </Card>
                <Card className="p-6 bg-card/50 backdrop-blur-sm border-ai-blue/50">
                  <h3 className="text-xl font-semibold text-foreground mb-2">Professional</h3>
                  <p className="text-3xl font-bold text-ai-blue mb-4">$29<span className="text-sm text-muted-foreground">/month</span></p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> 200 video generations</li>
                    <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> 4K quality output</li>
                    <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> All motion styles</li>
                    <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> Priority processing</li>
                  </ul>
                </Card>
                <Card className="p-6 bg-card/50 backdrop-blur-sm">
                  <h3 className="text-xl font-semibold text-foreground mb-2">Enterprise</h3>
                  <p className="text-3xl font-bold text-ai-blue mb-4">Custom</p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> Unlimited generations</li>
                    <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> API access</li>
                    <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> Custom integrations</li>
                    <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> Dedicated support</li>
                  </ul>
                </Card>
              </div>
            </div>

            {/* Best Practices */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-foreground mb-6">Best Practices for Using Image to Video AI</h2>
              <p className="text-muted-foreground leading-relaxed">
                For optimal results, use high-resolution images with clear subjects and good contrast. Images with distinct foreground and background elements work best, as our AI can create more convincing depth and motion effects. Avoid heavily compressed or blurry images, and consider the final use case when selecting motion styles - subtle movements work well for professional content, while dramatic effects suit creative and entertainment applications.
              </p>
            </div>

            {/* FAQ */}
            <div className="mb-16" id="faq">
              <h2 className="text-3xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">How long does it take to generate a video?</h3>
                  <p className="text-muted-foreground">Most videos are generated within 30-60 seconds, depending on the complexity of the image and chosen motion style.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">What image formats are supported?</h3>
                  <p className="text-muted-foreground">We support JPEG, PNG, WebP, and most common image formats. Maximum file size is 50MB.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Can I use generated videos commercially?</h3>
                  <p className="text-muted-foreground">Yes, all generated videos can be used for commercial purposes. You retain full rights to your content.</p>
                </div>
              </div>
            </div>

            {/* Future of Image to Video AI */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-foreground mb-6">The Future of Image to Video AI</h2>
              <p className="text-muted-foreground leading-relaxed">
                The future of Image to Video AI points toward even more sophisticated capabilities, including real-time processing, advanced physics simulation, and integration with augmented reality platforms. As the technology evolves, we expect to see applications in virtual production, interactive media, and personalized content creation that will revolutionize how we create and consume visual media.
              </p>
            </div>

            {/* Final Thoughts */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-foreground mb-6">Final Thoughts: Why Choose Pixwith.ai?</h2>
              <p className="text-muted-foreground leading-relaxed">
                Pixwith.ai combines cutting-edge technology with user-friendly design to deliver the most advanced Image to Video AI platform available today. Our commitment to quality, security, and innovation makes us the preferred choice for professionals and creators worldwide. Whether you&apos;re looking to enhance your marketing materials, create engaging social content, or explore new creative possibilities, Pixwith.ai provides the tools and reliability you need to bring your static images to life.
              </p>
            </div>

          </article>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 text-center bg-gradient-to-br from-ai-blue/10 via-background to-ai-purple/10 border-t border-border">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground mb-4">Ready to Transform Your Images?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of creators who are already using Pixwith.ai to bring their images to life.
          </p>
          <HeroButton variant="primary" size="lg" asChild>
            <a href="https://pixwith.ai/" target="_blank" rel="noopener noreferrer">
              Start Your Free Trial
            </a>
          </HeroButton>
        </div>
      </section>

      {/* Minimal Footer */}
      <footer className="py-8 border-t border-ai-blue/10 bg-background/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 text-center">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-6">
              <a href="mailto:hello@pixwith.ai" className="hover:text-ai-blue transition-colors">
                hello@pixwith.ai
              </a>
              <a href="#privacy" className="hover:text-ai-blue transition-colors">Privacy</a>
              <a href="#terms" className="hover:text-ai-blue transition-colors">Terms</a>
            </div>
            <p>© 2024 Pixwith.ai. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;