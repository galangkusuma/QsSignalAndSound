import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../context/useCart";
import { formatPrice, products } from "../../data/products";

export default function Dashboard() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All categories");
  const { addItem } = useCart();
  const categories = ["All categories", ...new Set(products.map((product) => product.category))];
  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = category === "All categories" || product.category === category;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="mx-auto max-w-7xl">
      <section className="mb-8 border-b border-slate-300 pb-7">
        <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-orange-600">Signal & Sound / Curated gear</p>
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <h1 className="text-3xl font-bold text-slate-950">Build your sound</h1>
            <p className="mt-2 max-w-xl text-slate-600">Studio essentials and performance-ready gear for voices, instruments, and ideas.</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <label className="sr-only" htmlFor="product-search">Search products</label>
            <input
              id="product-search"
              type="search"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search products"
              className="min-w-56 rounded border border-slate-300 bg-white px-4 py-2.5 text-sm outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
            />
            <label className="sr-only" htmlFor="category-filter">Filter by category</label>
            <select
              id="category-filter"
              value={category}
              onChange={(event) => setCategory(event.target.value)}
              className="rounded border border-slate-300 bg-white px-4 py-2.5 text-sm outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
            >
              {categories.map((option) => <option key={option}>{option}</option>)}
            </select>
          </div>
        </div>
      </section>

      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-lg font-semibold text-slate-900">Featured gear</h2>
        <span className="text-sm text-slate-500">{filteredProducts.length} items</span>
      </div>
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {filteredProducts.map((product) => (
            <article key={product.id} className="overflow-hidden rounded-md border border-slate-200 bg-white">
              <Link to={`/product/${product.id}`} className="block overflow-hidden bg-slate-100">
                <img src={product.image} alt={product.name} className="aspect-[4/3] w-full object-cover transition-transform duration-300 hover:scale-105" />
              </Link>
              <div className="p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-orange-600">{product.category}</p>
                  <Link to={`/product/${product.id}`} className="mt-1 block font-semibold text-slate-900 hover:text-orange-600">
                  {product.name}
                </Link>
                <p className="mt-2 text-sm font-medium text-slate-700">{formatPrice(product.price)}</p>
                <button
                  type="button"
                  onClick={() => addItem(product.id)}
                  className="mt-4 w-full rounded bg-slate-950 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2"
                >
                  Add to Cart
                </button>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <p className="rounded border border-slate-200 bg-white px-5 py-8 text-center text-slate-600">No products match your search.</p>
      )}
    </div>
  );
}