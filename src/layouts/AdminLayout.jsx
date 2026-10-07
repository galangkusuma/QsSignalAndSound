import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { useState } from "react";

export default function AdminLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-[#f3f0e9]">
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className="flex min-w-0 flex-1 flex-col">
        <header className="flex items-center justify-between border-b border-slate-200 bg-white px-5 py-4 sm:px-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-600">Admin / Control room</p>
            <p className="mt-1 text-sm text-slate-500">Keep the signal chain moving.</p>
          </div>
          <button type="button" aria-label="Toggle admin navigation" className="rounded border border-slate-300 px-3 py-2 text-xl leading-none text-slate-700 md:hidden" onClick={() => setSidebarOpen(!sidebarOpen)}>
            ☰
          </button>
        </header>
        <main className="flex-1 overflow-y-auto p-5 sm:p-8">
          <Outlet />
        </main>
        <footer className="border-t border-slate-200 bg-white px-5 py-4 text-center text-xs text-slate-500 sm:px-8">
          Signal & Sound Control Room · v1.0.0
        </footer>
      </div>
    </div>
  );
}