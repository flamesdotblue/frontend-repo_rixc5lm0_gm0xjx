import { Search, Bell, Plus, UserCircle2 } from "lucide-react";

export default function Navbar({ onNewPostClick, onSearch }) {
  return (
    <header className="sticky top-0 z-20 w-full border-b border-neutral-200 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-600 text-white font-bold">CF</div>
          <span className="hidden text-sm font-semibold text-neutral-800 sm:block">Community Forum</span>
        </div>

        <div className="relative ml-auto flex-1 sm:ml-4 sm:max-w-md">
          <Search className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400" size={18} />
          <input
            type="text"
            placeholder="Search posts, tags, people..."
            onChange={(e) => onSearch?.(e.target.value)}
            className="w-full rounded-md border border-neutral-200 bg-white pl-9 pr-3 py-2 text-sm outline-none ring-indigo-500/0 transition focus:border-neutral-300 focus:ring-2 focus:ring-indigo-500/10"
          />
        </div>

        <div className="ml-2 flex items-center gap-2 sm:gap-3">
          <button
            onClick={onNewPostClick}
            className="inline-flex items-center gap-2 rounded-md bg-indigo-600 px-3 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-indigo-700"
          >
            <Plus size={16} />
            <span className="hidden sm:block">New Post</span>
          </button>
          <button className="rounded-md p-2 text-neutral-600 transition hover:bg-neutral-100">
            <Bell size={18} />
          </button>
          <button className="rounded-full border border-neutral-200 p-1.5 transition hover:bg-neutral-100">
            <UserCircle2 size={22} className="text-neutral-700" />
          </button>
        </div>
      </div>
    </header>
  );
}
