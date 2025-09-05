
import Header from "@/components/Header";
import { useParams, Link } from "react-router-dom";
import { findPostByTitle } from "@/data/blogPosts";
import { Calendar, User, Clock, ArrowLeft } from "lucide-react";
import { HeroButton } from "@/components/ui/hero-button";
import { useEffect } from "react";

const BlogDetail = () => {
  const { title } = useParams();
  const post = title ? findPostByTitle(title) : undefined;

  useEffect(() => {
    if (post) document.title = `${post.title} | Pixwith.ai Blog`;
  }, [post]);

  if (!post) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <section className="pt-24 pb-24 px-4">
          <div className="container mx-auto max-w-3xl text-center">
            <h1 className="text-3xl font-display font-bold text-foreground mb-4">Post not found</h1>
            <p className="text-muted-foreground mb-8">The blog post you are looking for doesn't exist or was moved.</p>
            <HeroButton asChild>
              <Link to="/blog">Back to Blog</Link>
            </HeroButton>
          </div>
        </section>
      </div>
    );
  }

  const renderContent = (content: string) => {
    // Check if content is a heading
    if (content.startsWith('## ')) {
      return (
        <h2 className="text-2xl font-display font-bold text-foreground mt-8 mb-4 first:mt-0">
          {content.replace('## ', '')}
        </h2>
      );
    }
    
    // Regular paragraph
    return (
      <p className="text-muted-foreground leading-relaxed mb-4">
        {content}
      </p>
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="pt-24 pb-10 px-4 bg-gradient-to-r from-ai-blue/5 to-ai-purple/5 border-b border-border">
        <div className="container mx-auto max-w-4xl">
          <Link to="/blog" className="inline-flex items-center gap-2 text-muted-foreground hover:text-ai-blue mb-6">
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
          <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
            <div className="flex items-center gap-1"><User className="w-3 h-3" />{post.author}</div>
            <div className="flex items-center gap-1"><Calendar className="w-3 h-3" />{post.date}</div>
            <div className="flex items-center gap-1"><Clock className="w-3 h-3" />{post.readTime}</div>
          </div>
          <h1 className="text-4xl lg:text-5xl font-display font-bold text-foreground mb-2">{post.title}</h1>
          <span className="inline-block px-3 py-1 rounded-full bg-ai-blue/20 border border-ai-blue/30 text-xs font-medium text-ai-blue">
            {post.category}
          </span>
        </div>
      </section>

      {/* Content */}
      <main className="px-4 py-12">
        <article className="container mx-auto max-w-3xl">
          {post.content.map((content, idx) => (
            <div key={idx}>
              {renderContent(content)}
            </div>
          ))}
        </article>
      </main>
    </div>
  );
};

export default BlogDetail;
