import { useState } from "react";
import { Tag, Image as ImageIcon, Smile, Send } from "lucide-react";

export default function PostComposer({ onCreate }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState("");

  const canPost = title.trim().length > 0 && content.trim().length > 0;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!canPost) return;
    const tagList = tags
      .split(",")
      .map((t) => t.trim())
      .filter(Boolean);
    onCreate?.({ title: title.trim(), content: content.trim(), tags: tagList });
    setTitle("");
    setContent("");
    setTags("");
  };

  return (
    <div className="rounded-lg border border-neutral-200 bg-white p-4 shadow-sm">
      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          placeholder="Start a new discussion with a clear title"
          className="w-full rounded-md border border-neutral-200 bg-white px-3 py-2 text-sm outline-none ring-indigo-500/0 transition focus:border-neutral-300 focus:ring-2 focus:ring-indigo-500/10"
        />
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Share details, context, and what you’d like feedback on"
          rows={4}
          className="w-full resize-y rounded-md border border-neutral-200 bg-white px-3 py-2 text-sm outline-none ring-indigo-500/0 transition focus:border-neutral-300 focus:ring-2 focus:ring-indigo-500/10"
        />
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2 text-neutral-600">
            <label className="relative inline-flex items-center gap-2 rounded-md border border-neutral-200 bg-neutral-50 px-2.5 py-1.5 text-xs">
              <Tag size={14} />
              <input
                value={tags}
                onChange={(e) => setTags(e.target.value)}
                placeholder="tags comma separated"
                className="w-48 bg-transparent outline-none"
              />
            </label>
            <button type="button" className="rounded-md p-2 transition hover:bg-neutral-100">
              <ImageIcon size={18} />
            </button>
            <button type="button" className="rounded-md p-2 transition hover:bg-neutral-100">
              <Smile size={18} />
            </button>
          </div>
          <button
            type="submit"
            disabled={!canPost}
            className="inline-flex items-center gap-2 self-end rounded-md bg-indigo-600 px-3 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-60"
          >
            <Send size={16} /> Publish
          </button>
        </div>
      </form>
    </div>
  );
}
