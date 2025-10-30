import { useMemo } from "react";
import { MessageSquare, ThumbsUp, Clock, Hash } from "lucide-react";

export default function PostList({ posts = [], query = "" }) {
  const filtered = useMemo(() => {
    if (!query) return posts;
    const q = query.toLowerCase();
    return posts.filter((p) =>
      [p.title, p.content, ...(p.tags || [])].join(" ").toLowerCase().includes(q)
    );
  }, [posts, query]);

  return (
    <div className="space-y-3">
      {filtered.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
      {filtered.length === 0 && (
        <div className="rounded-lg border border-neutral-200 bg-white p-6 text-center text-sm text-neutral-600">
          No posts found. Try a different search.
        </div>
      )}
    </div>
  );
}

function PostCard({ post }) {
  return (
    <article className="rounded-lg border border-neutral-200 bg-white p-4 shadow-sm transition hover:border-neutral-300">
      <div className="flex items-start gap-3">
        <img
          src={post.avatar}
          alt={post.author}
          className="h-10 w-10 rounded-full object-cover"
        />
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2 text-sm text-neutral-600">
            <span className="font-medium text-neutral-800">{post.author}</span>
            <Dot />
            <Clock size={14} />
            <span>{post.timeAgo}</span>
          </div>
          <h3 className="mt-1 text-base font-semibold text-neutral-900">{post.title}</h3>
          <p className="mt-1 line-clamp-3 text-sm text-neutral-700">{post.content}</p>
          {post.tags && post.tags.length > 0 && (
            <div className="mt-2 flex flex-wrap gap-2">
              {post.tags.map((t) => (
                <span key={t} className="inline-flex items-center gap-1 rounded-full border border-neutral-200 bg-white px-2 py-0.5 text-xs text-neutral-700">
                  <Hash size={12} className="text-neutral-400" />{t}
                </span>
              ))}
            </div>
          )}
          <div className="mt-3 flex items-center gap-3 text-sm text-neutral-600">
            <span className="inline-flex items-center gap-1 rounded-md border border-neutral-200 px-2 py-1">
              <ThumbsUp size={16} className="text-neutral-500" /> {post.likes}
            </span>
            <span className="inline-flex items-center gap-1 rounded-md border border-neutral-200 px-2 py-1">
              <MessageSquare size={16} className="text-neutral-500" /> {post.replies} replies
            </span>
          </div>
        </div>
      </div>
    </article>
  );
}

function Dot() {
  return <span className="inline-block h-1 w-1 rounded-full bg-neutral-400" />;
}
