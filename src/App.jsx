import { useMemo, useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import PostComposer from "./components/PostComposer";
import PostList from "./components/PostList";

const seedPosts = [
  {
    id: "1",
    author: "Ava Thompson",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop",
    title: "Best practices for structuring large React apps in 2025?",
    content:
      "I’ve been working on a multi-team project and want to align on scalable patterns (routing, data fetching, feature boundaries). What patterns and libraries have worked well for you?",
    tags: ["react", "architecture", "frontend"],
    likes: 42,
    replies: 18,
    timeAgo: "2h",
  },
  {
    id: "2",
    author: "Noah Williams",
    avatar: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=200&auto=format&fit=crop",
    title: "Show and tell: your favorite developer keyboard shortcuts",
    content:
      "Dropping a thread to collect keyboard shortcuts that save you time daily. Bonus points for editor-agnostic ones!",
    tags: ["productivity", "tips"],
    likes: 27,
    replies: 11,
    timeAgo: "5h",
  },
  {
    id: "3",
    author: "Maya Chen",
    avatar: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=200&auto=format&fit=crop",
    title: "Self-hosting vs. managed services for small startups",
    content:
      "Curious how teams balance velocity, cost, and reliability. When do you choose managed DBs/queues vs. roll your own?",
    tags: ["devops", "cloud", "startups"],
    likes: 64,
    replies: 34,
    timeAgo: "1d",
  },
];

const seedCategories = [
  "announcements",
  "help",
  "showcase",
  "career",
  "design",
  "backend",
  "frontend",
];

const seedTrending = ["react", "ai", "ux", "cloud", "tips"];

export default function App() {
  const [posts, setPosts] = useState(seedPosts);
  const [query, setQuery] = useState("");

  const categories = useMemo(() => seedCategories, []);
  const trending = useMemo(() => seedTrending, []);

  const handleCreate = ({ title, content, tags }) => {
    const newPost = {
      id: Date.now().toString(),
      author: "You",
      avatar:
        "https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=200&auto=format&fit=crop",
      title,
      content,
      tags,
      likes: 0,
      replies: 0,
      timeAgo: "just now",
    };
    setPosts((prev) => [newPost, ...prev]);
  };

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      <Navbar onNewPostClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} onSearch={setQuery} />

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-4 py-6 sm:px-6 lg:grid-cols-[18rem_1fr] lg:px-8">
        <Sidebar categories={categories} trending={trending} />
        <main className="space-y-4">
          <PostComposer onCreate={handleCreate} />
          <PostList posts={posts} query={query} />
        </main>
      </div>

      <footer className="border-t border-neutral-200 bg-white/70 py-6">
        <div className="mx-auto max-w-7xl px-4 text-center text-sm text-neutral-600 sm:px-6 lg:px-8">
          Built with ❤️ for communities. Start a conversation and be kind.
        </div>
      </footer>
    </div>
  );
}
