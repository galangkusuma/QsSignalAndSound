import { NavLink } from "react-router-dom";

export default function Sidebar({ sidebarOpen, setSidebarOpen }) {
  const linkClass = ({ isActive }) =>
    `flex items-center gap-3 rounded px-3 py-2.5 text-sm font-medium transition-colors ${
      isActive ? "bg-orange-500 text-slate-950" : "text-slate-400 hover:bg-slate-800 hover:text-white"
    }`;

  return (
    <aside className={`${sidebarOpen ? "block" : "hidden"} absolute inset-y-0 left-0 z-20 w-72 bg-slate-950 shadow-xl md:relative md:block`}>
      <div className="border-b border-white/10 px-6 py-6">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-orange-400">Signal & Sound</p>
        <p className="mt-2 text-xl font-bold text-white">Control Room</p>
        <p className="mt-1 text-sm text-slate-400">Audio supply operations</p>
      </div>
      <nav className="flex flex-col gap-2 p-4">
        <p className="px-3 pb-1 text-[11px] font-semibold uppercase tracking-widest text-slate-500">Workspace</p>
        <NavLink to="/admin/dashboard" onClick={() => setSidebarOpen(false)} className={linkClass}>
          <span aria-hidden="true">▦</span> Dashboard
        </NavLink>
        <NavLink to="/admin/about" onClick={() => setSidebarOpen(false)} className={linkClass}>
          <span aria-hidden="true">◌</span> About the shop
        </NavLink>
      </nav>
      <div className="absolute bottom-0 w-full border-t border-white/10 px-6 py-5 text-xs text-slate-500">
        <p className="text-slate-300">System status</p>
        <p className="mt-1 flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-emerald-400" /> Catalog online</p>
      </div>
    </aside>
  );
}