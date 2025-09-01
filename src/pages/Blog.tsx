import Header from "@/components/Header";
import { Calendar, User, ArrowRight, Clock } from "lucide-react";
import { HeroButton } from "@/components/ui/hero-button";
import { Link } from "react-router-dom";
import { blogPosts } from "@/data/blogPosts";

const Blog = () => {

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
              <Link
                key={post.id}
                to={`/blog/${post.slug}`}
                className="group block"
              >
                <article className="bg-card border border-border rounded-lg overflow-hidden hover:border-ai-blue/30 transition-all duration-300 hover:shadow-card cursor-pointer">
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
                    
                    <div className="inline-flex items-center gap-2 text-ai-blue group-hover:text-ai-purple text-sm font-medium group/btn">
                      Read More
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </article>
              </Link>
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