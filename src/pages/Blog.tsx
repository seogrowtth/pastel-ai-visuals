import Header from "@/components/Header";
import { Calendar, User, ArrowRight, Clock } from "lucide-react";
import { HeroButton } from "@/components/ui/hero-button";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Best AI Tools to Animate Images into Videos (2025 Guide)",
      excerpt: "Discover the top AI-powered tools that transform static images into dynamic videos. From beginner-friendly options to professional-grade solutions, find the perfect tool for your creative needs.",
      author: "Alex Thompson",
      date: "January 15, 2025",
      readTime: "12 min read",
      category: "Tools",
      image: "/api/placeholder/600/400"
    },
    {
      id: 2,
      title: "How Image to Video AI is Transforming Social Media Marketing",
      excerpt: "Learn how brands are revolutionizing their social media presence with AI-generated video content. Explore case studies, best practices, and ROI metrics that matter.",
      author: "Sarah Martinez",
      date: "January 12, 2025",
      readTime: "10 min read",
      category: "Marketing",
      image: "/api/placeholder/600/400"
    },
    {
      id: 3,
      title: "Step-by-Step: How to Turn a Still Photo into a Cinematic Video",
      excerpt: "Master the art of creating cinematic videos from static images. This comprehensive tutorial covers everything from preparation to final export with professional tips.",
      author: "David Chen",
      date: "January 10, 2025",
      readTime: "15 min read",
      category: "Tutorial",
      image: "/api/placeholder/600/400"
    },
    {
      id: 4,
      title: "Top 5 Motion Styles Every Creator Should Try with AI Video Generators",
      excerpt: "Explore the most popular and effective motion styles in AI video generation. Learn when and how to use each style to maximize visual impact and engagement.",
      author: "Emma Rodriguez",
      date: "January 8, 2025",
      readTime: "8 min read",
      category: "Creative",
      image: "/api/placeholder/600/400"
    },
    {
      id: 5,
      title: "Why Short-Form Video Beats Static Images for Engagement",
      excerpt: "Dive deep into the psychology and data behind why video content outperforms static images across all platforms. Discover actionable strategies to boost your engagement rates.",
      author: "Michael Johnson",
      date: "January 6, 2025",
      readTime: "9 min read",
      category: "Strategy",
      image: "/api/placeholder/600/400"
    },
    {
      id: 6,
      title: "Image to Video AI vs Traditional Animation: Which is Right for You?",
      excerpt: "Compare the pros and cons of AI-powered image animation versus traditional animation methods. Make informed decisions based on budget, timeline, and quality requirements.",
      author: "Lisa Wang",
      date: "January 4, 2025",
      readTime: "11 min read",
      category: "Comparison",
      image: "/api/placeholder/600/400"
    },
    {
      id: 7,
      title: "The Future of AI Video Generation: From Photos to Hollywood-Level Films",
      excerpt: "Explore the cutting-edge developments in AI video technology and their potential impact on the entertainment industry. What does the future hold for AI-generated content?",
      author: "Robert Kim",
      date: "January 2, 2025",
      readTime: "13 min read",
      category: "Future",
      image: "/api/placeholder/600/400"
    },
    {
      id: 8,
      title: "How Artists & Designers Are Using Image to Video AI to Showcase Portfolios",
      excerpt: "Discover innovative ways creative professionals are leveraging AI video tools to bring their portfolios to life and attract more clients in competitive markets.",
      author: "Sophie Brown",
      date: "December 30, 2024",
      readTime: "10 min read",
      category: "Creative",
      image: "/api/placeholder/600/400"
    },
    {
      id: 9,
      title: "10 Creative Marketing Campaigns Powered by Image to Video AI",
      excerpt: "Analyze successful marketing campaigns that utilized AI image-to-video technology. Learn from real-world examples and apply these strategies to your own campaigns.",
      author: "James Wilson",
      date: "December 28, 2024",
      readTime: "14 min read",
      category: "Marketing",
      image: "/api/placeholder/600/400"
    },
    {
      id: 10,
      title: "Choosing the Best AI Image Animator: Features, Specs, and Pricing Compared",
      excerpt: "A comprehensive comparison of leading AI image animation platforms. Detailed analysis of features, pricing, and performance to help you make the right choice.",
      author: "Maria Garcia",
      date: "December 26, 2024",
      readTime: "16 min read",
      category: "Review",
      image: "/api/placeholder/600/400"
    }
  ];

  const categories = ["All", "Tools", "Marketing", "Tutorial", "Creative", "Strategy", "Comparison", "Future", "Review"];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-ai-blue/10 border border-ai-blue/20 backdrop-blur-sm mb-8">
            <Calendar className="w-4 h-4 text-ai-blue" />
            <span className="text-sm font-medium text-foreground">Latest Insights</span>
          </div>
          
          <h1 className="text-4xl lg:text-6xl font-display font-bold text-foreground mb-6 leading-tight">
            AI Video Generation
            <span className="block bg-text-gradient bg-clip-text text-transparent">
              Blog & Insights
            </span>
          </h1>
          
          <p className="text-lg lg:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Stay updated with the latest trends, tutorials, and insights in AI video generation technology.
          </p>
        </div>
      </section>

      {/* Filter Categories */}
      <section className="px-4 mb-12">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  category === "All"
                    ? "bg-ai-blue/20 text-ai-blue border border-ai-blue/30"
                    : "bg-secondary/50 text-muted-foreground hover:bg-ai-blue/10 hover:text-ai-blue border border-border"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="px-4 pb-20">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="group bg-card border border-border rounded-lg overflow-hidden hover:border-ai-blue/30 transition-all duration-300 hover:shadow-card"
              >
                <div className="aspect-video bg-gradient-to-br from-ai-blue/20 to-ai-purple/20 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-ai-blue/10 to-ai-purple/10 group-hover:from-ai-blue/20 group-hover:to-ai-purple/20 transition-all duration-300" />
                  <div className="absolute bottom-4 left-4">
                    <span className="inline-block px-3 py-1 rounded-full bg-ai-blue/20 border border-ai-blue/30 text-xs font-medium text-ai-blue">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <User className="w-3 h-3" />
                      {post.author}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {post.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </div>
                  </div>
                  
                  <h3 className="font-display font-semibold text-lg text-foreground mb-3 group-hover:text-ai-blue transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <button className="inline-flex items-center gap-2 text-ai-blue hover:text-ai-purple text-sm font-medium group/btn">
                    Read More
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="px-4 py-20 bg-gradient-to-r from-ai-blue/5 to-ai-purple/5 border-t border-border">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground mb-6">
            Stay Updated with AI Video Trends
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Get the latest insights, tutorials, and industry news delivered to your inbox weekly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-input border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ai-blue/50"
            />
            <HeroButton variant="primary" size="default">
              Subscribe
            </HeroButton>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;