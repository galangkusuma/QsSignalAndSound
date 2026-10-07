import { products } from "../../data/products";

export default function AdminDashboard() {
  const categoryCount = new Set(products.map((product) => product.category)).size;
  const inventoryValue = products.reduce((total, product) => total + product.price * product.stock, 0);

  return (
    <div className="mx-auto max-w-7xl">
      <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-orange-600">Good morning, operator</p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-950">Studio overview</h1>
          <p className="mt-2 max-w-xl text-slate-600">A quick read on the gear currently moving through Signal & Sound.</p>
        </div>
        <span className="w-fit rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-700">All systems operational</span>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {[
          ["Catalog items", products.length, "active listings"],
          ["Categories", categoryCount, "gear families"],
          ["Units in stock", products.reduce((total, product) => total + product.stock, 0), "ready to ship"],
          ["Inventory value", `Rp ${(inventoryValue / 1000000).toFixed(1)}M`, "listed value"],
        ].map(([label, value, note]) => (
          <div key={label} className="border border-slate-200 bg-white p-5">
            <p className="text-sm text-slate-500">{label}</p>
            <p className="mt-3 text-2xl font-bold text-slate-950">{value}</p>
            <p className="mt-1 text-xs font-medium uppercase tracking-wide text-orange-600">{note}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-[minmax(0,1fr)_360px]">
        <section className="border border-slate-200 bg-white p-5 sm:p-6">
          <div className="flex items-center justify-between border-b border-slate-200 pb-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-orange-600">Inventory pulse</p>
              <h2 className="mt-1 text-xl font-bold text-slate-950">Recently listed gear</h2>
            </div>
            <span className="text-sm text-slate-500">{products.length} items</span>
          </div>
          <div className="divide-y divide-slate-200">
            {products.slice(-4).reverse().map((product) => (
              <div key={product.id} className="flex items-center justify-between gap-4 py-4">
                <div className="min-w-0">
                  <p className="truncate font-semibold text-slate-900">{product.name}</p>
                  <p className="mt-1 text-sm text-slate-500">{product.category}</p>
                </div>
                <span className="shrink-0 text-sm font-medium text-slate-700">{product.stock} in stock</span>
              </div>
            ))}
          </div>
        </section>
        <aside className="bg-slate-950 p-6 text-white">
          <p className="text-xs font-semibold uppercase tracking-wider text-orange-400">Operator note</p>
          <h2 className="mt-2 text-2xl font-bold">Make room for better sound.</h2>
          <p className="mt-3 text-sm leading-6 text-slate-400">Keep product descriptions specific, inventory current, and every signal path easy to understand.</p>
          <div className="mt-8 border-t border-white/10 pt-4 text-sm text-slate-300">Catalog sync <span className="float-right text-emerald-400">Live</span></div>
        </aside>
      </div>
    </div>
  );
}