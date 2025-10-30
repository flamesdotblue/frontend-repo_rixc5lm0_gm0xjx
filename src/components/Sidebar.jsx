import { Home, Hash, Flame, Star, MessageSquare } from "lucide-react";

export default function Sidebar({ categories = [], trending = [] }) {
  return (
    <aside className="hidden w-72 shrink-0 border-r border-neutral-200 bg-white/50 p-4 lg:block">
      <nav className="space-y-2">
        <SidebarItem icon={Home} label="Home" active />
        <SidebarItem icon={MessageSquare} label="Discussions" />
        <SidebarItem icon={Star} label="Top" />
        <SidebarItem icon={Flame} label="Hot" />
      </nav>

      <div className="mt-6">
        <h3 className="mb-2 text-xs font-semibold uppercase tracking-wide text-neutral-500">Categories</h3>
        <div className="space-y-1">
          {categories.map((c) => (
            <button
              key={c}
              className="flex w-full items-center justify-between rounded-md border border-transparent px-2 py-1.5 text-left text-sm text-neutral-700 transition hover:border-neutral-200 hover:bg-neutral-50"
            >
              <span className="inline-flex items-center gap-2"><Hash size={14} className="text-neutral-400" />{c}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="mt-6">
        <h3 className="mb-2 text-xs font-semibold uppercase tracking-wide text-neutral-500">Trending Tags</h3>
        <div className="flex flex-wrap gap-2">
          {trending.map((t) => (
            <span key={t} className="inline-flex items-center gap-1 rounded-full border border-neutral-200 bg-white px-2.5 py-1 text-xs text-neutral-700">
              <Hash size={12} className="text-neutral-400" /> {t}
            </span>
          ))}
        </div>
      </div>
    </aside>
  );
}

function SidebarItem({ icon: Icon, label, active = false }) {
  return (
    <button
      className={`flex w-full items-center gap-2 rounded-md px-2 py-2 text-sm transition ${
        active ? "bg-indigo-50 text-indigo-700" : "text-neutral-700 hover:bg-neutral-50"
      }`}
    >
      <Icon size={18} className={active ? "text-indigo-600" : "text-neutral-400"} />
      <span>{label}</span>
    </button>
  );
}
