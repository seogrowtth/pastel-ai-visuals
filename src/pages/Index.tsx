import { HeroButton } from "@/components/ui/hero-button";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
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
  ArrowRight,
  Users,
  Video,
  Image as ImageIcon,
  Star,
  Layers,
  Gauge,
  Globe,
  DollarSign
} from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-16 bg-gradient-to-br from-ai-blue/5 via-background to-ai-purple/5">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-ai-blue/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-ai-purple/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative container mx-auto px-4 py-20 lg:py-32">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="mb-6 px-4 py-2 bg-ai-blue/10 text-ai-blue border-ai-blue/20">
                <Star className="w-4 h-4 mr-2" />
                #1 AI Video Generator 2025
              </Badge>
              
              <h1 className="text-5xl lg:text-7xl xl:text-8xl font-bold mb-8 leading-tight">
                <span className="bg-gradient-to-r from-ai-blue to-ai-purple bg-clip-text text-transparent">
                  AI-Powered
                </span>
                <br />
                <span className="text-foreground">Video Creation</span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto">
                Transform any image into cinematic video content with our revolutionary AI technology. 
                No editing skills required.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <HeroButton variant="primary" size="lg" className="group min-w-48" asChild>
                  <a href="https://pixwith.ai/" target="_blank" rel="noopener noreferrer">
                    <Play className="w-5 h-5 mr-2" />
                    Try Free Now
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </a>
                </HeroButton>
                <Button variant="outline" size="lg" className="min-w-48 border-ai-blue/30 hover:border-ai-blue/50">
                  <Video className="w-5 h-5 mr-2" />
                  Watch Demo
                </Button>
              </div>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-ai-blue mb-2">10M+</div>
                <div className="text-muted-foreground">Videos Created</div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-ai-purple mb-2">30s</div>
                <div className="text-muted-foreground">Average Processing</div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-ai-cyan mb-2">4K</div>
                <div className="text-muted-foreground">Max Resolution</div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-ai-magenta mb-2">99%</div>
                <div className="text-muted-foreground">Satisfaction Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">How It Works</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Transform your images into videos in just three simple steps
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-12">
              <div className="text-center group">
                <div className="relative mb-8">
                  <div className="w-24 h-24 mx-auto bg-gradient-to-br from-ai-blue to-ai-purple rounded-2xl flex items-center justify-center shadow-glow group-hover:scale-110 transition-transform duration-300">
                    <ImageIcon className="w-12 h-12 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-ai-blue rounded-full flex items-center justify-center text-white font-bold text-sm">1</div>
                </div>
                <h3 className="text-2xl font-bold mb-4">Upload Image</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Simply drag & drop or upload any image. Our AI supports all major formats including JPEG, PNG, and WebP.
                </p>
              </div>
              
              <div className="text-center group">
                <div className="relative mb-8">
                  <div className="w-24 h-24 mx-auto bg-gradient-to-br from-ai-purple to-ai-magenta rounded-2xl flex items-center justify-center shadow-glow group-hover:scale-110 transition-transform duration-300">
                    <Wand2 className="w-12 h-12 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-ai-purple rounded-full flex items-center justify-center text-white font-bold text-sm">2</div>
                </div>
                <h3 className="text-2xl font-bold mb-4">Choose Style</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Select from various motion styles: cinematic, ambient, parallax, or custom settings to match your vision.
                </p>
              </div>
              
              <div className="text-center group">
                <div className="relative mb-8">
                  <div className="w-24 h-24 mx-auto bg-gradient-to-br from-ai-cyan to-ai-blue rounded-2xl flex items-center justify-center shadow-glow group-hover:scale-110 transition-transform duration-300">
                    <Video className="w-12 h-12 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-ai-cyan rounded-full flex items-center justify-center text-white font-bold text-sm">3</div>
                </div>
                <h3 className="text-2xl font-bold mb-4">Export Video</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Download your animated video in 4K quality within 30 seconds. Multiple formats available for any platform.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Generated Showcase */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 px-4 py-2 bg-ai-purple/10 text-ai-purple border-ai-purple/20">
              <Sparkles className="w-4 h-4 mr-2" />
              AI Gallery
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Transform Any Image</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              See the magic of AI in action with these stunning transformations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {[
              {
                src: "/lovable-uploads/a580120b-b2a1-41b4-bfa4-71d424b1636b.png",
                title: "Beauty & Lifestyle",
                description: "Elegant product animation"
              },
              {
                src: "/lovable-uploads/79e44702-268e-466b-9f94-588ed9bca666.png",
                title: "Education & 3D",
                description: "Interactive learning content"
              },
              {
                src: "/lovable-uploads/54b13250-ef7b-4b39-86d6-498995e5602e.png",
                title: "Food & Cooking",
                description: "Dynamic culinary visuals"
              },
              {
                src: "/lovable-uploads/b4d2733a-8764-4520-89f8-af1b0403939f.png",
                title: "Fashion & Style",
                description: "Professional modeling shots"
              }
            ].map((item, index) => (
              <Card key={index} className="group overflow-hidden bg-card/50 border-border/50 hover:border-ai-blue/30 transition-all duration-500 hover:shadow-glow">
                <div className="aspect-square overflow-hidden relative">
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                      <p className="text-white/80 text-sm">{item.description}</p>
                      <Button size="sm" variant="outline" className="mt-4 border-white/20 text-white hover:bg-white/10">
                        <Play className="w-4 h-4 mr-2" />
                        View Animation
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gradient-to-br from-ai-blue/5 via-background to-ai-purple/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 px-4 py-2 bg-ai-blue/10 text-ai-blue border-ai-blue/20">
              <Layers className="w-4 h-4 mr-2" />
              Powerful Features
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Everything You Need</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Professional-grade AI technology with intuitive controls for creators of all levels
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {[
              {
                icon: Zap,
                title: "Lightning Speed",
                description: "Generate high-quality videos in just 30-60 seconds using our optimized AI infrastructure",
                color: "ai-blue"
              },
              {
                icon: ImageIcon,
                title: "4K Quality Output",
                description: "Export videos in stunning 4K resolution with crystal-clear details for any platform",
                color: "ai-purple"
              },
              {
                icon: Palette,
                title: "Multiple Motion Styles",
                description: "Choose from cinematic, ambient, parallax, zoom, and custom motion styles",
                color: "ai-cyan"
              },
              {
                icon: Shield,
                title: "Secure & Private",
                description: "Images processed securely and deleted after 24 hours. Full privacy protection guaranteed",
                color: "ai-magenta"
              },
              {
                icon: Users,
                title: "Batch Processing",
                description: "Upload and process multiple images simultaneously to boost your productivity",
                color: "ai-blue"
              },
              {
                icon: Video,
                title: "Multiple Formats",
                description: "Export in MP4, WebM, MOV, and GIF formats optimized for social media and web",
                color: "ai-purple"
              },
              {
                icon: Sparkles,
                title: "Smart Object Detection",
                description: "Advanced AI identifies objects and backgrounds for natural motion effects",
                color: "ai-cyan"
              },
              {
                icon: Clock,
                title: "Real-time Preview",
                description: "See motion effects instantly before generating with preview controls",
                color: "ai-magenta"
              },
              {
                icon: Play,
                title: "Loop & Duration Control",
                description: "Customize video length from 3-15 seconds with seamless looping options",
                color: "ai-blue"
              }
            ].map((feature, index) => (
              <Card key={index} className="group p-8 bg-card/50 backdrop-blur-sm border-border/50 hover:border-ai-blue/30 transition-all duration-500 hover:shadow-glow hover:scale-105">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br from-${feature.color} to-${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-24 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 px-4 py-2 bg-ai-cyan/10 text-ai-cyan border-ai-cyan/20">
              <Globe className="w-4 h-4 mr-2" />
              Real-World Applications  
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Perfect For Every Industry</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From e-commerce to social media, discover how AI video generation transforms content creation
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {[
              {
                icon: "🛍️",
                title: "E-Commerce",
                description: "Transform product photos into engaging demos that increase conversions by 300%",
                stat: "+300% conversions"
              },
              {
                icon: "🏠", 
                title: "Real Estate",
                description: "Bring property listings to life with cinematic walkthroughs and ambient motion",
                stat: "50% more views"
              },
              {
                icon: "📱",
                title: "Social Media",
                description: "Create scroll-stopping content that drives engagement across all platforms",
                stat: "5x engagement"
              },
              {
                icon: "🎨",
                title: "Creative Arts",
                description: "Transform static portfolios into dynamic showcases that captivate audiences",
                stat: "Professional quality"
              }
            ].map((useCase, index) => (
              <Card key={index} className="group p-8 text-center bg-card/50 border-border/50 hover:border-ai-cyan/30 transition-all duration-500 hover:shadow-glow hover:scale-105">
                <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {useCase.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">{useCase.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">{useCase.description}</p>
                <Badge className="bg-ai-cyan/10 text-ai-cyan border-ai-cyan/20">
                  {useCase.stat}
                </Badge>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 px-4 py-2 bg-ai-magenta/10 text-ai-magenta border-ai-magenta/20">
              <DollarSign className="w-4 h-4 mr-2" />
              Simple Pricing
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Choose Your Plan</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Start free and scale as you grow. No hidden fees, cancel anytime.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="p-8 bg-card/50 border-border/50 hover:border-ai-blue/30 transition-all duration-500">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-2">Starter</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-ai-blue">$9</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
                <ul className="space-y-4 text-left mb-8">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span>50 video generations</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span>HD quality output</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span>Basic motion styles</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span>Email support</span>
                  </li>
                </ul>
                <Button className="w-full">Get Started</Button>
              </div>
            </Card>
            
            <Card className="p-8 bg-gradient-to-b from-ai-blue/10 to-ai-purple/10 border-ai-blue/50 relative overflow-hidden hover:shadow-glow transition-all duration-500 scale-105">
              <Badge className="absolute top-4 right-4 bg-ai-blue text-white">Most Popular</Badge>
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-2">Professional</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-ai-blue">$29</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
                <ul className="space-y-4 text-left mb-8">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span>200 video generations</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span>4K quality output</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span>All motion styles</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span>Priority processing</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span>Batch processing</span>
                  </li>
                </ul>
                <HeroButton className="w-full" size="lg">Upgrade Now</HeroButton>
              </div>
            </Card>
            
            <Card className="p-8 bg-card/50 border-border/50 hover:border-ai-purple/30 transition-all duration-500">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-2">Enterprise</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-ai-purple">Custom</span>
                </div>
                <ul className="space-y-4 text-left mb-8">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span>Unlimited generations</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span>API access</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span>Custom integrations</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span>Dedicated support</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span>SLA guarantee</span>
                  </li>
                </ul>
                <Button variant="outline" className="w-full border-ai-purple/30 hover:border-ai-purple/50">Contact Sales</Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 bg-gradient-to-br from-ai-blue/10 via-background to-ai-purple/10 relative overflow-hidden border-t border-border/20">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-ai-blue/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-ai-purple/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-6 px-4 py-2 bg-ai-blue/10 text-ai-blue border-ai-blue/20">
              <Star className="w-4 h-4 mr-2" />
              Ready to Get Started?
            </Badge>
            
            <h2 className="text-4xl lg:text-6xl font-bold mb-8">
              <span className="bg-gradient-to-r from-ai-blue to-ai-purple bg-clip-text text-transparent">
                Create Stunning Videos
              </span>
              <br />
              <span className="text-foreground">in Seconds</span>
            </h2>
            
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
              Join thousands of creators who have transformed over 10 million images into captivating videos. 
              Start your free trial today – no credit card required.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <HeroButton variant="primary" size="lg" className="group min-w-56" asChild>
                <a href="https://pixwith.ai/" target="_blank" rel="noopener noreferrer">
                  <Play className="w-5 h-5 mr-2" />
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </HeroButton>
              <Button variant="outline" size="lg" className="min-w-56 border-ai-purple/30 hover:border-ai-purple/50">
                <Video className="w-5 h-5 mr-2" />
                View Examples
              </Button>
            </div>
            
            <div className="mt-12 flex flex-col sm:flex-row justify-center items-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>Free trial • No credit card</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>10 free videos</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>Cancel anytime</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="py-12 bg-card/50 border-t border-border/20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-lg font-bold mb-4 text-foreground">Pixwith.ai</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Transform your images into stunning videos with AI. Fast, secure, and professional quality.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-foreground">Product</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#features" className="text-muted-foreground hover:text-ai-blue transition-colors">Features</a></li>
                <li><a href="#pricing" className="text-muted-foreground hover:text-ai-blue transition-colors">Pricing</a></li>
                <li><a href="/blog" className="text-muted-foreground hover:text-ai-blue transition-colors">Blog</a></li>
                <li><a href="#faq" className="text-muted-foreground hover:text-ai-blue transition-colors">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-foreground">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#about" className="text-muted-foreground hover:text-ai-blue transition-colors">About</a></li>
                <li><a href="#contact" className="text-muted-foreground hover:text-ai-blue transition-colors">Contact</a></li>
                <li><a href="#careers" className="text-muted-foreground hover:text-ai-blue transition-colors">Careers</a></li>
                <li><a href="#press" className="text-muted-foreground hover:text-ai-blue transition-colors">Press</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-foreground">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#privacy" className="text-muted-foreground hover:text-ai-blue transition-colors">Privacy Policy</a></li>
                <li><a href="#terms" className="text-muted-foreground hover:text-ai-blue transition-colors">Terms of Service</a></li>
                <li><a href="#security" className="text-muted-foreground hover:text-ai-blue transition-colors">Security</a></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-border/20">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-sm text-muted-foreground">
                © 2025 Pixwith.ai. All rights reserved.
              </div>
              <div className="flex items-center gap-6">
                <a href="mailto:hello@pixwith.ai" className="text-sm text-muted-foreground hover:text-ai-blue transition-colors">
                  hello@pixwith.ai
                </a>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm text-muted-foreground">All systems operational</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;