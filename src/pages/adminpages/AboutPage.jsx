export default function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl">
      <p className="text-sm font-semibold uppercase tracking-wider text-orange-600">About the shop</p>
      <h1 className="mt-2 text-3xl font-bold text-slate-950">Built for people who listen closely.</h1>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <section className="border border-slate-200 bg-white p-6">
          <h2 className="text-lg font-bold text-slate-950">Our point of view</h2>
          <p className="mt-3 leading-7 text-slate-600">Signal & Sound is a focused audio supply concept for producers, performers, and home-studio builders. The catalog balances everyday essentials with gear that adds character.</p>
        </section>
        <section className="border border-slate-200 bg-white p-6">
          <h2 className="text-lg font-bold text-slate-950">What this prototype shows</h2>
          <ul className="mt-3 space-y-3 text-sm leading-6 text-slate-600">
            <li>Catalog browsing and category filtering</li>
            <li>Cart state shared across the storefront</li>
            <li>Product reviews and frontend checkout flow</li>
          </ul>
        </section>
      </div>
    </div>
  );
}